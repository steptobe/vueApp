import Vue from 'vue'
import Router from 'vue-router'

const pullUp = resolve => require(['../page/pullUp.vue'], resolve)
const index = resolve => require(['../page/index.vue'], resolve)
const shaking = resolve => require(['../page/shaking.vue'], resolve)
const shaking1 = resolve => require(['../page/shaking1.vue'], resolve)
const propPage = resolve => require(['../page/prop.vue'], resolve)
const slotPage = resolve => require(['../page/slot.vue'], resolve)



const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
    	path: '/index',
    	name:index,
    	component:index
    },
    {
      path: '/pullUp',
      name: 'pullUp',
      component: pullUp
    },
    {
      path: '/shaking',
      name: 'shaking',
      components: {
         keepAliveRouter:shaking
      }
    },
    {
      path: '/shaking1',
      name: 'shaking1',
       components: {
         keepAliveRouter:shaking1
      }
    },
    {
      path: '/propPage',
      name: 'propPage',
      component: propPage
    },
    {
      path: '/slotPage',
      name: 'slotPage',
      component: slotPage
    },

 ]
Vue.use(Router)


export default new Router({
  routes
})
