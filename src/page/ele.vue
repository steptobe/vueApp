<template>
  <main>
      <el-tabs v-model="activeName2" type="card" >
   <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third" :lazy="true">><ii></ii></el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth" :lazy="true">  <uploader :src="'/api/imgsupload'"></uploader></el-tab-pane>


</el-tabs>
  </main>
</template>

<script>
import uploader from '@/components/upImage.vue';
import ii from './danmu.vue';
  export default {
    data() {
      return {
        editableTabsValue: '2',
        editableTabs: [{
          title: 'tab',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
     components: {
            uploader,
            ii
        },
    methods: {
      beforeLeaveTab(activeName, oldActiveName){
             if(activeName == 'tab'){
                //不发起请求
                alert('aaa')
                return false
              }else{
                console.log(tab.label)
              }
      },
      // handleClick(tab, event) {
      //   console.log(tab)
      //   if(tab.label == 'tab'){
      //     //不发起请求

      //   }else{
      //     console.log(tab.label)
      //   }
      // }
    }
  }
</script>
