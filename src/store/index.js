import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gallery: ['entry', 'enNingCoffee', 'hotPot', 'oldWareHouse', 'roastMeat', 'sugarWater'],
    selected: 0
  },
  mutations: {
    select(state, name) {
      const index = state.gallery.indexOf(name)
      console.log(name)
      index > -1 ? state.selected = index : state.selected = 0
    }
  },
  actions: {
  },
  modules: {
  }
})
