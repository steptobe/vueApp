<template>
    <div>
        <div class="noincomeList" v-if="nochance == 'noincome'">
            <img src="/images/space/noincome.png" width="64" alt="">
            <h5>暂无收益</h5>
            <p>邀请小伙伴来听课吧！</p>
        </div>
        <div class="noincomeList" v-if="nochance == 'norecord'">
            <img src="/images/space/norecord.png" width="64" alt="">
            <h5>暂无购买记录</h5>
          <!--   <p>小伙伴来听课吧！</p> -->
        </div>
    </div>
</template>
<script>
export default {
    props: ['nochance'],

}
</script>
<style lang="scss">
.noincomeList {
    min-height: 70vh;
    box-sizing: border-box;
    padding-top: 20vh;
    text-align: center;
    background: #fff;
    img {
        margin-bottom: 15px;
    }
    h5 {
        color: #666;
        font-size: 20px;
        margin-bottom: 10px;
    }
    p {
        font-size: 15px;
        color: #b2b2b2;
    }
}
</style>