import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import countries from '@/data/countries'

Vue.use(Vuetify)
Vue.config.productionTip = false

for (var i = 0; i < countries.length; i++) {
  store.commit('addCountry', countries[i])
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
