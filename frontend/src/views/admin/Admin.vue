<template>
    <el-container direction="vertical">
        <el-header>
            <img src="#" alt="header" class="header-bg"/>
            <img src="#" alt="logo" class="header-logo"/>
            <div class="header-title">德塔社</div>
            <el-dropdown trigger="hover" class="admin-info">
                <img src="#" alt="avatar"/>
                <el-dropdown-menu slot="dropdown">
                    <!--                    <el-dropdown-item>-->
                    <!--                        <i class="el-icon-setting"></i>-->
                    <!--                        <span>设置</span>-->
                    <!--                    </el-dropdown-item>-->
                    <el-dropdown-item :divided="true" @click.native="logout">
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
                         :collapse="this.collapsed" :collapse-transition="false" background-color="#eef1f6">
                    <template v-for="(item,index) of navItem">
                        <el-submenu :index="index+''" v-if="!item.isLeaf" :disabled="$route.path==='/admin/login'">
                            <template slot="title">
                                <i :class="item.iconClass"></i>
                                <span slot="title" style="font-size: medium">{{item.name}}</span>
                            </template>
                            <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path"
                                          :disabled="$route.path==='/admin/login'">
                                {{child.name}}
                            </el-menu-item>
                        </el-submenu>
                        <el-menu-item v-else :index="item.path" class="leaf" :disabled="$route.path==='/admin/login'">
                            <i :class="item.iconClass"></i>
                            <span slot="title" style="font-size: medium">{{item.name}}</span>
                        </el-menu-item>
                    </template>
                </el-menu>
            </el-aside>
            <!--内容-->
            <el-main>
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </el-main>
        </el-col>
    </el-container>
</template>

<script>
    import API from '@/api';

    export default {
        name: 'Admin',
        data() {
            return {};
        },
        mounted() {
            API.Search.complicateSearch(1, ['12', '23'])
                .then((res) => {

                })
                .catch((err) => {

                });
        },
        computed: {
            computedDefaultOpen() {
                let temp = [];
                this.$router.options.routes.filter((route) => {
                    return route.path.indexOf('/admin/') >= 0 && route.path !== '/admin/login';
                }).map((route) => {
                    temp.push(route.path);
                });
                return temp;
            },
            navItem() {
                return this.$router.options.routes.filter((route) => {
                    return route.path.indexOf('admin') >= 0;
                });
            }
        },
        methods: {
            logout() {

            }
        }
    };
</script>

<style scoped>

</style>
