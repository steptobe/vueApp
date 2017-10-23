<template>
	<div class="slotChild">
		<headerTab title="slot学习"></headerTab>
		<!-- 单个slot -->
		<div class="box">
			<slotChild>
				<h1>这是一个U盘</h1>
				<h2 slot="s1">我是鲁班</h2>
				<h2 slot="s2">我是安其拉</h2>
				<template scope="props">
						<span>hello from parent</span>
						<span>{{ props.text }}</span>
					</template>
			</slotChild>
			<slotChild1 :items="items">
				<!-- 作用域插槽也可以是具名的 -->
				<template slot="item" scope="props">
					<li class="my-fancy-item">{{ props.text }}</li>
				</template>
			</slotChild1>
		</div>
	</div>
</template>
<style lang="scss">
.slotChild {
	.box {
		padding: 10px;
	}
}
</style>
<script>
import slotChild from '../components/slotChild.vue'
import slotChild1 from '../components/slotChild1.vue'

export default {
	components: {
		slotChild,
		slotChild1
	},
	data() {
		return {
			items: [
				'a',
				'b'
			]
		}
	},
	created() {
		sessionStorage.setItem("need-refresh", true);

	}
}
</script>
