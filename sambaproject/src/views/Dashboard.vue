<template>  
  <div>    
    <h2>Dashboard</h2>    
    <p>Name: {{ user }}</p>
    <b-button v-on:click="logout">Logout</b-button>
    <router-link v-if="user.isAdmin" to="/admin">Back to admin view</router-link>
  </div>
</template>  
<script>  
import axios from "axios"
import router from "../router"    
export default {    
    name: "Login",    
    data() {    
      return {    
        user: {}    
      }    
    },    
    methods: {
        logout() {
            axios.get("/api/logout")
              .then((response) => {
                router.push("/")
              })
        },
        getUserData: function() {
            let self = this    
            axios.get("/api/user")    
              .then((response) => {      
                self.$set(this, "user", response.data.user)    
              })    
              .catch((errors) => {    
                console.log(errors)    
                router.push("/")    
              })    
            }    
        },
        mounted() {    
            this.getUserData()    
        }    
    }
</script>
