<template>
  <div>
    <slot></slot>
        <slot name="s1">这是一个具名的slot</slot>

    <p><span>第一个span</span><span>第二个span</span><span>第三个span</span></p>
    <!-- 具名的slot -->
        <slot name="s2">这是一个具名的slot哦</slot>

  </div>
</template>
<style lang="scss">
p {
  display: flex;
  justify-content: space-around;
}

</style>
