<template>
  <div>
    <slot></slot>
    <!-- 具名的slot -->
    <slot name="s1"></slot>
    <slot name="s2"></slot>
    <p><span>第一个span</span><span>第二个span</span><span>第三个span</span></p>
  </div>
</template>
<style lang="scss">
p {
  display: flex;
  justify-content: space-around;
}

</style>
