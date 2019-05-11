<template>
  <div>
    <Sidebar></Sidebar>
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex md4 xs12>
            <v-card color="primary">
              <v-card-text class="px-0">12</v-card-text>
                </v-card>
              </v-flex>
          <v-flex md4 xs12>
            <v-card dark color="primary">
              <v-card-text class="px-0">12</v-card-text>
            </v-card>
          </v-flex>
          <v-flex md4 xs12>
            <v-card dark color="primary">
              <v-card-text class="px-0">12</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <div>    
          <h2>Admin</h2>    
          <p>Welcome, {{ user }}</p>
          <b-button v-on:click="logout">Logout</b-button>
          <div>Add school leader</div>
          <div>Remove users</div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </v-container>
    </v-content>
  </div>
</template>  
<script>  
import axios from "axios"
import router from "../router"
import Sidebar from "@/components/Sidebar"

    export default {    
        name: "Login",    
        data() {    
            return {    
                user: {    
                    name: "Defadmin"   
                }    
            }    
        },
        components: {
            Sidebar
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
