<template>
  <!--顶部区域-->
  <div class="headerBar">
    <div class="topMain">
      <!--左边内容-->
      <div class="topLeft">
        <span>精准社区服务管理后台</span>
      </div>
      <!--右边内容-->
      <div class="topRight">
        <!--头像-->
        <div class="userImg">
          <img src="../assets/images/icon_login.png" alt="">
        </div>
        <!--用户名-->
        <span class="userName">小张</span>
        <span class="manager">社区服务中心管理员</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'headerBar',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>


<style scoped>
  a{
    text-decoration: none;
  }
  .headerBar {
    width: 100%;
    height: 60px;
    background-color: #666666;
    margin-bottom: 12px;
  }
  .topMain{
    line-height: 60px;
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    color: #666666;
    background-color: goldenrod;
  }
  /*左边*/
  .topMain .topLeft{
    float: left;
  }
  .topMain .topLeft span{
    font-size: 20px;
  }

  /*右边*/
  .topMain .topRight{
    float: right;
    margin-right: 80px;
  }

  .topMain .topRight .userImg{
    display: inline-block;
    width: 48px;
    height: 48px;
    border-radius:50%;
    overflow:hidden;
    vertical-align: middle;
    margin: 6px 6px 6px 14px;
  }

  .topMain .topRight .userName{
    position: relative;
    top:-10px;
    margin-bottom: 5px;
  }

  .topMain .topRight .manager{
    position: relative;
    font-size: 14px;
    left: -35px;
    bottom: -15px;
  }
</style>
