import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//导入首页
import home from '@/components/home'
// 服务管理部分
import newAddService from '@/components/serviceManage/newAddService'

Vue.use(Router)


// 路由配置
export default new Router({
  routes: [
    { path: '/', redirect: { name: 'home' }},
   //首页
    {
      path: '/home',
      name: 'home',
      component: home
    },
    // 服务管理
    {
      path: '/newAddService',
      name: 'newAddService',
      component: newAddService
    }
  ]
})
