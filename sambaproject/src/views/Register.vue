<template>  
    <div>
      <b-container>
        <h2>Register</h2>    
        <form v-on:submit="login">    
            <input v-model="email" type="text" name="email" /><br>    
            <input v-model="password" type="password" name="password" /><br>    
            <input type="submit" value="Login" />    
        </form>
      </b-container>
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