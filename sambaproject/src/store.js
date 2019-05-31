import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    country: {}
  },
  mutations: {
    welcomeUser(state, loggedInUser) {
      state.user = loggedInUser
    },
    addCountry(state, c) {
      state.country[c.code] = c.name
    }

  },
  actions: {

  },
  getters: {
    user: state => state.user,
    countries: state => state.country
  }
})
