import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    adminSidebarOpen: false,
  },
  mutations: {
    welcomeUser(state, loggedInUser) {
      state.user = loggedInUser
    },
    toggleSidebar(state, toggleSB) {
      state.adminSidebarOpen = toggleSB
    }
  },
  actions: {

  },
  getters: {
    user: state => state.user,
    adminSidebarOpen: state => state.adminSidebarOpen
  }
})
