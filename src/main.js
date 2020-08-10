import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import client from './services/client'

Vue.config.productionTip = false
Vue.use(client)

new Vue({
  router,
  store,
  client,
  render: h => h(App)
}).$mount('#app')
