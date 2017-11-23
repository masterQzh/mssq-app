// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'


// 导入样式
import commonCss from '@/assets/css/common.css'
// elementUi样式
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

// 使用
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
