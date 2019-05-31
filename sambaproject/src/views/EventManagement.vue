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
    <v-card>
    <v-data-table
    :headers="headers"
    :items="events"
    class="elevation-1"
  >
    <template v-slot:items="props">
      <td>{{ props.item.id }}</td>
      <td><country-flag :country="props.item.country"/></td>
      <td>{{ props.item.name }}</td>
      <td>{{ props.item.fee }} €</td>
      <td>
        <v-btn v-on:click="publishEvent(props.item.id)" flat icon><v-icon>publish</v-icon></v-btn>
      </td>
    </template>
  </v-data-table>
    </v-card>
</v-container>
</template>
<script>
import axios from "axios"
import CountryFlag from 'vue-country-flag'

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
            startdate: "",
            events: [],
            headers: [
              {text: "id", value: "id"}, 
              {text: "Country", value: "country"},
              {text: "Name", value: "name", sortable: true},
              {text: "Fee", value: "fee", sortable: true},
              {text: "Actions", value: "actions", sortable: false}
            ],
            user: {}
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData() {
            axios.get("/api/user")
              .then((response) => {
                this.user = response.data.user
                this.getEvents()
              })    
              .catch((errors) => {
                console.log(errors)
                router.push("/")
              })
        },
        registerEvent(e) {
        e.preventDefault()
        let data = {
          name: this.name,
          country: this.country.code,
          city: this.city,
          startdate: this.startdate,
          enddate: this.enddate,
          fee: this.fee,
          school: this.user.id
        }
        console.log(data)
        axios.post("/api/addEvent", data)
          .then((response) => {
            console.log(response)
          })
          .catch((errors) => {
            console.log(errors)
          })
        },
        getEvents() {
            console.log(this.user)
            axios.get("/api/eventsBySchool", {
                params: {
                    id: this.user.school
                }
            }) 
            .then((response) => {
                console.log(this.user.school)
                this.events = response.data.events
                console.log(response.data.events)
            })
            .catch((errors) => {
                console.log(errors)
                router.push("/")
            })
        },
        publishEvent(eventId) {
            let data = {
               event: eventId
            }
            console.log(data)
            axios.post("/api/publishEvent", data)
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
        var countryObject = {name: countries[country], code: country}
        countryArray.push(countryObject)
      }
      return countryArray
    }
  },
  components: {
      CountryFlag
  }
}
</script>