<template>
  <div class="classPage">
    <headerTab title="课程" icon=""></headerTab>

    <ul class="page-part" v-model="selected" id="ul">
      <li><span @click="lef" id="ee">全部课程</span></li>
      <li><span @click="lef">免费课</span></li>
      <li><span @click="lef">收费课</span></li>
      <li><span @click="lef">私密课</span></li>
      <div class="border-line" v-bind:style="{ 'left': left  }">
        <span></span>
      </div>
    </ul>
    <div class="box">
      <!-- 全部课程 -->
      <div v-if="selected == '1'">
        <div>全部课程</div>
      </div>
      <!-- 全部课程 end -->
      <!-- 其他课程 -->
      <template v-else>
        <div class="buyrecord" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
          <loading v-if="loadedLevel==false"></loading>
          <mt-loadmore :bottom-method="courseBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="courseFinish" ref="loadmore" v-else-if="courseRecord.length >= 12 && loadedLevel" :bottomDistance="0" :distanceIndex="1">
            <h5 style="font-size:60px">{{text}}</h5>
            <a href="javascript:;" v-for="item in courseRecord" :key="">
              <div class="media-box">
                <div class="media-left">
                  <img src="../assets/logo.png" alt="">
                </div>
                <div class="media-right">
                  <h5>qqqq</h5>
                  <p class="text-subtitle"></p>
                  <p>
                    <span>{{item}}人看过</span>
                  </p>
                </div>
              </div>
            </a>
            <div slot="bottom" class="mint-loadmore-bottom">
              <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
              <span v-show="bottomStatus === 'loading'">
                                    <mt-spinner color="#5f86fd" type="triple-bounce"></mt-spinner>
                                </span>
            </div>
            <nomore text="没有更多啦" v-show="courseFinish"></nomore>
          </mt-loadmore>
          <noincome v-else nochance="norecord"></noincome>
        </div>
      </template>
      <!-- 其他课程 end -->
    </div>
  </div>
</template>
<script>
import nomore from '../components/nomore.vue'
import loading from '../components/loading.vue'

import noincome from '../components/noincome.vue'
import { Loadmore } from 'mint-ui'

export default {
  data() {
    return {
      data: [],
      coursePage: 1, //页数
      courseFinish: false, //加载是否完毕
      bottomStatus: '',
      selected: '1',
      courseList: [],
      loadedLevel: false,
      courseRecord: [],
      wrapperHeight: 560,
      text: '',
      left: '', //tab设置
      scrollMode: "auto" //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动  
      //全部:-1,免费:0,私密:1,收费:2,
    }
  },
  created() {

    for (let i = 1; i <= 20; i++) {
      this.courseRecord.push(i);
    }
  },
  destroyed() {},
  methods: {
    handleBottomChange(status) {
      this.bottomStatus = status;
    },

    /**
     * 
     * [getCourseList description]
     * Typecho Blog Platform
     * @copyright [copyright]
     * @license   [license]
     * @version   [version]
     * @param     {[type]}    level [level：课程等级 0：免费公开课程；1：加密课程；2：收费课程]
     * @return    {[data]}       [description]
     */
    getCourseList(pageNum) {
      //获取课程数据

      this.loadedLevel = true
      let last = this.courseRecord[this.courseRecord.length - 1];
      for (let i = 1; i <= 10; i++) {
        this.courseRecord.push(last + i);

      }
      this.isHaveMore(this.coursePage < 8, this.courseFinish);
      if (this.coursePage >= 8) {
        this.courseFinish = true;
      }
      this.$refs.loadmore.onBottomLoaded();


    },
    //加载
    courseBottom() {

      this.coursePage++;
      setTimeout(() => {

        this.getCourseList(this.coursePage);


      }, 3500);

    },

    isHaveMore(bool, listType) {
      // 是否还有下一页，如果没有就禁止上拉刷新  
      listType = true; //true是禁止上拉加载  

      if (bool) {
        listType = false;
      }
    },
    lef(e) {
      this.coursePage = 1
      this.courseRecord = []
      this.bottomStatus = ''
      this.courseFinish = false
      document.body.scrollTop = '0px'
      document.documentElement.scrollTop = '0px'

      this.loadedLevel = false
      var rect = e.target.getBoundingClientRect()

      this.left = rect.left + 'px'
      var selectText = e.target.firstChild.nodeValue
      this.text = selectText;
      for (let i = 1; i <= 10; i++) {
        this.courseRecord.push(i);
      }
      if (selectText == '全部课程') {
        this.selected = '1'
      } else if (selectText == '免费课') {
        this.selected = '2'
        setTimeout(() => {

          this.getCourseList(this.coursePage);


        }, 3500);
      } else if (selectText == '收费课') {
        this.selected = '2'
        setTimeout(() => {

          this.getCourseList(this.coursePage);


        }, 3500);

      } else {
        this.selected = '2'
        setTimeout(() => {

          this.getCourseList(this.coursePage);


        }, 3500);
      }
      console.log(selectText)


    }
  },
  components: {
    nomore,
    noincome,
    Loadmore,
    loading
  },
  mounted() {
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper1.getBoundingClientRect().top - 48;


  }
}

</script>
<style lang="scss">
.classPage {
  height: 100vh;

  box-sizing: border-box;
  padding-bottom: 50px;
  .income {
    color: #f86565;
  }
  .page-part {
    position: fixed;
    height: 50px;
    border-bottom: 1px solid #ededed;
    padding: 0;
    z-index: 111;
    width: 100vw;
  }
  .page-part {

    border-bottom: 1px solid #f4f4f4;
    font-size: 16px;
    background-color: #fff;
    li {
      background-color: transparent;
      width: 25%;
      height: 50px;
      line-height: 50px;
      float: left;
      text-align: center;

      span {
        display: inline-block;
        height: 35px;
        line-height: 35px;
        width: 100%;
      }
    }
    .is-selected {
      color: rgb(95, 134, 253);
      span {
        /* border-bottom: 2px solid rgb(95, 134, 253);*/
      }
    }
    .border-line {
      display: inline-block;
      width: 25%;
      position: absolute;
      bottom: 14px;
      left: 0;
      z-index: 111;
      text-align: center;
      height: 3px;

      span {
        display: inline-block;
        width: 30px;
        border-radius: 10px;
        background-color: rgb(95, 134, 253);
        height: 3px;
      }
    }
  }
  .mint-tab-item-label {
    font-size: 16px;
  }
  .box {
    padding: 50px 0 20px;
    box-sizing: border-box;
  }
  .buyrecord {

    box-sizing: border-box;
    background-color: #fff;
    .list {

      //height: 100vh;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: #fff;
      box-sizing: border-box;
      padding-bottom: 49px;
    }
    &.nocontentclass {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .nocontentinfo {
      font-size: 14px;
      color: #b2b2b2;
      line-height: 51px;
      text-align: center;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    a {
      display: block;
      padding-left: 15px;
      .media-box {
        display: flex;
        padding: 12px 15px 12px 0;
        border-bottom: 1px solid #ebebeb;
        .media-left {
          height: 66px;
          width: 66px;
          padding-right: 10px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 5px;
          }
        }
        .media-right {
          flex: 1;
          height: 66px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          line-height: 1;
          h5 {
            font-size: 17px;
            color: #333;
            word-break: break-all;
          }

          p {

            font-size: 12px;

            .income {
              color: #ff1700;
            }
            span {
              display: inline-block;
              color: #999;
              width: 31%;
            }
          }
        }
      }
    }
    .loading-ico {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #b2b2b2;
      line-height: 35px;
      font-size: 14px;
      span:first-child {
        margin-right: 5px;
      }
    }
  }
}

</style>
