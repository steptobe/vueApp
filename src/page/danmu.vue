<template>
	<div class="danmu">
		  <div class="barrage-box" v-show="danmuData.length > 0 ">
                <danmu ref="barrage" class="barrage" v-show="danmuData.length > 0"></danmu>

            </div>
	</div>
</template>
<style lang="scss" >
 .barrage-box {
    // height: 80px;
    background: #f9f9f9;
    padding-bottom: 6px;
  }
  .barrage {
    height: 30px;
  }
  .barrage1 {
    height: 40px;
  }
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
    font-size: .26rem;

    background-color: #fff;

    padding: .06rem .16rem;

    border-radius: .2rem;
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
<script>
import danmu from '../components/danmu.vue'

export default {
	components: {
		danmu
	},
	data() {
		return {
			danmuData: ['1111111111111','2222222222222', '444444444444444','66666666666666666666666'],
		}
	},
	mounted() {
		// this.getData()
    this.reGet();
	},
    methods:{
      reGet(){
              console.log('第二次获取')
            },
        getData(){
            this.$refs.barrage._initBarriage({
              square: document.getElementsByClassName("barrage_container")[0], //容器

              road_high: 30, //行高

              road_padding: 8, //每行中是否固定边界距离，不传不固定

              road_per_runner: 4, //每行中最多的数量

              show_lines: false, //是否显示边界线条，作为参考

              fontSize: "15px",
              fontWeight: "bold",
              colorArr: [
                "#f38f00",
                "#ff3229",
                "#126ae4",
                "9b40d8",
                "#8b531b",
                "#ff00ea",
                "#ff6600",
                "#d840ab"
              ],

              duration: 8, //控制速度，最小为1，不传默认

              runners: this.danmuData
            });
        }
    }
}
</script>
