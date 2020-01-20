<template>
<div>
    <div>Users</div>
    <h2>{{data.newUsers}}</h2>
</div>
</template>
<script>
import axios from "axios"
export default {
    data() {
        return {
            data: {}
        }
    },
    methods: {
        getNewUsers: function() {
            let self = this    
            axios.get("/api/newUsers")    
              .then((response) => {    
                console.log(response)    
                self.$set(this, "data", response.data.newUsers)    
              })    
              .catch((errors) => {    
                console.log(errors) 
              })    
        },
    },
    mounted() {
        this.getNewUsers()
    }
}
</script>