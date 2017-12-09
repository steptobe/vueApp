<template>
   <div  class="item box-r">
                     
                 
        <pattern-input  maxlength="4" placeholder=""
                        
                        :regExp="setting.regExp"
                        :replacement="setting.replacement"
                        @input="handleInput"
                        @change="handleChange"
                        v-model="data" v-show="sortBtn==true"></pattern-input>
       
    </div>
</template>
<script>
import vuePattern from '../components/vue-pattern-input.vue'
    export default {
        data(){
            return {
                data:"222"
            }
        },
        components:{
            vuePattern
        }
    }
</script>
<style lang="scss">
   .box-r {
      display: flex;
      align-items: center;
      justify-content: space-around;
     
      input {
        border: 1px solid #eee;
        width: 1.6rem;
        margin-left: 0.2rem;
        height: 0.9rem;
        text-align: center;
        color: #333;
      }
    } 
</style>