<template>
  <div id="app">
    <login-page></login-page>
    <!--<header-bar ></header-bar>-->
    <!--<main-content></main-content>-->
    <!--<main-section></main-section>-->
    <!--<aside-bar></aside-bar>-->

      <!--<router-view></router-view>-->


  </div>
</template>

<script>
  import loginPage from  '@/components/login/loginPage'
  import headerBar from '@/components/headerBar'
//  import mainSection from '@/components/mainSection'
//  import test from '@/components/test'
  import mainContent from '@/components/mainContent'

  export default {
    name: 'app',
    components: {
      "headerBar": headerBar,
      "loginPage": loginPage,
//      "mainSection": mainSection,
//      "test": test
      "mainContent": mainContent
    }
  }
</script>

<style>
  #app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 60px;*/
  }
</style>
