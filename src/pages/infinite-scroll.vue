<template>
  <div class="hello">
    <div class="page-infinite">
      <h1 class="page-title">Infinite Scroll</h1>
      <p class="page-infinite-desc">当即将滚动至列表底部时, 自动加载更多数据</p>
      <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
          <li v-for="item in list" class="page-infinite-listitem">{{ item }}</li>
        </ul>
        <p v-show="loading" class="page-infinite-loading">
          <mt-spinner type="fading-circle"></mt-spinner>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { InfiniteScroll } from 'mint-ui'
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

}

</script>
<style lang="scss" scope>
.page-infinite-loading {
  text-align: center;
  height: 50px;
  line-height: 50px;
  div {
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
  }
}

.page-infinite-listitem {
  height: 50px;
  line-height: 50px;
  border-bottom: solid 1px #eee;
  text-align: center;
  &:first-child {
    border-top: solid 1px #eee;
  }
}

ul {
  list-style-type: none;
  padding: 0;
}

</style>
