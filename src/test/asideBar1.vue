<template>
  <div class="mainSection">
    <div class="asideBar">
      <el-menu
        background-color="red"
       >

      <el-menu-item index="0">

        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      </el-menu>
      <el-menu
        background-color="blue"
      >

        <el-menu-item index="0">

          <i class="el-icon-menu"></i>
          <span slot="title">服务管理</span>
        </el-menu-item>
      </el-menu>
      <el-row class="tac">
        <el-col :span="24">

          <!--<h5>默认颜色</h5>-->
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
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
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
          </el-menu>
        </el-col>

      </el-row>
    </div>
    <div class="routerView">
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
  .mainSection {
    width: 1200px;
    height: 1200px;
    background-color: navy;
    margin: 14px auto;
  }

  .mainSection .asideBar {
    width: 200px;
    height: 100%;
    background-color: greenyellow;

  }
</style>
