<template>  
    <div>
      <h2>Register a new user</h2>
      <v-card >
        <v-form @submit="addUser" ref="form">
            <v-text-field v-model="name" label="Name"></v-text-field>
            <v-text-field v-model="email" label="Email"></v-text-field>
            <v-text-field v-model="password" label="Password"></v-text-field>
            <v-checkbox
               v-model="checkbox"
               :label="'Give admin rights'"
            ></v-checkbox>
            <v-btn type="submit">Register a new user!</v-btn>  
        </v-form>
      </v-card>
    </div>
</template>
<script> 
import axios from "axios"

  export default {
    name: "Login",
    data() {
      return {
        email: "",
        name: "",
        password: "",
        checkbox: false
      }
    },
    methods: {    
    addUser: (e) => {
      e.preventDefault()
      console.log(e)
      let email = e.target[0].value
      let username = e.target[1].value
      let password = e.target[2].value
      let isAdmin = e.target[3].checked
      let login = () => {
        let data = {
          email: email,
          name: username,
          password: password,
          isAdmin: isAdmin
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