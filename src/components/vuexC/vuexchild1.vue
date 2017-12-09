<template>
    <div>
       <p>{{ $store.state.count }}</p> 
       <button @click="increment">
           同步+1
       </button>
    </div>
</template>

<script>
    export default {
        methods:{
            increment() {
                this.$store.commit('increment')
            }
        }
    } 
</script>