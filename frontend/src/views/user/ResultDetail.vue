<template>
    <div class="wrapper">
        <el-button @click="$router.go(-1)"></el-button>
        <div id="pdf"></div>
    </div>
</template>

<script>
    import PDFObject from 'pdfobject';
    import {PDF_BASE_URL} from '@/plugins/pdf';

    export default {
        name: 'ResultDetail',
        beforeRouteUpdate(to, from, next) {
            const filename = this.$route.params.filename;
            const url = PDF_BASE_URL + filename;
            next();
        },
        mounted() {
            const filename = this.$route.params.filename;
            const url = PDF_BASE_URL + filename;
            if (PDFObject.supportsPDFs) {
                PDFObject.embed(url);
            } else {
                // 此处应执行下载逻辑
                // TODO: PDF->HTML->PDF，实现安全性
                this.$message.error('您的浏览器不支持在线预览，请下载后查看');
            }
        },
        data() {
            return {};
        },
        methods: {

        }
    };
</script>

<style scoped>

</style>
