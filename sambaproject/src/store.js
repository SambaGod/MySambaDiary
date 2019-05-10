import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    welcomeUser(state, loggedInUser) {
      state.user = loggedInUser
    }
  },
  actions: {

  },
  getters: {
    user: state => state.user
  }
})
