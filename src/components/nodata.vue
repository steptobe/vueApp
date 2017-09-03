<template>
    <div class="nodataList">
        <img src="/images/info.png" width="64" alt="">
        <p>哦~没有数据呢！</p>
    </div>
</template>
<script>
export default {
    props: ['sdkdata'],
    
}
</script>
<style lang="scss">
.nodataList {
    min-height: 100%;
    box-sizing: border-box;
    padding-top: 40%;
    text-align: center;
    background: transparent;
    img {
        margin-bottom: 21px;
    }
    p {
        font-size: 18px;
        color: #b2b2b2;
    }
}
</style>

