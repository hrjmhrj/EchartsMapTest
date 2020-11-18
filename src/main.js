// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import service from './plugins/axios'
import {failedTip} from "./plugins/element";
import {successTip} from "./plugins/element";
// 无缝滚动插件
import vueSeamlessScroll from 'vue-seamless-scroll'

/* eslint-disable no-new */

// 引入echarts
import echarts from 'echarts'

//引入字体自适应
import box from './assets/js/box'
Vue.use(box);

// 全局echarts
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.prototype.axios = service

// 引入jQuery
import $ from '../static/jquery-3.3.1.min';
window.jQuery = $;
window.$ = $;

Vue.prototype.failedTip = failedTip
Vue.prototype.successTip = successTip

Vue.use(ElementUI);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
new Vue({
    components: {
        vueSeamlessScroll
    }
})
