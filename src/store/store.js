export default {
    //存储状态值
    state: {
        count: 0
    },
    //状态值的改变方式，操作状态值
    //提交mutation是更改vuex状态的唯一方法
    mutations: {
        //修改state,第一个参数就是state
        increment(state) {
            state.count++
        },
        //提交载荷payload，第一个参数就是state，第二个参数就是载荷。
        add(state, n) {
            state.count += n
        }
    },
    //actions用于处理异步时间，最后还是需要提交mutation来改变state
    actions: {
        //这里使用content来提交mutations
        increment(context) {
            context.commit('increment')
        },
        incrementAsync(context) {
            setTimeout(() => {
                context.commit('increment')
            }, 1000)
        },
        incrementAsyncWithValue(context, value) {
            setTimeout(() => {
                context.commit('add', value)
            }, 1000)
        }
    },
    //在store中定义getters，计算数学。
    getters: {
        done(state) {
            return state.count + 5;
        }
    }
}