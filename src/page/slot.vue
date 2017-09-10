<template>
  <div class="slotChild">
    <headerTab title="slot学习"></headerTab>
    <!-- 单个slot -->
    <div class="box">
    <slotChild>
    	<h1>这是一个U盘</h1>
    	<h2 slot="s1">我是鲁班</h2>
    	<h2 slot="s2">我是安其拉</h2>

    </slotChild>
</div>
  </div>
</template>
<style lang="scss">
	.slotChild{
		.box{
			padding:10px;
		}
	}
</style>
<script>
	import slotChild from '../components/slotChild.vue'

	export default{
		components:{
			slotChild
		}
	}
</script>
