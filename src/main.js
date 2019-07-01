import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/index.scss'

import VueScrollmagic from 'vue-scrollmagic'
Vue.use(VueScrollmagic)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
