<template>
<v-card>
    <v-card-title><h2>{{event.name}}</h2></v-card-title>
        <v-card-text>
            <country-flag :country="event.country"/>
            <div>{{ event.startdate + " - " + event.enddate}}</div>
        </v-card-text>
        <v-divider />
    <v-card-actions>
        <v-btn v-if="!attended" flat icon @click="attendToEvent()"><v-icon>add</v-icon></v-btn>
        <v-btn v-else flat icon @click="unattendToEvent()"><v-icon>remove</v-icon></v-btn>
    </v-card-actions>
</v-card>
</template>
<script>
import axios from "axios"
import CountryFlag from 'vue-country-flag'

export default {
    props: {
        event: Object
    },
    name: "Event",
    components: {
        CountryFlag
    },
    computed: {
        user() {
            return this.$store.getters.user
        },
        attended() {
            var itIs = false
            var tmp = this.$store.getters.selectedEvents
            for (var i = 0; i < tmp.length; i++) {
                if (this.event.id == tmp[i].eventid) {
                    itIs = true
                    break
                }
            }
            return itIs
        }
    },
    mounted() {
        console.log("aaa")
    },
    methods: {
        attendToEvent() {
            var data = {
                userId: this.user.id,
                eventId: this.event.id
            }
            axios.post("/api/attend", data).then((response) => {
                console.log(response)
                
            })
            .catch((errors) => {
                console.log(errors)
            })
        },
        unattendToEvent() {
            var data = {
                userId: this.user.id,
                eventId: this.event.id
            }
            axios.post("/api/unattend", data).then((response) => {
                console.log(response)
            })
            .catch((errors) => {
                console.log(errors)
            })
        }
    }
}
</script>