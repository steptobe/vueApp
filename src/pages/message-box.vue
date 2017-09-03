<template>
  <mt-button @click.native="openAlert">
    打开alert提示框
  </mt-button>
</template>
<script>
import { MessageBox } from 'mint-ui';
//弹出式提示框，有多种交互方式
export default {
  methods: {
    openAlert() {
      MessageBox({
        title: '操作成功',
        message: '提示',
        showCancelButton: false
      })
    }
  }
}

</script>
