<template>  
  <div>
    <v-container fluid>
      <h2>Dashboard</h2>    
      <p>Name: {{ user }}</p>
      <v-btn v-on:click="logout">Logout</v-btn>
      <router-link v-if="user.isAdmin" to="/admin">Back to admin view</router-link>
      <router-link to="/settings">Update information</router-link>
      <v-btn>Write article</v-btn>
      <router-link to="/events">Browse events</router-link>
      </v-container>
      <School class="schoolpanel" v-if="user.school" :schoolId="user.school"></School>
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
        getUserData() { 
            axios.get("/api/user")    
              .then((response) => {      
                this.user = response.data.user
                this.$store.commit('welcomeUser', response.data.user)
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
<style>
.schoolpanel {
  position: fixed;
  bottom: 0px;
  width: 100%;
}
</style>
