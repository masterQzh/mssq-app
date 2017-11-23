<template>
  <!--登录页面-->
  <div class="loginPage">
    <div class="loginContent">
      <h4 style="padding: 0;margin: 0;padding-top:5px;margin-bottom:20px;font-weight: normal">
        用户登录
      </h4>
      <el-input v-model="username" placeholder="请输入用户名" style="width:250px;margin:0 15px 12px 15px"></el-input>
      <el-input type="password" v-model="password" placeholder="请输入密码" style="width:250px;margin:0 15px 12px 15px"></el-input>
      <el-button type="info" @click="goLogin" style="width:250px;margin:0 15px 30px 15px">登录</el-button>
      <el-button type="text" @click="goRegister" style="float: left;margin:0;margin-left: 25px;color:#A5A5A5; ">立即注册</el-button>
      <el-button type="text" @click="goForgetPassword" style="float: right;margin:0;margin-right: 25px;color:#A5A5A5;">忘记密码</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginPage',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods:{
    goLogin:function () {
      this.$alert('<strong>请登录一下</strong>', '登录', {
        dangerouslyUseHTMLString: true
      });
    },
    goRegister:function(){
      this.$alert('<strong>立即注册</strong>', '注册', {
        dangerouslyUseHTMLString: true
      });
    },
    goForgetPassword:function () {
      this.$alert('<strong>重置密码</strong>', '忘记密码', {
        dangerouslyUseHTMLString: true
      });
    }

  },
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
