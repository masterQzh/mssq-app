<template>
  <div class="mainSection">
    <div class="asideBar">
      <el-menu
        background-color="red"
      >


      <router-link to="home">  <el-menu-item index="0">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        </router-link>
      </el-menu>
      <el-menu
        background-color="blue"
      >

        <el-menu-item index="0">

          <i class="el-icon-menu"></i>
          <span slot="title">服务管理</span>
        </el-menu-item>
      </el-menu>
      <el-row class="tac" style="overflow: hidden">
        <el-col :span="24">

          <!--<h5>默认颜色</h5>-->
          <el-menu
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1" style="text-align:center">
              <template slot="title">
                <span>发布管理</span>
              </template>
              <!--<el-menu-item-group>-->
              <!--<template slot="title">分组一</template>-->
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
              <el-menu-item index="1-4">选项4</el-menu-item>
              <el-menu-item index="1-5">选项5</el-menu-item>
              <el-menu-item index="1-6">选项6</el-menu-item>
              <!--</el-menu-item-group>-->

              <!--<el-submenu index="1-4">-->
              <!--<template slot="title">选项4</template>-->
              <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
              <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
              <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
              <!--</el-submenu>-->
            </el-submenu>
            <el-submenu index="2" style="text-align: center">
              <template slot="title" >
                <span>报名管理</span>
              </template>
              <!--<el-menu-item-group>-->
              <!--<template slot="title">分组一</template>-->
              <div style="text-align: right">
                <router-link to="xiala1"> <el-menu-item index="1-1">新增服务</el-menu-item></router-link>
                <router-link to="xiala2"> <el-menu-item index="1-2">草稿箱</el-menu-item></router-link>
                <el-menu-item index="1-3">多加几个字试试</el-menu-item>
                <el-menu-item index="1-4">选项4</el-menu-item>
                <el-menu-item index="1-5">选项5</el-menu-item>
                <el-menu-item index="1-6">选项6</el-menu-item>
              </div>
              <!--</el-menu-item-group>-->

              <!--<el-submenu index="1-4">-->
              <!--<template slot="title">选项4</template>-->
              <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
              <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
              <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
              <!--</el-submenu>-->
            </el-submenu>
            <el-menu-item index="1-9" style="text-align: center">服务总结</el-menu-item>
            <!--<el-menu-item index="2">-->
            <!--<i class="el-icon-menu"></i>-->
            <!--<span slot="title">导航二</span>-->
            <!--</el-menu-item>-->
            <!--<el-menu-item index="3">-->
            <!--<i class="el-icon-setting"></i>-->
            <!--<span slot="title">导航三</span>-->
            <!--</el-menu-item>-->
          </el-menu>
        </el-col>

      </el-row>
      <el-menu
        background-color="red"
      >

        <el-menu-item index="0">

          <i class="el-icon-menu"></i>
          <span slot="title">统计分析</span>
        </el-menu-item>
        <el-menu
          background-color="#666"
        >
          <div style="padding-left: 30px">
            <router-link to="xuanxiang1"> <el-menu-item index="1-1" >服务类型占比分析</el-menu-item></router-link>
            <router-link to="xuanxiang2"> <el-menu-item index="1-2">服务热度分析</el-menu-item></router-link>
            <el-menu-item index="1-3">社区信息发布</el-menu-item>
            <el-menu-item index="1-4">选项4</el-menu-item>
          </div>
        </el-menu>
      </el-menu>
      <el-menu
        background-color="black"
      >

        <el-menu-item index="0">

          <i class="el-icon-menu"></i>
          <span slot="title">统计分析</span>
        </el-menu-item>
        <el-menu
          background-color="#999"
        >
          <div style="text-align:center">
            <router-link to="xuanxiang1"> <el-menu-item index="1-1" >服务类型占比分析</el-menu-item></router-link>
            <router-link to="xuanxiang2"> <el-menu-item index="1-2">服务热度分析</el-menu-item></router-link>
            <el-menu-item index="1-3">社区信息发布</el-menu-item>
            <el-menu-item index="1-4">选项4</el-menu-item>
          </div>
        </el-menu>
      </el-menu>
      <!--<el-menu-->
      <!--background-color="blue"-->
      <!--&gt;-->

      <!--<el-menu-item index="0">-->

      <!--<i class="el-icon-menu"></i>-->
      <!--<span slot="title">服务管理</span>-->
      <!--</el-menu-item>-->
      <!--</el-menu>-->
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
  name: 'asideBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped>
  /*主要区域大盒子*/
  .mainSection {
    display: flex;
    width: 1200px;
    height: 1200px;
    background-color: navy;
    margin: 14px auto;
  }
   /*侧边栏区域*/
  .mainSection .asideBar {
    width: 200px;
    height: 100%;
    background-color: greenyellow;
  }



  /*右边显示区顶部区域*/
  .routerView{
    flex: 1;
    width: 1000px;
    height: 1200px;
    background-color: rebeccapurple;
  }
  /*顶部消息*/
  .routerView .viewTop{
    width: 100%;
    height: 60px;
    background-color: hotpink;
  }
  /*左边*/
  .routerView .viewTop .viewTopLeft{
    float: left;
    line-height: 60px;
  }

  .routerView .viewTop .viewTopLeft img{
    vertical-align: middle;
    background-color: red ;
    width: 30px;
    height: 30px;
    margin: 0 20px 0 24px;
  }
  .routerView .viewTop .viewTopLeft span{
    font-size: 14px;
    color: #666666;
  }
  /*右边*/
  .routerView .viewTop .viewTopRight{
    float: right;
    line-height: 60px;
    color: #666666;
  }
  .routerView .viewTop .viewTopRight .time{
    margin-right: 10px;
  }
  .routerView .viewTop .viewTopRight .all{
    color: #ff3f3f;
    margin: 0 18px 0 10px;
  }
</style>
