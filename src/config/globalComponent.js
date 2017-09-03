import loadingComponent from '../components/loading.vue'
import header from '../components/propChild.vue'

const headerpage={
    install:function(Vue){
        Vue.component('headerTab',header)

    }  //'Loading'这就是后面可以使用的组件的名字，install是默认的一个方法
};

export default headerpage;