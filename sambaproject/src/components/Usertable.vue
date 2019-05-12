<template>
  <div>
    <b-table hover :items="users"></b-table>
  </div>
</template>
<script>
import axios from "axios"

export default {
    name: "Usertable",
    data() {
        return {
            users: [],
            rowsPerPage: [5, 10, 15, 20]
        }
    },
    methods: {
        getUserData: function() {
            console.log("gettin the data")
            let self = this    
            axios.get("/api/users")    
              .then((response) => {    
                console.log(response)    
                self.$set(this, "users", response.data.users)    
              })    
              .catch((errors) => {    
                console.log(errors) 
              })    
        }    
    },
    mounted() {    
        this.getUserData()    
    }  
}
</script>