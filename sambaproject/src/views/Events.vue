<template>
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
    </template>
  </v-data-table>
    </v-card>
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