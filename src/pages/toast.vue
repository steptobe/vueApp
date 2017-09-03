<template>
	<div class="page-toast">
		<h1 class="page-title">Toast</h1>
		<div>
			<mt-button @click.native="openToast" size="large">点击弹出</mt-button>
			<mt-button @click.native="openToastWithIcon" size="large">点击弹出带有icon的</mt-button>
			<mt-button @click.native="openBottomToast" size="large">自定义Toast位置</mt-button>
		</div>
	</div>
</template>
<script>
	import { Toast } from 'mint-ui'
    //简短的消息提示框，支持自定义位置，持续时间和样式
	export default {
		methods:{
			openToast(){
				Toast('提示信息');
			},
			openToastWithIcon(){
				Toast({
					message:'操作成功',
					iconClass:'mintui mintui-success'
				});
			},
			openBottomToast(){
				Toast({
					message:'提示信息',
					position:'bottom'
				})
			}
		}
	}
</script>
<style ></style>