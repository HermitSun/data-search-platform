<template>
    <div id="app">
        <transition>
            <router-view></router-view>
        </transition>
    </div>
</template>

<style>
    @import "./assets/css/init.css";

    #app {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100%;
        height: 100%;
    }

    .left {
        float: left;
    }

    .right {
        float: right;
    }
</style>
