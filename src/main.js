// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import VueResource from 'vue-resource'
import './assets/base.css'
import headerpage from './config/globalComponent'
import 'mint-ui/lib/style.css'
import './config/rem'

Vue.use(Mint)
Vue.use(VueResource)
Vue.use(headerpage)

Vue.config.productionTip = false
Vue.hostUrl= 'http://test.talk.99cj.com.cn/'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
