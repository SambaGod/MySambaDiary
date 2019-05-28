<template>
<div>
    <v-card color="#d3d3d3">
        <v-card-actions>
            <h2>{{school.name}}</h2>
            <v-spacer></v-spacer>
            <v-btn v-if="visible" flat icon right @click="toggleSchoolVisible(false)"><v-icon>close</v-icon></v-btn>
            <v-btn v-else flat icon right @click="toggleSchoolVisible(true)"><v-icon>expand_more</v-icon></v-btn>
        </v-card-actions>
        <v-card-title v-if="visible">
        <h4>{{school.country}}</h4>
        <country-flag :country="countrycode"/>
        </v-card-title>
        <v-card-actions v-if="visible">
            <v-btn>Manage events</v-btn>
            <v-btn>Update information</v-btn>
            <v-btn>Write an article</v-btn>
            <v-btn>See statistics</v-btn>
        </v-card-actions>
    </v-card>
</div>
</template>
<script>
import axios from "axios"
import CountryFlag from 'vue-country-flag'

export default {
    props: {
        schoolId: Number
    },
    data() {
        return {
            id: this.schoolId,
            school: {},
            countrycode: "",
            visible: true
        }
    },
    name: "School",
    components: {
        CountryFlag
    },
    methods: {
        getSchoolData() {
            console.log(this.schoolId)
            console.log("here!")
            axios.get("/api/school", {
               params: {
                id: this.schoolId
               }
            })
              .then((response) => {
                console.log(response)
                this.school = response.data.school
                this.getCountry(response.data.school.country)
                
              })
              .catch((errors) => {
                console.log(errors)
                router.push("/")
              })
        },
        getCountry(name) {
            this.countrycode = this.$store.getters.countries[name]
        },
        toggleSchoolVisible(value) {
            this.visible = value
        }
    },
    mounted() {
        this.getSchoolData()
        console.log(this.$store.getters.countries)
    }
}
</script>