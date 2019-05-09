<template>  
    <div>    
        <h2>Dashboard</h2>    
        <p>Name: {{ user.name }}</p>    
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
            getUserData: function() {    
                let self = this   
            }    
        },    
        mounted() {    
            this.getUserData()    
        }    
    }
</script>
