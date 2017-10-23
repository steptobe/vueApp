<template>
  <div class="shake">
    <headerTab title="摇一摇" icon=""></headerTab>
    <audio id="audio_shake">
      <source src="../assets/mp3/shakes.mp3" type="audio/ogg">
      <source src="../assets/mp3/shakes.mp3" type="audio/mpeg"> Your browser does not support the audio tag.
    </audio>
    <audio id="audio">
      <source src="../assets/mp3/skresult.mp3" type="audio/ogg">
      <source src="../assets/mp3/skresult.mp3" type="audio/mpeg"> Your browser does not support the audio tag.
    </audio>

    <div class="hand" v-bind:class="{'hand-animate':rotate}" @click="onBridgeReady">
      <img src="../assets/images/shake.png" alt="摇一摇">
    </div>
    <p>马上摇一摇，偷听私密课</p>
    <div class="v-modal" style="z-index: 2016;" v-show="medalShow" @click="msgPop"></div>
    <div class="mint-msgbox" v-if="msgboxShow">
      <img :src="data.src_img" alt="">
      <h5 class="class-name">{{data.class_name}}</h5>
      <h5 class="teacher-name">{{data.teacher_name}}</h5>
      <p class="brief">{{data.brief}}</p>
      <router-link to="/slotPage" class="btn-icon">进去学习</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      medalShow: false,
      msgboxShow: false,
      shake_threshold: 1800,
      last_update: 0,
      data: {
        src_img: '../assets/logo.png',
        class_name: 'vue学习联系代码',
        teacher_name: 'steptobe',
        brief: '方便学习vue',
      },
      x: 0,
      y: 0,
      x: 0,
      last_x: 0,
      last_y: 0,
      last_z: 0,
      times: 0,
      audio: document.getElementById("audio"),
      audio_shake: document.getElementById("audio_shake"),
      rotatebool: false,
      rotate: false
    }
  },
  created() {
    this.getPrivateData()
    if (window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', this.deviceMotionHandler, false);
    } else {
      alert('抱歉，你的手机配置实在有些过不去，考虑换个新的再来试试吧');
    }
    wx.onMenuShareAppMessage({
      title: '分享标题', // 分享标题
      link: 'baidu.com', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: '', // 分享图标
      success: function() {
        // 用户确认分享后执行的回调函数
        alert('成功')
      },
      cancel: function() {
        // 用户取消分享后执行的回调函数
        alert('quxiao')
      }
    });


  },
  activated() {
    this.msgboxShow = false
    this.medalShow = false
  },
  mounted() {
    //ios微信可播放兼容代码

    this.onBridgeReady()
    var needRefresh = sessionStorage.getItem("need-refresh");
    if (needRefresh) {
      sessionStorage.removeItem("need-refresh");
      location.reload();
    }
  },
  methods: {
    //摇一摇效果代码
    onBridgeReady() {
      var audio_shake = document.getElementById("audio_shake");
      var audio = document.getElementById("audio");
      wx.config({
        // 配置信息, 即使不正确也能使用 wx.ready
        debug: true,
        appId: '',
        timestamp: 1,
        nonceStr: '',
        signature: '',
        jsApiList: []
      });
      wx.ready(function() {
        audio_shake.load();
        audio.load();


      });
    },

    deviceMotionHandler(eventData) {
      var acceleration = eventData.accelerationIncludingGravity;
      var curTime = new Date().getTime();
      if ((curTime - this.last_update) > 100) {
        var diffTime = curTime - this.last_update;
        this.last_update = curTime;
        this.x = acceleration.x;
        this.y = acceleration.y;
        this.z = acceleration.z;
        var speed = Math.abs(this.x + this.y + this.z - this.last_x - this.last_y - this.last_z) / diffTime * 10000;
        if (speed > this.shake_threshold) {
          setTimeout(() => {
            this.msgboxShow = true
            this.medalShow = true
          }, 3000)
          this.autoPlay()
          this.doResult()
        }
        this.last_x = this.x;
        this.last_y = this.y;
        this.last_z = this.z;
      }
    },
    //播放控制
    autoPlay() {
      var index = 0;
      var audio_shake = document.getElementById("audio_shake")
      audio_shake.addEventListener('ended', function() {
        // Wait 500 milliseconds before next loop  
        setTimeout(function() {
          if (index < 1) {
            audio_shake.play();
            index++
          }
        }, 500);
      }, false);
      audio_shake.play();
    },
    autoPlayed() {
      var audio = document.getElementById("audio");
      var index = 0;
      audio.addEventListener('ended', function() {
        // Wait 500 milliseconds before next loop  
        setTimeout(function() {
          if (index < 0) {
            audio.play();
            index++
          }
        }, 0);
      }, false);
      audio.play();
    },
    doResult() {
      this.rotate = true
      setTimeout(() => {
        this.autoPlayed();
      }, 2500)
      setTimeout(() => {
        this.rotate = false
        this.rotatebool = false
        this.autoPlayed();
      }, 3000)
    },
    getPrivateData() {
      this.data.class_name = "摇一摇"
     
    },
    msgPop() {
      this.msgboxShow = false
      this.medalShow = false
      this.rotate = false
    }
  }
}
</script>
<style lang="scss">
.shake {
  background-color: #fff;
  box-sizing: border-box;
  min-height: 100vh;
  text-align: center;
  .hand {
    padding-top: 30vh;
    img {
      width: 150px;
    }
  }
  #audio {
    z-index: -1;
  }
  p {
    color: #333;
    font-size: 20px;
    margin-top: 30px;
  }
  .mint-msgbox {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 2017;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
    background-color: #fff;
    width: 85%;
    border-radius: 3px;
    padding: 30px 0;
    font-size: 16px;
    -webkit-user-select: none;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: .2s;
    transition: .2s;
    .class-name {
      margin-top: 20px;
      height: 30px;
      line-height: 30px;
      font-size: 18px;
    }
    .teacher-name {
      font-size: 16px;
      height: 30px;
      line-height: 30px;
      color: #666;
      margin-bottom: 20px;
    }
    .brief {
      color: #999;
      line-height: 1.5;
    }
    img {
      width: 65px;
      height: 70px;
    }
    .btn-icon {
      margin-top: 20px;
      display: inline-block;
      background-color: #5f86fc;
      height: 35px;
      line-height: 35px;
      color: #fff;
      padding: 0 10px;
      border-radius: 5px;
    }
  }
  .hand-animate {
    -webkit-animation: hand_move infinite 0.3s;
  }
  @-webkit-keyframes hand_move {
    0% {
      -webkit-transform: rotate(0);
      -moz-transform: rotate(0);
      -ms-transform: rotate(0);
      -o-transform: rotate(0);
      transform: rotate(0);
    }
    50% {
      -webkit-transform: rotate(15deg);
      -moz-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      -o-transform: rotate(15deg);
      transform: rotate(15deg);
    }
    100% {
      -webkit-transform: rotate(0);
      -moz-transform: rotate(0);
      -ms-transform: rotate(0);
      -o-transform: rotate(0);
      transform: rotate(0);
    }
  }
}
</style>