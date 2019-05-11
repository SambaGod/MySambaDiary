<template>  
    <div>
      <v-container>
        <h2>Login</h2>
        <b-card class="loginForm">
        <b-form @submit="login">
            <b-form-group label="Email" label-for="loginEmail">
              <b-form-input v-model="email" id="loginEmail" placeholder="Email" type="text" name="email" /></b-form-input>
            </b-form-group>
            <b-form-group label="Password" label-for="loginPwd">
              <b-form-input v-model="password" id="loginPwd" placeholder="Password" type="password" name="password" /></b-form-input>  
            </b-form-group>
            <b-button type="submit">Log in!</b-button>    
        </b-form>
        </b-card>
      </v-container>
    </div>
</template>

<script>
  import router from "../router"    
  import axios from "axios"    
  export default {
    name: "Login",
    data() {
      return {
        email: "",
        password: ""
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
                router.push('/dashboard') 
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

.loginform {
  width: 200px;
}
</style>