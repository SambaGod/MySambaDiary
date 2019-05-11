<template>  
    <div>
      <v-container>
        <v-card class="loginForm">
        <v-parallax :src="samba">
        <h2>Register</h2>
        <v-form @submit="login" ref="form">
            <v-text-field v-model="email" label="Email" color="#FFFFFF" dark></v-text-field>
            <v-text-field v-model="name" label="Name" color="#FFFFFF" dark></v-text-field>
            <v-text-field v-model="password" label="Password" color="#FFFFFF" dark type="password"></v-text-field>
            <v-btn type="submit">Register!</v-btn>    
        </v-form>
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
        samba: loginPicture
      }
    },
    methods: {    
    login: (e) => {
      e.preventDefault()
      console.log(e)
      let email = e.target[0].value
      let username = e.target[1].value
      let password = e.target[2].value
      let login = () => {
        let data = {
          email: email,
          name: username,
          password: password
        }
        console.log(data)
        axios.post("/api/register", data)
          .then((response) => {
            console.log(response)
          })
          .catch((errors) => {
            console.log(errors)
            console.log("Cannot log in")
          })
      }    
      login()
    }    
    }    
  }
</script>