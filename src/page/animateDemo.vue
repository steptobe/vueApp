<template>
  <div class="animete">
   <div class="container">
     <div class="scene">
        <ul>
          <template v-for="n in 18">
          <li :class="['item' + n]">
              <img src="https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/5fdf8db1cb134954b6cd09385b4e9258d0094a9f.jpg" alt="">
          </li>
          </template>

        </ul>
     </div>
    </div>
    <div class="scene-detail">
       <div class="detail">
          <img src="https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/5fdf8db1cb134954b6cd09385b4e9258d0094a9f.jpg" alt="">
       </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style style lang='scss'>
.container {
  display: block;
  background: red;
}
.container{
  width:100vw;
  height:400px;
  margin:auto;
  padding:12px;
  background:#f1f1f1;
  overflow: hidden;
  box-sizing: border-box;
}
.scene{
  height: 100%;
  max-height: 100%;
  position:relative;

}
ul{
  list-style:none;
  display:flex;
  overflow-y: scroll;
  padding:0;
  width:100%;
  margin:0;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content:space-around;
  li{
    width:calc((100% - 24px)/3);
    transform-origin: top left;
  }
  img{
    width:100%;
  }
}
.scene-detail{
   display:none;
   width:100vw;
  position:absolute;
  height: 100vh;
  color:#fff;
  height:100%;
  top:0;
  bottom:0;

}
.detail{

  transform-origin: top left;
  background:rgba(0,0,0,.9);

  img{
    width:100%;
  }
}
.bounceInDown {
  -webkit-animation-name: bounceInDown;
  animation-name: bounceInDown;
  animation-delay: 4s;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-50%, -3000px, 0);
    transform: translate3d(-50%, -3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-50%, 25px, 0);
    transform: translate3d(-50%, 25px, 0);
  }

  75% {
    -webkit-transform: translate3d(-50%, -10px, 0);
    transform: translate3d(-50%, -10px, 0);
  }

  90% {
    -webkit-transform: translate3d(-50%, 5px, 0);
    transform: translate3d(-50%, 5px, 0);
  }

  to {
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }
}
</style>
