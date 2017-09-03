<template>
	<div>
		<mt-button @click.native = "sheetVisible = true"> 点击上拉</mt-button>
		<mt-actionsheet :actions = "actions" v-model="sheetVisible" cancel-text=""></mt-actionsheet>
	</div>
</template>
<script>
	import { Actionsheet } from 'mint-ui'
	//操作表，从屏幕下方移入
	export default {
		data(){
			return{
				sheetVisible:false,
				actions:[]
			};
		},
		methods:{
			takePhoto(){
				alert('test');
			}

		},

		mounted(){
			this.actions = [{
				name:'拍照',
				method: this.takePhoto
			}]
		}
	}
</script>