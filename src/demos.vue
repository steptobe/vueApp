<template>
  <section class="page-demo">
    <div v-for="group in navs">
      <div class="page-title" v-text="group.title"></div>
      <mt-cell v-for="item in group.list" :to="item.path" is-link>
        <div slot="title">
          <i :class="['indexicon', 'icon-' + item.icon]"></i>
          <span>{{ item.name }}</span>
        </div>
      </mt-cell>
    </div>
  </section>
</template>
<style lang="scss">
.page-demo {
  padding-bottom: 50px;
  .indexicon {
    font-size: 22px;
    color: #26a2ff;
    display: inline-block;
    width: 30px;
    vertical-align: middle;
    &.icon-swipe {
      font-size: 26px;
    }
    &.icon-checklist {
      font-size: 18px;
    }
  }
}

</style>
<script>
  import { navs } from './router/index.js'
  import './assets/font/iconfont.css'
  export default { data() { return { navs: [] }; }, created() { this.navs = navs; } };
</script>
