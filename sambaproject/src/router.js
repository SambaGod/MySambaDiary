import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Dashboard from './views/Dashboard.vue'
import Admin from './views/Admin.vue'
import Userlist from './views/Userlist.vue'
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
            console.log(response) 
            next()  
          })
          .catch((errors) => {    
            console.log(errors)    
            next({
              path: '/login'
             })   
          })   
      }
    },
    {
      path: "/admin",
      name: "Admin",
      component: Admin,
      beforeEnter: (to, from, next) => {
        axios.get("/api/user")    
          .then((response) => {    
            if (response.data.user.isAdmin) {
              next()
            } else {
              next({
                path: '/dashboard'
              }) 
            }
          })
          .catch((errors) => {    
            console.log(errors)    
            next({
              path: '/login'
             })   
          })   
      }
    },
    {
      path: "/admin/users",
      name: "Adminusers",
      component: Userlist,
      beforeEnter: (to, from, next) => {
        axios.get("/api/user")    
          .then((response) => {    
            if (response.data.user.isAdmin) {
              next()
            } else {
              next({
                path: '/dashboard'
              }) 
            }
          })
          .catch((errors) => {    
            console.log(errors)    
            next({
              path: '/login'
             })   
          })   
      }
    },
  ]
})
