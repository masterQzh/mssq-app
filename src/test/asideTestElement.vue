<template>
  <div class="mainSection">
    <el-submenu index="1">
      <template slot="title">
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
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
        <el-menu-item index="1-4-1">选项2</el-menu-item>
        <el-menu-item index="1-4-1">选项3</el-menu-item>
        <el-menu-item index="1-4-1">选项4</el-menu-item>
      </el-submenu>
    </el-submenu>
  </div>
    <div class="routerView">
      <router-view></router-view>
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
