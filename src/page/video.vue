<template>
    <div class="video">
        <div class="videoDom">
                    <video-player class="vjs-custom-skin"
                                  ref="videoPlayer"
                                  :options="playerOptions"
                                  webkit-playsinline="true"
                                  @play="onPlayerPlay($event)"
                                  @pause="onPlayerPause($event)"
                                  @statechanged="playerStateChanged($event)"
                                 >
                    </video-player>

         </div>
          <!-- <img :src="playerOptions.poster" v-if="videoPoster"> -->
    </div>
</template>
<script>
import { videoPlayer } from "vue-video-player";
import "videojs-contrib-hls";
require("video.js/dist/video-js.css");
require("vue-video-player/src/custom-theme.css");
export default {
  data() {
    return {
      playerOptions: {
      //  height: '360',
          // autoplay: true,
          // muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            // mp4
            src: "http://vjs.zencdn.net/v/oceans.mp4",
            // webm
            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
            playsinline: true,
          poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",
      }
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  components:{
    videoPlayer
  },
  methods: {
    // listen event
    onPlayerPlay(player) {
      console.log("player play!", player);
    },
    onPlayerPause(player) {
      console.log("player pause!", player);
    },
    onPlayerEnded(player) {
      console.log("player ended!", player);
    },
    onPlayerLoadeddata(player) {
      console.log("player Loadeddata!", player);
    },
    onPlayerWaiting(player) {
      console.log("player Waiting!", player);
    },
    onPlayerPlaying(player) {
      console.log("player Playing!", player);
    },
    onPlayerTimeupdate(player) {
      console.log("player Timeupdate!", player.currentTime());
    },
    onPlayerCanplay(player) {
      console.log("player Canplay!", player);
    },
    onPlayerCanplaythrough(player) {
      console.log("player Canplaythrough!", player);
    },
    // or listen state event
    playerStateChanged(playerCurrentState) {
      console.log("player current update state", playerCurrentState);
      // alert(playerCurrentState)
    },
    // player is ready
    playerReadied(player) {
      // seek to 10s
      alert(player);
      player.currentTime(10);
      // console.log('example 01: the player is readied', player)
      console.log("the player is readied", player);
      // you can use it to do something...
    }
  }
};
</script>
<style  lang="scss">
.video {
  position: relative;
  width: 100%;
  height: 230px;
  // top:.58rem /* 58/100 */;
  margin-bottom: 0.2rem;
  img {
    width: 100%;
  }
  .videoDom {
    position: absolute;
    z-index: 0;
    left: 0;
    // top: .6rem;
    width: 100%;
    display: block;
  }
  .live-lock {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 24px;
    height: 24px;
    z-index: 999;
  }
  .vjs-poster {
    background-size: cover;
  }
  .vjs-custom-skin > .video-js {
    .vjs-play-progress {
      background-color: #ff5c36;
    }
    .vjs-big-play-button {
      border: 1px solid #fff;
      background-color: #fff;
      //   background-color: rgba(193, 55, 51, 0.65);
      border-radius: 50%;
      //   margin-left: -24px;
      // display: inline-block;
      font-size: 24px;
      width: 58px;
      height: 58px !important;

      //   margin-top: -12px !important;
    }
    .vjs-loading-spinner {
      background-color: rgba(255, 92, 54, 0.65);
    }
  }
}
.vjs-icon-play {
  font-size: 10px;
}
</style>
