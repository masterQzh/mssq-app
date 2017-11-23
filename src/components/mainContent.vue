<template>
  <div class="mainSection">
    <div class="asideBar">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            text-color="#999999"
            active-text-color="#ffd04b">
            <div class="home" style="margin-bottom: 8px;">
              <router-link to="/home" style="text-decoration: none">
              <el-menu-item index="1" class="titleColor">
                <i class="el-icon-setting"></i>
                <span slot="title">首页</span>
              </el-menu-item>
              </router-link>
            </div>
            <div class="serviceManage">
              <el-menu-item index="2" class="titleColor">
                <i class="el-icon-menu"></i>
                <span slot="title">服务管理</span>
              </el-menu-item>
              <el-submenu index="1-4" style="text-align: center">
                <template slot="title">发布管理</template>
                <router-link to="/newAddService"> <el-menu-item index="1-4-1" >新增服务</el-menu-item></router-link>
                <el-menu-item index="1-5-1" >草稿箱</el-menu-item>
                <el-menu-item index="1-6-1" >服务审核</el-menu-item>
                <el-menu-item index="1-7-1" >服务发布</el-menu-item>
              </el-submenu>
              <el-submenu index="1-5" style="text-align: center">
                <template slot="title">报名管理</template>
                <el-menu-item index="1-4-1">居民报名审核</el-menu-item>
                <el-menu-item index="1-5-1">报名审核一览表</el-menu-item>
              </el-submenu>
              <el-menu-item index="2-7-1" style="text-align: center">服务总结</el-menu-item>
            </div>
            <div class="totalAnalyze" >
              <el-menu-item index="3" class="titleColor">
                <i class="el-icon-setting"></i>
                <span slot="title">统计分析</span>
              </el-menu-item>
              <div style="text-align: center">
                <el-menu-item index="1-6-1">服务类型占比分析</el-menu-item>
                <el-menu-item index="1-7-1">服务热度分析</el-menu-item>
              </div>
            </div>
            <div class="infoSend" >
              <el-menu-item index="4" class="titleColor">
                <i class="el-icon-setting"></i>
                <span slot="title">信息发布</span>
              </el-menu-item>
              <div style="text-align: center">
                <el-menu-item index="4-6-1">社区信息发布</el-menu-item>
                <el-menu-item index="4-7-1">服务信息发布</el-menu-item>
              </div>
            </div>
            <div class="communityManage" >
              <el-menu-item index="5" class="titleColor">
                <i class="el-icon-setting"></i>
                <span slot="title">社区管理</span>
              </el-menu-item>
              <div style="text-align: center">
                <el-menu-item index="5-6-1">居民注册认证</el-menu-item>
                <el-menu-item index="5-7-1">新增工作人员</el-menu-item>
                <el-menu-item index="5-8-1">工作人员工作管理</el-menu-item>
                <el-menu-item index="5-9-1">新增服务机构</el-menu-item>
                <el-menu-item index="5-10-1">服务机构管理</el-menu-item>
              </div>
            </div>


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
  /*导航elementUi样式*/
  .titleColor{
    background-color: #E1E1E1;
  }
  .el-menu-item:hover{
    background-color: red;
  }
  .sendColor:hover{
    background-color: darkred;
  }
  a{
    text-decoration:none;
  }
  /*.el-submenu:hover{*/
    /*background-color: navy;*/
  /*}*/

  /*.el-menu .el-menu-item{*/
    /*!*background-color:#E1E1E1;*!*/
    /*background-color:springgreen;*/
    /*color: white;*/
    /*font-size: 18px;*/

  /*}*/
  /*.el-menu-item{*/
    /*margin:10px 0 ;*/
  /*}*/
   /*.el-menu-item:focus, .el-menu-item:hover{*/
    /*background-color:red;*/
  /*}*/
   /*.el-menu-item:focus, .el-submenu:hover{*/
     /*background-color:red;*/
   /*}*/
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
