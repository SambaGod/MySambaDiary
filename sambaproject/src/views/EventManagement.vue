<template>
<v-container fluid>
    <h2>Event management</h2>
    <v-card class="loginForm">
        <v-form @submit="registerEvent" ref="form">
            <v-text-field v-model="name" label="Event name" hint="How is your event called?"></v-text-field>
            <v-autocomplete
              :items="countries"
              label="Select country"
              v-model="country"
              attach
              item-text="name"
              item-value="code"
              return-object
            ></v-autocomplete>
            <v-text-field v-model="city" label="Event city" hint="In which city is the event held?"></v-text-field>
            <v-layout row wrap>
            <v-flex sm6>
            <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
            >
                <template v-slot:activator="{ on }">
                    <v-text-field
                        v-model="startdate"
                        label="Start date"
                        prepend-icon="event"
                        readonly
                        v-on="on"
                    ></v-text-field>
                </template>
                <v-date-picker v-model="startdate" @input="menu2 = false"></v-date-picker>
            </v-menu>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex sm6>
            <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
            >
                <template v-slot:activator="{ on }">
                    <v-text-field
                        v-model="enddate"
                        label="End date"
                        prepend-icon="event"
                        readonly
                        v-on="on"
                    ></v-text-field>
                </template>
                <v-date-picker v-model="enddate"></v-date-picker>
            </v-menu>
            </v-flex>
            </v-layout>
            <v-text-field v-model="fee" label="Event fee" hint="How much is the participation fee for the event?"></v-text-field>
            <v-btn type="submit">Register!</v-btn>    
        </v-form>
    </v-card>
</v-container>
</template>
<script>
import axios from "axios"
export default {
    name: "EventManagement",
    data() {
        return {
            name: "",
            city: "",
            country: "",
            fee: 0,
            deadline: "",
            enddate: "",
            startdate: ""
        }
    },
    mounted() {
        //this.getEvents()
    },
    methods: {
        registerEvent(e) {
        e.preventDefault()
        let data = {
          name: this.name,
          country: this.country.code,
          city: this.city,
          startdate: this.startdate,
          enddate: this.enddate,
          fee: this.fee,
          school: this.$store.getters.user.school
        }
        console.log(data)
        axios.post("/api/addEvent", data)
          .then((response) => {
            console.log(response)
          })
          .catch((errors) => {
            console.log(errors)
          })
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