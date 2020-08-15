import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    RESET_BASKET(state) {
      state.list = []
    },
    REMOVE_FROM_BASKET(state, data) {
      let index = state.list.map(p => p.id).indexOf(data.id)
      if (index !== -1) {
        state.list.splice(index, 1)
      }
    },
    ADD_TO_BASKET(state, data) {
      Vue.notify({
        title: '👋',
        text: 'Product added to cart.'
      })

      if (!state.list.map(p => p.id).includes(data.id)) {
        state.list.push(data)
        return
      }

      state.list = state.list.map(p => {
        if (p.id === data.id) {
          p = data
        }
        return p
      })
    },
    SET_BASKET(state, data) {
      state.list = data
    }
  },
  actions: {
    resetBasket({ commit }) {
      commit('RESET_BASKET')
    },
    addToBasket({ commit }, data) {
      commit('ADD_TO_BASKET', data)
    },
    removeFromBasket({ commit }, data) {
      commit('REMOVE_FROM_BASKET', data)
    },
    setBasket({ commit }, data) {
      commit('SET_BASKET', data)
    }
  }
}
