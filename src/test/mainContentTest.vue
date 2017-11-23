<template>
  <div class="mainSection">
    <div class="asideBar">
      <el-row class="tac">
        <el-col :span="24">
          <h5>默认颜色</h5>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1">
              <template slot="title" class="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title" >选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" style="background-color: aquamarine">
              <i class="el-icon-setting"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
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
    name: 'asideBar',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      enter: function () {
        this.style.backgroundColor = "green"
      },
      leave: function () {
        this.style.backgroundColor = "red"
      },

    }
  }
</script>


<style scoped>

   .el-menu-item:focus, .el-menu-item:hover{
    background-color:yellow;
  }
   .el-menu-item:focus, .el-submenu:hover{
     background-color:yellow;
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
