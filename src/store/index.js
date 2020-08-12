import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import basket from '@/store/basket'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    basket
  },
  plugins: [
    createPersistedState({
      paths: ['basket']
    })
  ]
})
