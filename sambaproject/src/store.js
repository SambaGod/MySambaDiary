import Vue from 'vue'
import Vuex from 'vuex'
import { Stats } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    country: {},
    sidebarOpen: true,
    selectedEvents: []
  },
  mutations: {
    welcomeUser(state, loggedInUser) {
      state.user = loggedInUser
    },
    addCountry(state, c) {
      state.country[c.code] = c.name
    },
    openSidebar(state, c) {
      state.sidebarOpen = !state.sidebarOpen
    },
    attendEvent(state, se) {
      state.selectedEvents = se
    }
  },
  actions: {

  },
  getters: {
    user: state => state.user,
    countries: state => state.country,
    sidebarOpen: state => state.sidebarOpen,
    selectedEvents: state => state.selectedEvents
  }
})
