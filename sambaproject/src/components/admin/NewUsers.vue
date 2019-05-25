<template>
<div>
    <h2>New registered users</h2>
    <div>{{data.newUsers}}</div>
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