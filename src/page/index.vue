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
    </div>
  </div>
</template>
<style lang="scss">
.container {
  margin-top: 48px;
}
</style>
