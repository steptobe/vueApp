<template>
    <div>
        <p>获取states：
        <span>{{ $store.state.count }}</span>,
        <span>
            {{ getState}}
        </span></p>
        <hr>
        <p>
            获取getter：<span>{{$store.getters.done}}</span>,
            <span>{{getGetter}}</span>
        </p>
        <hr>
        <p>
            提交mutation increment：
            <button @click="increment">+1</button>
        </p>
        <hr>
        <p>
            提交mutation add：
            <button @click="add(5)">+5</button>
        </p>
    </div>
</template>

<script>
    export default {
        methods:{
            increment(){
                this.$store.commit('increment')
            },
            add(num){
                this.$store.commit('add',num)
            }
        },
        computed:{  
            getState(){
                return this.$store.state.count
            },
            getGetter(){
                return this.$store.getters.done
            }
        }
    }
</script>
