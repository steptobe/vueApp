<template>
  <div>
    <mt-header fixed title="固定在顶部"></mt-header>
    <div class="container">

      <mt-cell title="课程" is-link to="/pullUp"></mt-cell>
      <mt-cell title="摇一摇" is-link to="/shaking"></mt-cell>
      <mt-cell title="摇一摇1" is-link to="/shaking1"></mt-cell>
      <mt-cell title="prop学习" is-link to="/propPage"></mt-cell>
      <mt-cell title="slot学习" is-link to="/slotPage"></mt-cell>
      <mt-cell title="flexbox学习" is-link to="/flex"></mt-cell>
      <mt-cell title="生命周期函数学习" is-link to="/lebenszyklus"></mt-cell>
      <mt-cell title="图片上传组件" is-link to="/upPhoto"></mt-cell>
      <mt-cell title="轮播" is-link to="/view"></mt-cell>

      <mt-cell title="ios键盘问题" is-link to="/viewpan"></mt-cell>
      <mt-cell title="vuex学习" is-link to="/vuexdemo"></mt-cell>
      <mt-cell title="弹幕" is-link to="/danmu"></mt-cell>
      <mt-cell title="video直播" is-link to="/video"></mt-cell>
      <mt-cell title="element测试" is-link to="/ele"></mt-cell>
      <mt-cell title="echart测试" is-link to="/echart"></mt-cell>
      <mt-cell title="动画学习" is-link to="/animateDemo"></mt-cell>
    </div>
  </div>
</template>
<style lang="scss">
// .container {
//   margin-top: 48px;

// }
 h5 {
      height: 0.8rem /* 80/100 */;
      line-height: 0.8rem;
      & > a {
          // float: right;
          margin-top: 0.05rem;
          margin-right: 0.2rem;
          display: inline-flex;
          box-sizing: border-box;
          padding: 0 0.04rem;
          justify-content: space-between;
          align-items: center;
          width: 0.26rem;
          height: 0.16rem;
          margin-left: 0.15rem;
          border-radius: 3px;
          background-color: #e4e4e4;
          position: relative;
          z-index: 11;
          span {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            // height: .5rem;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            &::after {
              content: "...";
    display: inline-flex;
    position: absolute;
    font-size: 12px;
    align-items: center;
    color: #fff;
    height: 100%;
    line-height: 0;
    left: 50%;
    top: 50%;
    // -webkit-transform: translateX(-50%);
    transform: translate(-50%,-50%);
            }
          }
      }
    }
</style>
