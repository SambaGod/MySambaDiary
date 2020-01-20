<template>
<div>
        <h2>Register a samba school</h2>
        <v-form @submit="addSchool" ref="form">
            <v-text-field v-model="name" label="Name"></v-text-field>
            <v-text-field v-model="email" label="Email"></v-text-field>
            <v-text-field v-model="city" label="City"></v-text-field>
            <v-autocomplete
              :items="countries"
              label="Select country"
              v-model="country"
              attach
              item-text="name"
              item-value="code"
              return-object
            ></v-autocomplete>
            <v-btn type="submit">Add school!</v-btn>  
        </v-form>
</div>
</template>
<script> 
import axios from "axios"

export default {
    name: "SchoolRegistration",
    data() {
        return {
            email: "",
            name: "",
            city: "",
            country: "",
            password: ""
        }
    },
    methods: {
      addSchool(e) {
        e.preventDefault()
        console.log(e)
        let name = e.target[0].value
        let email = e.target[1].value
        let city = e.target[2].value
        let data = {
          email: email,
          name: name,
          city: city,
          country: this.country.code
        }
        console.log(data)
        axios.post("/api/addschool", data)
          .then((response) => {
            console.log(response)
          })
          .catch((errors) => {
            console.log(errors)
            console.log("Cannot log in")
          })
    }    
  },
  computed: {
    countries() {
      var countries = this.$store.getters.countries
      var countryArray = []
      for (var country in countries) {
        var countryObject = {code: country, name: countries[country]}
        countryArray.push(countryObject)
      }
      return countryArray
    }
  }
}
</script>