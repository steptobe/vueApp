<template>
    <div>
       <p>{{ $store.state.count }}</p> 
       <button @click="increment">
           异步+5
       </button>
    </div>
</template>

<script>
    export default {
        methods:{
            increment() {
                this.$store.dispatch('incrementAsyncWithValue', 5)
            }
        }
    } 
</script>