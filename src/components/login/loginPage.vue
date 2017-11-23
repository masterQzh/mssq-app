<template>
  <div class="loginPage">
    <div class="loginContent">
      <h4 style="padding: 0;margin: 0;padding-top:5px;margin-bottom:20px;font-weight: normal">
        用户登录
      </h4>
      <el-input v-model="input" placeholder="请输入用户名" style="width:250px;margin:0 15px 12px 15px"></el-input>
      <el-input v-model="input" placeholder="请输入密码" style="width:250px;margin:0 15px 12px 15px"></el-input>
      <el-button type="info" style="width:250px;margin:0 15px 30px 15px">登录</el-button>
      <el-button type="text" @click="open1" style="float: left;margin:0;margin-left: 25px;color:#A5A5A5; ">立即注册</el-button>
      <el-button type="text" @click="open2" style="float: right;margin:0;margin-right: 25px;color:#A5A5A5;">忘记密码</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginPage',
  data() {
    return {
      input: ''
    }
  }
}
</script>


<style scoped>
  .loginPage{

  }
  .loginPage .loginContent{
    margin: 180px auto;
    width: 300px;
    height: 300px;
    border-radius: 10px;
    background-color: greenyellow;
    text-align: center;

  }
</style>
