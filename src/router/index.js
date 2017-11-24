import Vue from 'vue'
import Router from 'vue-router'

const pullUp = resolve => require(['../page/pullUp.vue'], resolve)
const index = resolve => require(['../page/index.vue'], resolve)
const shaking = resolve => require(['../page/shaking.vue'], resolve)
const shaking1 = resolve => require(['../page/shaking1.vue'], resolve)
const propPage = resolve => require(['../page/prop.vue'], resolve)
const slotPage = resolve => require(['../page/slot.vue'], resolve)
    //flexbox
const flex = resolve => require(['../page/flex.vue'], resolve)
    //生命周期函数学习
const lebenszyklus = resolve => require(['../page/lebenszyklus.vue'], resolve)
    //图片上传组件
const upPhoto = resolve => require(['../page/upPhoto.vue'], resolve)

//键盘事件
const viewpan = resolve => require(['../page/viewpan.vue'], resolve)


const routes = [{
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: index,
        component: index
    },
    {
        path: '/lebenszyklus',
        name: lebenszyklus,
        component: lebenszyklus
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
            keepAliveRouter: shaking
        }
    },
    {
        path: '/shaking1',
        name: 'shaking1',
        components: {
            keepAliveRouter: shaking1
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
    {
        path: '/flex',
        name: flex,
        component: flex
    },
    {
        path: '/upPhoto',
        component: upPhoto
    },
    {
        path: '/viewpan',
        component: viewpan
    }

]
Vue.use(Router)


export default new Router({
    routes
})