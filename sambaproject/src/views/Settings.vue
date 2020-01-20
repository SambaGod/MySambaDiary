<template>
<div>
    <v-container>
        <h2>Update user information</h2>
        <v-form @submit="updateUser" ref="form">
            <v-text-field v-model="name" label="Update name"></v-text-field>
            <v-text-field v-model="email" label="Update email"></v-text-field>
            <v-text-field v-model="password" label="Update password" type="password"></v-text-field>
            <v-btn type="submit">Update!</v-btn>  
        </v-form>
    </v-container>
</div>
</template>
<script> 
import axios from "axios"

export default {
    name: "UserSettings",
    data() {
        return {
            email: "",
            name: "",
            password: "",
            id: 0
        }
    },
    mounted() {
      this.getUserData()
    },
    methods: {
      getUserData: function() {
      let self = this    
      axios.get("/api/user")    
        .then((response) => {
          console.log(response)
          self.$set(this, "name", response.data.user.name)
          self.$set(this, "email", response.data.user.email)
          self.$set(this, "id", response.data.user.id)
        })    
        .catch((errors) => {    
          console.log(errors)    
          router.push("/")    
        })    
    },
      updateUser(e) {
        e.preventDefault()
        console.log(e)
        let name = e.target[0].value
        let email = e.target[1].value
        let password = e.target[2].value
        let id = this.id
      let login = () => {
        let data = {
          id: id,
          email: email,
          name: name,
          password: password
        }
        console.log(data)
        axios.post("/api/updateUser", data)
          .then((response) => {
            console.log(response)
          })
          .catch((errors) => {
            console.log(errors)
          })
      }    
      login()
    }    
  },
  computed: {
    countries() {
      var countries = this.$store.getters.countries
      var countryArray = []
      for (var country in countries) {
        var countryObject = {code: countries[country], name: country}
        countryArray.push(countryObject)
      }
      return countryArray
    }
  }
}
</script>