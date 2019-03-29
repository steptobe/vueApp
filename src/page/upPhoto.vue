<template>
    <div>
        <h4>基于Vue.2X的html5上传图片组件</h4>
        <div style="width: 502px;">
            <uploader :src="'/api/imgsupload'"></uploader>
        </div>
    </div>
</template>
<script>
    import uploader from '@/components/upImage.vue';
    export default {
        data() {
            return {}
        },
        components: {
            uploader
        }
    }
</script>
