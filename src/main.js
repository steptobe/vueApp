// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Mint from 'mint-ui'
import VueResource from 'vue-resource'
import './assets/base.css'
import headerpage from './config/globalComponent'
import 'mint-ui/lib/style.css'
import './config/rem'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import stores from './store/store'

Vue.use(Mint)
Vue.use(VueResource)
Vue.use(headerpage)
Vue.use(Vuex)

const store = new Vuex.Store(stores)
Vue.config.productionTip = false
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})