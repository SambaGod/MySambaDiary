import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Dashboard from './views/Dashboard.vue'
import axios from "axios"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      beforeEnter: (to, from, next) => {
        axios.get("/api/user")    
          .then((response) => {    
            console.log("continue") 
            next()  
          })
          .catch((errors) => {    
            console.log(errors)    
            next({
              path: '/login'
             })   
          })   
      }
    }
  ]
})
