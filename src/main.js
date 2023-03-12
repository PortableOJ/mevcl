import Vue from 'vue'
import VueI18n from 'vue-i18n'

import App from './App.vue'
import router from './router'
import Mevcl from './index'
import messages from "./i18n";

import './static/style.css'

Vue.config.productionTip = false


Vue.use(Mevcl)
Vue.use(VueI18n)

// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en',
  messages, // 设置地区信息
})

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
