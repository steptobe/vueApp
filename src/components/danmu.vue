<template>

	<div class="barrage_wrap">

		<div class="barrage_line"></div>

		<div class="barrage_container">

         <template v-for="item in r.map_road">
             <div class="" has_finish="" map_number="" length="" width="" height="" road_name="" :style="item.style">{{item}}</div>
         </template>
        
        </div>

	</div>

</template>

<script>
const MAX_AMOUNT = 20; //最大条数

const MIN_RUNNERS = 20; //最小滑动条数

const UNIT_PADDINGTOP = 15; //paddingtop

const UNIT_PADDINGLEFT = 20; //paddingleft

export default {
  data() {
    return {
      d: {
        square_high: 0, //总的高度

        roads: 0, //路径

        addRunners: 0 //增加的行人数
      },

      r: {
        init_all_road: [], //初始化全部路径

        all_road: [], //全部路径

        map_road: {}, //能看到的行人

        runner_idx: [] //行人id
      },

      glo: {
        screen_runners_max: 0,

        play_count: 0,

        runners_play_count: 0 //正在走的行人
      },

      help: {
        road_finish: {}, //结束

        road_finish_runner: {} //结束的行人
      },

      fail_queue: [], //失败的传输

      global_time_out: {}
    };
  },
  mounted() {},
  methods: {
    _initBarriage(options) {
      this.d = Object.assign({}, this.d, options); //合并对象

      this.d.roads = 1; //获取行数

      this.glo.screen_runners_max = this.d.roads * this.d.road_per_runner; //能看到的行人

      for (let i = 0; i < this.d.roads; i++) {
        this.r.all_road[i] = {
          //其中一行的属性
          name: i,

          runner: {}, //包含的行人

          amount: 0
        };

        this.r.init_all_road[i] = i; //
      }

      if (this.d.show_lines) {
        let _lines = "";

        for (let k = 0; k < this.d.roads; k++) {
          _lines += `<div style="height: ${
            this.d.road_high
          }px;border-bottom: 1px solid #000;box-sizing: border-box;"></div>`;
        }

        document.getElementsByClassName("barrage_line")[0].innerHTML = _lines;
      }

      this.d.addRunners = this.d.runners; //this.danmuData 全部的数组

      if (this.d.runners.length < MIN_RUNNERS) {
        this.d.addRunners = this.shuffle(
          this.d.runners.concat(this.d.runners, this.d.runners)
        );
      }
      console.log("行人", this.d.runners);
      this.d.addRunners.forEach((unit, i) => {
        this.r.map_road[i] = unit;

        this.r.runner_idx.push(i); //行人的id
      });

      this.put_runner_to_road(-1, {}); //put_runner_to_road(roadName, aheadOption)
    },

    getRandomInt(min, max) {
      //随机数
      return Math.floor(Math.random() * (max - min + 1) + min);
    },

    //随机获取
    shuffle(arr) {
      let _arr = arr.slice();

      for (let i = 0; i < _arr.length; i++) {
        let j = this.getRandomInt(0, i);

        let t = _arr[i];

        _arr[i] = _arr[j];

        _arr[j] = t;
      }

      return _arr;
    },

    //把数据放上流程上
    put_runner_to_road(roadName, aheadOption) {
      if (roadName == -1) {
        if (this.r.init_all_road.length) {
          this.match_road_to_runner(this.r.init_all_road[0]);//

          this.r.init_all_road.splice(0, 1);

          this.put_runner_to_road(-1, {});
        }
      } else {
        this.match_road_to_runner(roadName, aheadOption);
      }
    },

    //获取匹配的流程
    match_road_to_runner(roadName, aheadOption) {
      let road_data_idx = "";

      let roadDatas = this.r.all_road.filter(function(obj, i) {
        if (obj.name == roadName) {//获取匹配的数据
          road_data_idx = i;

          return obj;
        }
      });

      if (roadDatas && roadDatas.length) {
        let road_data = roadDatas[0];

        if (road_data && road_data.amount >= 0) {
          let runner = this.get_runner();

          if (runner) {
            road_data.amount++;

            road_data.runner[runner.mapNumber] = runner.mapObj;
            console.log(road_data.amount)
            if (road_data.amount >= this.d.road_per_runner) {
              this.help.road_finish[roadName] = road_data.amount;

              this.help.road_finish_runner[roadName] = Object.assign(
                true,
                {},
                road_data.runner
              );

              this.r.all_road.splice(road_data_idx, 1);
            }

            this.go_run(roadName, runner.mapObj, aheadOption);
            console.log(runner.mapObj)
          } else {
            this.fail_queue.push({
              roadName: roadName,

              aheadOption: Object.assign(true, {}, aheadOption)
            });
          }
        }
      } else {
        this.fail_queue.push({
          roadName: roadName,

          aheadOption: Object.assign(true, {}, aheadOption)
        });
      }
    },

    //获取正走的
    get_runner() {
      let runner_idx = this.r.runner_idx; //正在走的行人id

      let runner_idx_length = runner_idx.length;

      if (runner_idx_length > 0) {
        this.glo.runners_play_count++;

        this.glo.play_count =
          (this.glo.runners_play_count / (this.glo.screen_runners_max + 1)) >>
          0;

        let map_code = (Math.random() * runner_idx_length) >> 0;

        let map_number = runner_idx[map_code];

        let map_content = this.r.map_road[map_number];

        let runner = this.init_runner(
          map_number,
          map_content,
          this.d.square.querySelector('.unit[has_finish="true"]')
        );

        this.r.runner_idx.splice(map_code, 1);

        return runner;
      } else {
        return null;
      }
    },

    init_runner(mapNumber, mapContent, $replace) {
      //把行人的信息集合放进container里
      let _$div;

      if (!$replace) {
        _$div = document.createElement("div");

        _$div.addEventListener("webkitAnimationEnd", ev => {
          this.run_finish(ev);
        });

        _$div.addEventListener("click", ev => {
          this.$emit("runClick", ev.target);
        });

        this.d.square.appendChild(_$div);
      } else {
        _$div = $replace;
      }

      _$div.setAttribute("class", "unit");

      _$div.setAttribute("has_finish", "false");

      _$div.setAttribute("map_number", mapNumber);

      _$div.setAttribute("length", mapContent.split("").length);

      _$div.innerHTML = mapContent;

      if (_$div.nodeType == 1) {
        _$div.setAttribute(
          "width",
          parseFloat(window.getComputedStyle(_$div).width) +
            UNIT_PADDINGLEFT * 2
        );

        _$div.setAttribute(
          "height",
          parseFloat(window.getComputedStyle(_$div).height) +
            UNIT_PADDINGTOP * 2
        );
      }

      return {
        mapNumber: mapNumber,

        mapObj: _$div
      };
    },

    go_run(roadName, $runner, aheadOption) {
      let delay = 0;

      if (this.d.road_per_runner < MAX_AMOUNT) {
        //动画等待时间
        delay =
          1 /
          Math.sqrt(this.d.road_per_runner) *
          (0.5 +
            (this.glo.play_count > 2 ? 1 : Math.min(Math.random(), 0.5)) *
              (Math.abs(Math.sin(roadName)) * 2 + Math.random() * 6));
      }

      let text_length = $runner.getAttribute("length");
      //动画使用时间
      let duration = Math.floor(
        8 +
          Math.abs(Math.cos(roadName)) * Math.max(text_length, 4) +
          Math.random() * Math.max(text_length * 1.5, 10)
      );

      if (this.d.duration) {
        duration = this.d.duration;
      }
      $runner.style.color = this.d.colorArr[
        Math.floor(Math.random() * this.d.colorArr.length)
      ];
      $runner.style.fontSize = this.d.fontSize;
      $runner.style.fontWeight = this.d.fontWeight;
      if (this.d.road_padding) {
        $runner.style.top =
          this.d.road_padding +
          (roadName % this.d.roads) * this.d.road_high +
          "px";
      } else {
        $runner.style.top =
          8 +
          (roadName % this.d.roads) * this.d.road_high +
          Math.sin(Math.random() * 50) * 10 +
          "px";
      }

      let width = parseFloat(window.getComputedStyle(this.d.square).width);

      let distance = parseFloat($runner.getAttribute("width"));

      try {
        if (aheadOption.leafTime) {
          let realLeafTime = aheadOption.leafTime - parseFloat(delay);

          if (realLeafTime > 0) {
            let maxSpeed = width / realLeafTime;

            let maxDuration = (distance + width) / maxSpeed;

            duration = Math.max(parseFloat(duration), maxDuration);
          }
        }
      } catch (e) {
        aheadOption = { leafTime: 0 };
      }

      $runner.style.animationDelay = delay + "s";

      $runner.style.webkitAnimationDelay = delay + "s";

      $runner.style.animationDuration = duration + "s";

      $runner.style.webkitAnimationDuration = duration + "s";

      let _className = "unit danmu_unit ";

      if (this.glo.play_count == 0) {
        _className += "danmu_unit_half";
      } else {
        _className += "danmu_unit_all";
      }

      $runner.setAttribute("class", _className);

      $runner.setAttribute("road_name", roadName);

      delay = parseFloat(delay);

      duration = parseFloat(duration);

      let speed = (distance + width) / duration;

      let shown_time = distance / speed;

      let next_delay = 0;

      if (this.d.road_per_runner < MAX_AMOUNT) {
        next_delay =
          (delay +
            shown_time +
            (duration - shown_time) / this.d.road_per_runner) *
          1000;

        aheadOption.leafTime =
          duration -
          shown_time -
          (duration - shown_time) / this.d.road_per_runner;
      } else {
        next_delay = (delay + shown_time) * 1000;

        aheadOption.leafTime = duration - shown_time;
      }

      (($runner, roadName, next_delay, aheadOption) => {
        if (!window.paused) {
          let fun = () => {
            this.put_runner_to_road(roadName, aheadOption);
          };

          let _timeout = setTimeout(() => {
            delete this.global_time_out[_timeout];

            fun();
          }, next_delay);

          this.global_time_out[_timeout] = {
            currentTime: +new Date(),

            delay: next_delay,

            fun: fun
          };
        }
      })($runner, roadName, next_delay, Object.assign(true, {}, aheadOption));
    },

    run_finish(ev) {
      let _$target = ev.target;

      let map_number = _$target.getAttribute("map_number"),
        road_name = _$target.getAttribute("road_name");

      _$target.setAttribute("has_finish", "true");

      let temp_road = this.r.all_road.filter(function(obj, i) {
        if (obj.name == road_name) {
          return obj;
        }
      });

      if (temp_road.length) {
        temp_road[0].amount--;

        delete temp_road[0].runner[map_number];
      } else {
        this.r.all_road.push({
          name: road_name,

          runner: this.help.road_finish_runner[road_name],

          amount: this.help.road_finish[road_name] - 1
        });

        delete this.help.road_finish_runner[road_name];
      }

      _$target.className = "unit";

      _$target.style.transform = "translate3d(0, 0, 0)";

      _$target.style.webkitTransform = "translate3d(0, 0, 0)";

      this.r.runner_idx.push(map_number);
      console.log(_$target)
      let fail_unit = this.fail_queue.shift();

      if (fail_unit) {
        this.put_runner_to_road(fail_unit.roadName, fail_unit.aheadOption);
      }
    }
  }
};
</script>


<style lang="scss" >
.barrage_wrap {
  position: relative;

  width: 100%;

  // height: 100%;

  background: #f9f9f9;

  .barrage_container {
    position: absolute;

    width: 100%;

    height: 30px;

    top: 0;

    left: 0;
  }
  .unit {
    position: absolute;

    left: 200%;

    display: table;
    color: #126ae4;
    font-size: 0.26rem;

    background-color: #fff;

    padding: 0.06rem 0.16rem;

    border-radius: 0.2rem;
  }
  .danmu_unit {
    left: 100%;

    transform: translate3d(0, 0, 0);
  }
  .danmu_unit_all {
    animation: move 1s linear 5s;
  }
  .danmu_unit_half {
    animation: move_half 1s linear 5s;
  }
}
@keyframes move_half {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    left: 0px;

    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes move {
  0% {
    left: 100%;

    transform: translate3d(0, 0, 0);
  }
  100% {
    left: 0px;

    transform: translate3d(-100%, 0, 0);
  }
}
</style>