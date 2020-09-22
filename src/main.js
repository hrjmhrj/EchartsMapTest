// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
/* eslint-disable no-new */

// 引入echarts
import echarts from 'echarts'
// 全局echarts
Vue.prototype.$echarts = echarts

// 引入jQuery
import $ from '../static/jquery-3.3.1.min';
window.jQuery = $;
window.$ = $;


Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
