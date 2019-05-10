<template>  
    <div>    
        <h2>Login</h2>    
        <form v-on:submit="login">    
            <input type="text" name="email" /><br>    
            <input type="password" name="password" /><br>    
            <input type="submit" value="Login" />    
        </form>    
    </div>
</template>

<script>
  import router from "../router"    
  import axios from "axios"    
  export default {
    name: "Login",
    mounted() {
      console.log(this.$store.getters.user)
    },
    methods: {    
    login: (e) => {
      e.preventDefault()
      let email = "user@email.com"
      let password = "password"   
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
            console.log("Cannot log in")
          })
      }    
      login()
    }    
    }    
  }
</script>