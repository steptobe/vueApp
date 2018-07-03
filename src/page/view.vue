<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(slide, index) in swiperSlides">I'm Slide {{ slide }} index {{index}}</swiper-slide>
    <div class="swiper-pagination" slot="pagination"  @click="getIndex">{{}}</div>
    <div @click="getIndex">kkkkkk</div>
  </swiper>
</template>
 
<script>
require('swiper/dist/css/swiper.css')
import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: 'carrousel',
        components: {
        swiper,
        swiperSlide
    },

    data() {
      return {
          
        swiperOption: {
          autoplay: 3500,
                  notNextTick: true,

          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
                  paginationType: 'fraction',

          onSlideChangeEnd: swiper => {
            console.log('onSlideChangeEnd', swiper)
            this.page = swiper.activeIndex
          }

        },
        swiperSlides: [1, 2, 3, 4, 5]
      }
    },
    computed: {
      mySwiper() {
        return this.$refs.mySwiper.swiper
      },
    //   index(){
          
    //               return this.mySwiper.activeIndex;

    //   }
    },

    mounted() {
        // this.getIndex();
      setInterval(() => {
        console.log('simulate async data'+ this.mySwiper.activeIndex)
        let swiperSlides = this.swiperSlides
        var jj = Math.round(Math.random()*5);
        console.log(jj)
        if (swiperSlides.length < 10) swiperSlides.splice(jj,0,swiperSlides.length + 1)
              this.mySwiper.slideTo(jj, 1000, false)

      }, 3000)
    },

    methods:{
        getIndex(){
            // this.$nextTick(()=>{
            //                 // alert('index'+this.index)

            // })
        }
    },

    watch:{
        // index(val){
        //     // alert(val)
        // },
        mySwiper:{  
                handler:function(val,oldval){  
                    // this.getIndex()
                    alert(val.activeIndex)
                },  
                deep:true//对象内部的属性监听，也叫深度监听  
            },  
    }
  }
</script>
<style scoped lang="scss">
   .swiper-slide{
       height: 200px;
   }
</style>

