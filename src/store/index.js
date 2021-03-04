import { createStore } from 'vuex'

const url = 'https://rxsat-backend.herokuapp.com/data'

export default createStore({
  state: {
    bscs: {},
    selectedBsc: '',
  },
  getters: {
    allBscs: (state) => state.bscs,
    filterBsc: (state) => state.selectedBsc,
  },
  mutations: {
    setBscs (state, bscs) {
      state.bscs = bscs
    },
    setFilter (state, bsc) {
      state.selectedBsc = bsc
    }
  },
  actions: {
    async fetchBscs({ commit }) {
      const res = await fetch(url)
      const bscs = await res.json()
      commit('setBscs', bscs)
    },
    async postBscs({ commit }, csv) {
      const res = await fetch(url, {
        headers: {
          'Content-Type': 'text/plain'
        },
        method: 'POST',
        body: csv
      })
      const bscs = await res.json()
      // console.log(bscs)
      commit('setBscs', bscs)
    },
    setSelectedBsc ({ commit }, bsc) {
      commit('setFilter', bsc)
    }
  },
  modules: {
  }
})
