<template>
    <div class="wrapper">
        <el-image :src="require('assets/images/logo.png')"></el-image>
        <h1>德塔社</h1>
        <el-row>
            <el-col :span="8" :offset="7">
                <el-input v-model="keyword" size="large" placeholder="请输入关键词">
                    <i slot="suffix" class="el-input__icon el-icon-menu" style="cursor: pointer"
                       @click="showComplicateSearch=true"></i>
                </el-input>
            </el-col>
            <el-col :span="1">
                <el-button @click="simpleSearch" type="primary" size="large">DATA一下</el-button>
            </el-col>
        </el-row>
        <el-dialog :visible.sync="showComplicateSearch">
            <!--高级搜索内容-->
            <el-button @click="complicateSearch" type="primary" size="large">DATA一下</el-button>
        </el-dialog>
        <!--        <el-button @click="openInNewPage">在新窗口打开</el-button>-->
        <!--        <router-link to="/result-detail/sample-3pp.pdf" target="_blank">在新窗口打开</router-link>-->
    </div>
</template>

<script>
    export default {
        name: 'Index',
        data() {
            return {
                showComplicateSearch: false,
                keyword: '',
                complicateSearchForm: {
                    page: 0,
                    keywords: ['', '', '', '', '', ''],
                    dataStartTime: '',
                    dataEndTime: '',
                    dataArea: ['', '', '']
                }
            };
        },
        methods: {
            simpleSearch() {
                if (this.keyword === '') {
                    this.$message.warning('请输入关键词');
                    return;
                }
                this.$router.push({
                    path: '/result-list/simple',
                    query: {
                        page: 1,
                        keyword: this.keyword
                    }
                });
            },
            complicateSearch() {
                this.$router.push({
                    path: '/result-list/complicate',
                    query: {
                        page: 1,
                        keyword: this.keyword
                    }
                });
            },
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
    h1 {
        font: 40px bold;
        margin: 2vw 0;
    }

    .el-row {
        margin: 2vw 0;
    }

    i {
        font-size: 16px !important;
    }
</style>
