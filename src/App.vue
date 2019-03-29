<template>
  <div id="app">
 <!-- 需要缓存的路由 -->
        <keep-alive>
          <router-view name="keepAliveRouter"></router-view>
        </keep-alive>
        <!-- 不需要缓存的路由 -->
         <!-- <template v-if="$route.meta.login">

            <router-view></router-view>
          </template>
          <template v-else>
            <router-view></router-view>
          </template> -->

        <transition name="fade" mode="out-in"><router-view></router-view></transition>
  </div>
</template>

<script>
import propPage from './components/propChild.vue'

export default {
  name: 'app',
  components:{
    propPage
  },
   data() {
      return {

      };
    },
    methods: {

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
