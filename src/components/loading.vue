<template>
   <div class="loading-page">
	<div class="box"><mt-spinner  :size="30" type="fading-circle" ></mt-spinner></div>
	<p>正在努力加载中</p>
   </div>
</template>
<script>
export default {
    name:'loading'
}
</script>
<style lang="scss">
	.loading-page{
		height: 70vh;
		text-align: center;
		padding-top: 20px;
		box-sizing: border-box;
		overflow: hidden;
		background-color: #fff;
		.box{
			text-align: center;
			width: 100vw;
			display: flex;
			justify-content: center;
		}
		p{
			color: #949191;
			font-size: 14px;
			width: 100vw;
			text-align: center;
			margin-top: 20px;
		}
	}
</style>
