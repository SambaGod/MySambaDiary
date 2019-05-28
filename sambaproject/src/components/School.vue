<template>
<div>
    <v-card>
        <div>Your samba school</div>
        <h2>{{school.name}}</h2>
        <h4>{{school.country}}</h4>
        <country-flag :country="countrycode"/>
        <v-btn>Manage events</v-btn>
        <v-btn>Update information</v-btn>
        <v-btn>Write an article</v-btn>
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
            countrycode: ""
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
        }
    },
    mounted() {
        this.getSchoolData()
        console.log(this.$store.getters.countries)
    }
}
</script>