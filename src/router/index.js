import Vue from 'vue'
import VueRouter from 'vue-router'

import { APP_NAME } from '../constants'
import Main from '../views/main.vue'
import Basket from '../views/basket.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    meta: {
      title: APP_NAME
    }
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket,
    meta: {
      title: '🛒 Basket'
    }
  }
]

routes.forEach(route => {
  route['beforeEnter'] = (to, from, next) => {
    document.title = to.meta.title
    next()
  }
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
