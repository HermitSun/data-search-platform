<template>
    <div class="wrapper">
        <p>搜索页面</p>
        <el-button @click="openInNewPage">在新窗口打开</el-button>
        <router-link to="/result-detail/sample-3pp.pdf" target="_blank">在新窗口打开</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        methods: {
            openInNewPage() {
                const {href} = this.$router.resolve({
                    path: '/result-detail/sample-3pp.pdf'
                });
                window.open(href, '_blank');
            }
        }
    };
</script>

<style scoped>

</style>
