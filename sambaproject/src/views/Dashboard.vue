<template>  
  <div>
    <v-container fluid>
      <h2>Dashboard</h2>    
      <p>Name: {{ user }}</p>
      <v-btn v-on:click="logout">Logout</v-btn>
      <router-link v-if="user.isAdmin" to="/admin">Back to admin view</router-link>
      <School v-if="user.school" :schoolId="user.school"></School>
      </v-container>
  </div>
</template>  
<script>
import School from "@/components/School.vue"
import axios from "axios"
import router from "../router"    
export default {    
    name: "Login",    
    data() {    
      return {    
        user: {}    
      }    
    },
    components: {
      School
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
