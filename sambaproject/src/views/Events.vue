<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex  v-for="event in events" v-bind:key="event.id" sm4>
                <v-card>
                    <v-card-title><h2>{{event.name}}</h2></v-card-title>
                    <v-card-text>
                        <country-flag :country="event.country"/>
                        <div>{{ event.startdate + " - " + event.enddate}}</div>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import axios from "axios"
import CountryFlag from 'vue-country-flag'
export default {
    data() {
        return {
            events: [],
            headers: [
                {text: "id", value: "id"}, 
                {text: "Country", value: "country"},
                {text: "Name", value: "name", sortable: true},
                {text: "Fee", value: "fee", sortable: true},
            ]
        }
    },
    mounted() {
        this.getEvents()
    },
    methods: {
        getEvents() {
            axios.get("/api/events") 
            .then((response) => {
                this.events = response.data.events
                console.log(response.data.events)
            })
            .catch((errors) => {
                console.log(errors)
                router.push("/")
            })
        },
    },
    components: {
        CountryFlag
    }
}
</script>