export default {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    RESET_BASKET(state) {
      state.list = []
    }
  },
  actions: {
    resetBasket({ commit }) {
      commit('RESET_PASSWORD')
    }
  }
}
