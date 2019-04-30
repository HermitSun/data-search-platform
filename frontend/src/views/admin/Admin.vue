<template>
    <el-container direction="vertical">
        <el-header>
            <!--标题和LOGO-->
            <div class="header left" @click="$router.push('/admin/upload')">
                <img src="#" alt="logo" class="header-logo"/>
                <div class="header-title">德塔社</div>
            </div>
            <!--头像，下拉退出-->
            <el-dropdown trigger="hover" class="admin-info right">
                <img src="#" alt="avatar"/>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="logout">
                        <i class="el-icon-back"></i>
                        <span>退出</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-header>
        <el-col :span="24" class="main">
            <!--侧边栏-->
            <el-aside>
                <el-menu :default-active="$route.path" :default-openeds="this.computedDefaultOpen" router
                         background-color="#2c3e50" text-color="#fff" active-text-color="#ffd04b">
                    <template v-for="(item,index) of navItem">
                        <el-submenu :index="index+''" v-if="!item.isLeaf" :disabled="$route.path==='/admin'">
                            <template slot="title">
                                <i :class="item.iconClass"></i>
                                <span slot="title" style="font-size: medium">{{item.name}}</span>
                            </template>
                            <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path"
                                          :disabled="$route.path==='/admin'">
                                {{child.name}}
                            </el-menu-item>
                        </el-submenu>
                        <el-menu-item v-else :index="item.path" class="leaf" :disabled="$route.path==='/admin'">
                            <i :class="item.iconClass"></i>
                            <span slot="title" style="font-size: medium">{{item.name}}</span>
                        </el-menu-item>
                    </template>
                </el-menu>
            </el-aside>
            <!--内容-->
            <el-main class="content-container">
                <el-col :span="24" class="content-wrapper">
                    <Login v-if="$route.path==='/admin'"></Login>
                    <transition v-else name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </el-col>
            </el-main>
        </el-col>
    </el-container>
</template>

<script>
    import Login from 'components/Login';

    export default {
        name: 'Admin',
        components: {Login},
        data() {
            return {};
        },
        mounted() {
            if (localStorage.getItem('token')) {
                this.$router.push('/admin/upload');
            }
        },
        computed: {
            navItem() {
                return this.$router.options.routes.filter((route) => {
                    return route.path === '/admin';
                })[0].children;
            },
            computedDefaultOpen() {
                let temp = [];
                this.$router.options.routes.filter((route) => {
                    return route.path.indexOf('/admin/') >= 0 && route.path !== '/admin';
                }).map((route) => {
                    temp.push(route.path);
                });
                return temp;
            }
        },
        methods: {
            logout() {
                this.$router.push('/admin');
                localStorage.removeItem('token');
            }
        }
    };
</script>

<style scoped>
    /*整体样式*/
    .el-container {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    /*头部样式*/
    .el-header {
        padding: 0;
        height: 60px;
        line-height: 60px;
    }

    .header {
        background-color: #2980b9;
        width: 250px;
        height: 60px;
    }

    .header:hover {
        cursor: pointer;
    }

    .header .header-logo {
        display: inline-block;
        margin: 10px;
    }

    .header .header-title {
        display: inline-block;
        color: #ecf0f1;
        font-size: 30px;
        /*margin: 8px;*/
    }

    .admin-info {
        margin-right: 30px;
    }

    .admin-info:hover {
        cursor: pointer;
    }

    /*主体样式*/
    .main {
        display: flex;
        position: absolute;
        top: 60px;
        bottom: 0;
        overflow: hidden;
    }

    .main .el-aside {
        flex: 0 0 251px;
    }

    .main .el-aside .el-menu {
        height: 100%;
    }

    .main .el-aside .el-menu-item {
        padding-left: 0 !important;
    }

    .main .content-container {
        flex: 1;
        /*overflow-y: scroll;*/
        padding: 20px;
        background-color: #ecf0f1;
    }

    .main .content-container .content-wrapper {
        box-sizing: border-box;
        background-color: white;
    }
</style>
