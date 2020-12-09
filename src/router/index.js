import Vue from 'vue'
import Router from 'vue-router'
import browser from '@/components/browser.vue'
import map from '@/components/map.vue'
import demo from '@/components/demo/hjzx/homehjzx.vue' //分辨率 3840 2160
import xdmap from '@/components/demo/App4.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'demo',
            component: demo
        },
        {
            path: '/browser',
            name: 'browser',
            component: browser
        },
        {
            path: '/map',
            name: 'map',
            component: map
        },
        {
            path: '/goalMap',
            name: 'demo',
            component: demo
        },
        {
            path: '/testmap',
            name: 'xdmap',
            component: xdmap
        }
    ]
})
