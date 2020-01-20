<template>
    <v-container fluid grid-list-md>
        <v-text-field
            v-model="searchText"
            clearable
            label="Solo"
            placeholder="Search events"
            solo
            @input="handleTextInput()"
        ></v-text-field>
        <small>Type 3 characters to use text search</small>
        <div v-if="loading">
            <v-progress-circular
                indeterminate
                color="teal"
            ></v-progress-circular>
        </div>
        <div v-else>
        <v-layout row wrap>
            <v-flex  v-for="event in events" v-bind:key="event.id" sm4>
                <Event :event="event"></Event>
            </v-flex>
        </v-layout>
        </div>
    </v-container>
</template>
<script>
import axios from "axios"
import Event from "@/components/user/events/Event.vue"

export default {
    components: {
        Event
    },
    data() {
        return {
            events: [],
            loading: true,
            searchText: ""
        }
    },
    mounted() {
        this.getEvents()
    },
    methods: {
        getEvents() {

            axios.get("/api/events", {
                params: {
                    textSearch: this.searchText
                } 
            })
            .then((response) => {
                this.events = response.data.events
                this.loading = false
                console.log(response.data.events)
            })
            .catch((errors) => {
                console.log(errors)
                router.push("/")
            })
        },
        handleTextInput() {
            if (this.searchText.length > 2) {
                console.log("searching")
                this.getEvents()
            } else {
                this.events = []
            }
        }
    }
}
</script>