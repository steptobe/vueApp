<template>
    <div>
        <ul>
            <slot name="item" v-for="item in items" :text="item"></slot>
        </ul>
    </div>
</template>
<script>

export default {
    
    data() {
        return {
            items: [
                'a',
                'b'
            ]
        }
    }
}
</script>
<style lang="scss">
p {
    display: flex;
    justify-content: space-around;
}
</style>
