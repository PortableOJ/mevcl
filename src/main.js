import Vue from 'vue'
import App from './App.vue'

// import MEVCL from './index'
//
// Vue.use(MEVCL)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
