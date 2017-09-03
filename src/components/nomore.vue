<template>
    <div class="no-more">
        <span>{{text}}</span>
    </div>
</template>
<script>
export default {
    props: ['text']
}
</script>

<style lang="scss">
.no-more {
    font-size: 13px;
    color: #b2b2b2;
    line-height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
        margin: 0 23px;
    }
    &:before,
    &:after {
        content: '';
        display: inline-block;
        height: 1px;
        width: 57px;
        background-color: #ddd;
    }
}
</style>

