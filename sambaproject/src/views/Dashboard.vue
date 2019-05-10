<template>  
    <div>    
        <h2>Dashboard</h2>    
        <p>Name: {{ user }}</p>
        <button v-on:click="logout">Logout</button>
    </div>
</template>  
<script>  
    import axios from "axios"    
    import router from "../router"    
    export default {    
        name: "Login",    
        data() {    
            return {    
                user: {    
                    name: "Jesse"   
                }    
            }    
        },    
        methods: {
            logout() {
                axios.get("/api/logout")
                   .then((response) => {
                       console.log(response)
                       router.push("/")
                   })
            },
            getUserData: function() { 
                let self = this    
                axios.get("/api/user")    
                    .then((response) => {    
                        console.log(response)    
                        self.$set(this, "user", response.data.user)    
                    })    
                    .catch((errors) => {    
                        console.log(errors)    
                        router.push("/")    
                    })    
            }    
        },    
        mounted() {    
            this.getUserData()    
        }    
    }
</script>
