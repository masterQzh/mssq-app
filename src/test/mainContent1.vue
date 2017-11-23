<template>
  <div class="mainSection">
    <div class="asideBar">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <router-link to="/home" style="text-decoration: none"> <el-menu-item index="2">
              <img src="../assets/images/icon_home.png" alt="">
              <span slot="title" style="padding-left: 10px">首页</span>
            </el-menu-item>
            </router-link>
            <router-link to="/serviceManage" style="text-decoration: none">
            <el-menu-item index="3">
              <img src="../assets/images/icon_service.png" alt="">
              <span slot="title" style="padding-left: 10px">服务管理</span>
            </el-menu-item>
            </router-link>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
              <el-menu-item index="1-4-1">选项2</el-menu-item>
              <el-menu-item index="1-4-1">选项3</el-menu-item>
              <el-menu-item index="1-4-1">选项4</el-menu-item>
            </el-submenu>

          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="routerView">
      <!--<div class="viewTop">-->
        <!--<div class="viewTopLeft">-->
          <!--<img src="../assets/images/icon_xiaoxi.png" alt="">-->
          <!--<span>精准社区服务平台最新服务发布啦！！！</span>-->
        <!--</div>-->
        <!--<div class="viewTopRight">-->
          <!--<span class="time">2017-11-11</span>|-->
          <!--<span class="all">全部</span>-->
        <!--</div>-->
      <!--</div>-->
      <router-view></router-view>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'mainContent',
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
    },
  }
</script>


<style scoped>
  .el-menu .el-menu-item{
    /*background-color:#E1E1E1;*/
    background-color:springgreen;
    color: white;
    font-size: 18px;

  }
  .el-menu-item{
    margin:10px 0 ;
  }
   .el-menu-item:focus, .el-menu-item:hover{
    background-color:red;
  }
   .el-menu-item:focus, .el-submenu:hover{
     background-color:red;
   }
     /*主要区域大盒子*/
  .mainSection {
    clear: both;
    /*margin: 14px auto;*/
    margin: 0 auto;
    display: flex;
    width: 1200px;
    height: 1200px;
    background-color: navy;
  }

  /*侧边栏区域*/
  .mainSection .asideBar {
    width: 200px;
    height: 100%;
    background-color: greenyellow;
  }

  /*右边显示区顶部区域*/
  .routerView {
    flex: 1;
    width: 1000px;
    height: 1200px;
    background-color: rebeccapurple;
  }

  /*顶部消息*/
  .routerView .viewTop {
    width: 100%;
    height: 60px;
    background-color: hotpink;
  }

  /*左边*/
  .routerView .viewTop .viewTopLeft {
    float: left;
    line-height: 60px;
  }

  .routerView .viewTop .viewTopLeft img {
    vertical-align: middle;
    background-color: red;
    width: 30px;
    height: 30px;
    margin: 0 20px 0 24px;
  }

  .routerView .viewTop .viewTopLeft span {
    font-size: 14px;
    color: #666666;
  }

  /*右边*/
  .routerView .viewTop .viewTopRight {
    float: right;
    line-height: 60px;
    color: #666666;
  }

  .routerView .viewTop .viewTopRight .time {
    margin-right: 10px;
  }

  .routerView .viewTop .viewTopRight .all {
    color: #ff3f3f;
    margin: 0 18px 0 10px;
    text-align: left;
  }
</style>
