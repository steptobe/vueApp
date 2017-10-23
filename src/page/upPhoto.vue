<template>
  <div>
      <div style="margin-bottom: 20px">
                <h2>选择图片</h2>
                <a id='addPic' href="javascript:;" v-on:click="addPic">添加图片 </a>
                <input type="file" @change="onFileChange" multiple style="display: none;" ref="file">
            </div>
            <div v-if="images.length >0">
               <ul>
                  <li v-for="(image,key) in images">
                    
                     <img :src="image" @click='delImage(key)' />
                     <a href="#" style="position: absolute;" @click='delImage(key)'>
                        <span class="glyphicon glyphicon-remove"></span>
                    </a>
                  </li>
               </ul>
                <button @click="removeImage">移除全部图片</button>
                <button @click='uploadImage' >上传</button>
            </div>
  </div>
</template>


<script type="text/ecmascript-6">
export default {
  name: "vue-img-inputer",
  data() {
    return{
      images: []
    }
  },
  methods: {
    addPic(e) {
      this.$refs.file.click()
      return false;
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files);
    },
    createImage(file) {
      if (typeof FileReader === "undefined") {
        alert("您的浏览器不支持图片上传，请升级您的浏览器");
        return false;
      }
      var image = new Image();
      var vm = this;
      var leng = file.length;
      for (var i = 0; i < leng; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(file[i]);
        reader.onload = function(e) {
          vm.images.push(e.target.result);
        };
      }
    },
    delImage(index) {
      this.images.shift(index);
    },
    removeImage(e) {
      this.images = [];
    },
    uploadImage() {
      console.log(this.images);
      return false;
      var obj = {};
      obj.images = this.images;
      $.ajax({
        type: "post",
        url: "upload.php",
        data: obj,
        dataType: "json",
        success: function(data) {
          if (data.status) {
            alert(data.msg);
            return false;
          } else {
            alert(data.msg);
            return false;
          }
        }
      });
    }
  }
};
</script>

<style lang="scss">
//   @import "../assets/fonts/iconfont.css";

ul { list-style: none outside none; margin:0; padding: 0; }
    li { margin: 0 10px; display: inline; }
    #app{
      overflow: hidden;
      text-align: center;
      margin-top: 10%;
    }
    img {
        width: 100px;
        height: 100px;
        margin: auto;
        display: inline;
        margin-bottom: 10px;
    }
</style>