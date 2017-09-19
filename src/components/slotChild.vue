<template>
  <div>
    <slot></slot>
    <!-- 具名的slot -->
    <slot name="s1"></slot>
    <slot name="s2"></slot>
    <p>
      <span>第一个span</span>
      <span>第二个span</span>
      <span>第三个span</span>
    </p>
    <div class="child">
      <slot text="hello from child"></slot>
    </div>
  </div>
</template>
<script>

export default {
	data() {
		return {
			
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
