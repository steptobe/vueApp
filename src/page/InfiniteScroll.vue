<template>
  <div class="hello">
      <headerTab title="无限加载" icon=""></headerTab>

    <div class="page-infinite">
      <h1 class="page-title">Infinite Scroll</h1>
      <p class="page-infinite-desc">当即将滚动至列表底部时, 自动加载更多数据</p>
      <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
          <li v-for="item in list" class="page-infinite-listitem">{{ item }}</li>
        </ul>
        <p v-show="loading&allLoaded == false" class="page-infinite-loading">
          <mt-spinner type="fading-circle"></mt-spinner>
          加载中...
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { Loadmore } from 'mint-ui';
export default {
  name: 'hello',

  data() {
    return {
      list: [],
      loading: false,
      allLoaded: false,
      wrapperHeight: 0

    };

  },

  methods: {
    loadMore() {
      this.loading = true;
      if (this.list.length > 40) {
          this.loading = true;
                    this.allLoaded = true;

            return false
          }
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);

        }
        this.loading = false;
      }, 2500);
    }
  },
  mounted() {
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    for (let i = 1; i <= 20; i++) {
      this.list.push(i);
    }
  }



};

</script>
<style lang="scss" scope>
li {
  height: 0.666667rem;
}

h1 {
  font-size: 0.4rem;
}

.hh {
  color: red;
  font-size: 0.8rem;
  background-color: #00FF5D;
}

</style>
