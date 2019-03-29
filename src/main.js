// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
// import 'babel-polyfill'
import router from './router'
import Vuex from 'vuex'
import Mint from 'mint-ui'
import VueResource from 'vue-resource'
import './assets/base.css'
import headerpage from './config/globalComponent'
import 'mint-ui/lib/style.css'
import './config/rem'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueI18n from 'vue-i18n'
Vue.use(VueAwesomeSwiper)
Vue.use(VueI18n)
// require("babel-polyfill");

import stores from './store/store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Mint)
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(headerpage)

Vue.use(Vuex)

const store = new Vuex.Store(stores)
// const i18n = new VueI18n({
//   locale: 'zh-CN',    // 语言标识
//   //this.$i18n.locale // 通过切换locale的值来实现语言切换
//   messages: {
//     'zh-CN': require('./common/lang/zh'),   // 中文语言包
//     'en-US': require('./common/lang/en')    // 英文语言包
//   }
// })
Vue.config.productionTip = false
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    // i18n,  // 不要忘记
    router,
    store,
    template: '<App/>',
    components: { App }
})
