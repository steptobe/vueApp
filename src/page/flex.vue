<template>
  <div>
    <headerTab title="flexbox学习" icon=""></headerTab>
    <div class="box">
      <div class="item">
        flex
      </div>
      <div class="item item2">
        flex2
      </div>
      <div class="item">
        flex
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.box {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 30px;
  align-items: stretch;
  .item2{
  	flex-basis: 300px;
  	align-self: flex-end;
  	order: -1;

  }
}

</style>
