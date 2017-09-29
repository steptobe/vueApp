<template>
	<!-- prop学习 -->
	<div class="prop-learn">
		<headerTab title="prop学习" icon=""></headerTab>
		<h5>复制分享代码</h5>
		<div class="flow-info">
			<span class="copy-text" id="copy-text">{{shareUrl}}</span>
			<input type="text" v-model="shareUrl" id="copy-input" readonly="readonly">
			<span class="btn-copy" @click="copyToClipBoard()" >复制</span>
		</div>
	</div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
	data() {
		return {
			shareUrl: 'http://wechat.99cj.com.cn' //流量主的分享链接
		}
	},
	methods: {
		copyToClipBoard() {
			const userAgent = navigator.userAgent;
			  this.$http.get('https://api.douban.com/v2/movie/coming_soon' ).then(res => {
                       console.log(res.body.data)
                    })
			if (userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1) {//android
				document.getElementById("copy-input").select();
				document.execCommand('copy', 'false', null);
				Toast('已复制，快分享到微信群邀请好友吧。');
			} else {
				const range = document.createRange();
				range.selectNode(document.getElementById('copy-text'));

				const selection = window.getSelection();
				if (selection.rangeCount > 0) {
					selection.removeAllRanges();
				}
				selection.addRange(range);
				if (document.execCommand('copy', false, null)) {
					document.execCommand('copy', 'false', null);
					Toast('已复制，快分享到微信群邀请好友吧。');
				} else {
					Toast('ios 10.0以下暂不支持哦');
				}
			}
		}
	}
}
</script>
<style lang="scss">
.prop-learn {
	h5{
		height: 1rem /* 50/100 */;
		line-height:1rem /* 50/100 */;
	}
	.flow-info {
		padding-left: 0.3rem;
		background-color: #fff;
		.copy-link {
			position: absolute;
			z-index: 11;
			left: 2.36rem;
			height: 1.1rem;
			color: #666;
			width: 70%;
			/*line-height: 55px;*/
		}
		.copy-text {
			font-size: 0.24rem;
			display: inline-block;
			max-width: 70%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			line-height: 1.08rem;
			&::selection {
				background: #fff;
			}
		}
		#copy-input {
			z-index: -1000;
			width: 1px;
			height: 1px;
			color: #fff;
			&::selection {
				background: #fff;
			}
		}
		.btn-copy {
			display: inline-block;
			padding: 0.06rem 0.12rem;
			border: 1px solid #5f86fc;
			border-radius: 3px;
			color: #5f86fc;
			float: right;
			position: relative;
			top: 0.32rem;
			right: 0.66rem;
			font-size: 0.26rem;
		}
	}
}
</style>