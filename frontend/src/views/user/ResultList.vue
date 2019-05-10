<template>
    <div class="wrapper">
        <p>搜索列表</p>
    </div>
</template>

<script>
    import API from '@/api';

    export default {
        name: 'ResultList',
        mounted() {
            if (this.$route.params.simple === 'simple') {
                API.Search.simpleSearch(this.$route.query)
                    .then(res => {

                    }).then(err => {
                    this.$message.error(err.toString());
                });
            } else {
                API.Search.complicateSearch(this.$route.query)
                    .then(res => {

                    }).then(err => {
                    this.$message.error(err.toString());
                });
            }

        }
    };
</script>

<style scoped>

</style>
