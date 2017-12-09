<template>
  <div id="app">
 <!-- 需要缓存的路由 -->
        <keep-alive>
          <router-view name="keepAliveRouter"></router-view>
        </keep-alive>
        <!-- 不需要缓存的路由 -->
        <transition name="fade" mode="out-in"><router-view></router-view></transition>
  </div>
</template>

<script>
import propPage from './components/propChild.vue'

export default {
  name: 'app',
  components:{
    propPage
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
/*   margin-top: 60px;
 */}
</style>
