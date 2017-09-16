import Vue from 'vue'
import Router from 'vue-router'

const pullUp = resolve => require(['../page/pullUp.vue'], resolve)
const index = resolve => require(['../page/index.vue'], resolve)
const shaking = resolve => require(['../page/shaking.vue'], resolve)
const propPage = resolve => require(['../page/prop.vue'], resolve)
const slotPage = resolve => require(['../page/slot.vue'], resolve)
const flex = resolve => require(['../page/flex.vue'], resolve)



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
      component: shaking
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
    {
      path: '/flex',
      name: flex,
      component: flex
    }
 ]
Vue.use(Router)


export default new Router({
  routes
})
