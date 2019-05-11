<template>  
    <div>
      <v-container>
        <v-card class="loginForm">
        <v-parallax :src="samba">
        <h2>Login</h2>
        <v-form @submit="login" ref="form">
            <v-text-field v-model="email" label="Email" color="#FFFFFF" dark></v-text-field>
            <v-text-field v-model="password" label="Password" color="#FFFFFF" dark type="password"></v-text-field>
            <v-btn type="submit">Log in!</v-btn>    
            <div class="notRegistered">Don't have account? <router-link to="/register">Create it here!</router-link></div>
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
        password: "",
        samba: loginPicture
      }
    },
    methods: {    
    login: (e) => {
      e.preventDefault()
      let email = e.target[0].value
      let password = e.target[1].value
      let login = () => {
        let data = {
          email: email,
          password: password
        }
        axios.post("/api/login", data)
          .then((response) => {
            console.log(response)
            axios.get("/api/user")
              .then((response) => {
                console.log(response)
                if (response.data.user.isAdmin) {
                  router.push('/admin') 
                } else {
                  router.push('/dashboard')
                }
                
              })
              .catch((errors) => {
                console.log(errors)
                router.push("/")
              })
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
<style>
label {
  display: inline-block;
  text-align: left;
}

#imgbckr {
  background-color: black;
}

#kkk {
  opacity: 0.4;
}

.notRegistered {
  text-align: right;
}
</style>