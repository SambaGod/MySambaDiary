<template>  
    <div>
      <v-container>
        <v-card class="loginForm">
        <v-parallax :src="samba">
        <h2 v-if="showForm">Register</h2>
        <v-form v-if="showForm" @submit="register" ref="form">
            <v-text-field v-model="email" label="Email" color="#FFFFFF" hint="Email is used for ideentification" dark></v-text-field>
            <v-text-field v-model="name" label="Username" color="#FFFFFF" hint="Come up with catchy username" dark></v-text-field>
            <v-text-field v-model="password" label="Password" color="#FFFFFF" dark type="password"></v-text-field>
            <v-btn type="submit">Register!</v-btn>    
        </v-form>
        <div v-else>
          <h2>{{email}}</h2>
          <div>{{successText}}</div>
          <div>You may now continue to <router-link to="/login">login page</router-link></div>
          </div>
        </v-parallax>
        </v-card>
      </v-container>
      
    </div>
</template>

<script>
import router from "../router"    
import axios from "axios"
import loginPicture from "@/assets/bateria.jpg"

  export default {
    name: "Login",
    data() {
      return {
        email: "",
        name: "",
        password: "",
        samba: loginPicture,
        showForm: true,
        successText: ""
      }
    },
    methods: {    
    register(e) {
      e.preventDefault()
      console.log(e)
        let data = {
          email: this.email,
          name: this.name,
          password: this.password,
          isAdmin: 0
        }
        console.log(data)
        axios.post("/api/register", data)
          .then((response) => {
            console.log(response)
            this.showForm = false
            this.successText = response.data
          })
          .catch((errors) => {
            console.log(errors)
            console.log("Cannot log in")
          })
    }    
    }    
  }
</script>