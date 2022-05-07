import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import AOS from 'aos'
import 'aos/dist/aos.css'


import '@/assets/css/main.css'
import '@/assets/css/media-query.css'

import instance from '@/plugins/axios.js'

import "toastify-js/src/toastify.css"
import toastify from 'toastify-js'

import { Icon } from '@iconify/vue2';

Vue.component("IconComponent", Icon)

import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

Vue.prototype.$axios = instance
Vue.prototype.$toastify = toastify
    // Vue.use(http)

Vue.config.ignoredElements = [/^ion-/]
Vue.config.ignoredElements = [/^Icon-/]

Vue.config.productionTip = false

new Vue({
    router,
    store,
    toastify,
    mounted() {
        AOS.init()
      },
    render: h => h(App)
}).$mount('#app')