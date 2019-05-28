<template>
<div>
    <v-card>
        <div>{{school}}</div>
    </v-card>
</div>
</template>
<script>
import axios from "axios"
export default {
    props: {
        schoolId: Number
    },
    data() {
        return {
            id: this.schoolId,
            school: {}
        }
    },
    name: "School",
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
                
              })
              .catch((errors) => {
                console.log(errors)
                router.push("/")
              })
        }
    },
    mounted() {
        this.getSchoolData()
    }
}
</script>