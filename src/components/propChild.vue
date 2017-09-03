<template>
  <mt-header :title="title">
    <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
    <mt-button :icon="icon" slot="right"></mt-button>
  </mt-header>
</template>
<script>
	export default{
		    props: ['title',  'icon']
	}
</script>