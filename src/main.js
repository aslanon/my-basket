import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import client from './services/client'

// import global styles
import './assets/stylesheet/style.scss'

import { APP_NAME } from './constants'

document.title = APP_NAME

Vue.config.productionTip = false

// HTTP client
Vue.use(client)

new Vue({
  router,
  store,
  client,
  render: h => h(App)
}).$mount('#app')
