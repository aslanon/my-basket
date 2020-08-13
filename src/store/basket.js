export default {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    RESET_BASKET(state) {
      state.list = []
    },
    ADD_BASKET(state, data) {
      state.list.push(data)
    }
  },
  actions: {
    resetBasket({ commit }) {
      commit('RESET_PASSWORD')
    },
    addBasket({ commit }, data) {
      commit('ADD_BASKET', data)
    }
  }
}
