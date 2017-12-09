<template>
   <main >
      <div class="nav"></div>
        <div class="content"></div>
        <form id="returnframe">
                <input type="text" name="inputframe" class='inputframe'  @click="getF">
                <span class="returnframe_button">发送</span>
        </form>
   </main>
</template>
<script>
import { Toast, Indicator } from "mint-ui";
    export default {
        data(){
            return {
                 interval:null,
                 bfscrolltop:'',
            }
        },
        mounted() {
        //    this.$nextTick(()=>{
        //        this.bfscrolltop = document.body.scrollTop;//获取软键盘唤起前浏览器滚动部分的高度
        //    })
        },
        methods:{
           getF(e){
               
                       this.$nextTick(()=>{
                            var bfscrolltop = document.body.scrollTop;//获取软键盘唤起前浏览器滚动部分的高度
                        })
                        
                    //    Toast({ message: document.body.scrollHeight, duration: 1000 });
                        $(e.target).focus(function(){//在这里‘input.inputframe’是我的底部输入栏的输入框，当它获取焦点时触发事件
                            this.interval = setInterval(function(){//设置一个计时器，时间设置与软键盘弹出所需时间相近
                            this.$nextTick(()=>{
                                    document.body.scrollTop = document.body.scrollHeight;//获取焦点后将浏览器内所有内容高度赋给浏览器滚动部分高度
                                }) 
                            },100)
                            //   Toast({ message: document.body.scrollHeight, duration: 1000 });
                        }).blur(function(){//设定输入框失去焦点时的事件
                            clearInterval(this.interval);//清除计时器
                             this.$nextTick(()=>{
                                document.body.scrollTop = bfscrolltop;//将软键盘唤起前的浏览器滚动部分高度重新赋给改变后的高度
                              })
                        });
                           
            //  setTimeout(function(){
            //         e.target.scrollIntoViewIfNeeded();
            //     },100);
                
            }
    }
    }
</script>
<style lang="scss" >
  main{
      height:100vh;
        /*聊天窗口_顶部*/
/*聊天窗口_顶部*/
.nav{
    display:block;
    position:absolute;
    top:0;
    width:100%;
    height:50px;
    font-size:2rem;
    background-color:#393a3f;
    z-index:99;
}
/*聊天窗口_内容*/
.content{
    display:block;
    position:absolute;
    top:50px;
    bottom:50px;
    width:100%;
    height:auto;
    background-color:#ebebeb;
    overflow-y:scroll;
    -webkit-overflow-scrolling:touch;
}
/*聊天窗口_底部*/
#returnframe{
    display:block;
    position:absolute;
    bottom:0;
    overflow-x:hidden;
    width:100%;
    height:50px;
    background-color:#f4f4f4;
    border-top:1px solid #d8d8d8;
    z-index:99;
}
.inputframe{
    height:50px;
}
  }
</style>