<template>
  <div>
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex md4 xs12>
            <v-card color="primary">
              <v-card-text class="px-0"><NewUsers></NewUsers></v-card-text>
            </v-card>
          </v-flex>
          <v-flex md4 xs12>
            <v-card color="primary">
              <v-card-text class="px-0"><h2>Events</h2></v-card-text>
            </v-card>
          </v-flex>
          <v-flex md4 xs12>
            <v-card color="primary">
              <v-card-text class="px-0"><h2>Something statistics</h2></v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <div>    
          <h2>Admin</h2>    
          <p>Welcome, {{ user }}</p>
          <div><router-link to="/dashboard">Switch to user view</router-link></div>
          <div><router-link to="/admin/users">Manage users</router-link></div>
          <div><router-link to="/admin/schools">Manage schools</router-link></div>
        </div>
      </v-container>
    </v-content>
  </div>
</template>  
<script>
import NewUsers from "@/components/admin/NewUsers"
import axios from "axios"
import router from "../router"

export default {    
  name: "Login",    
  data() {    
    return {    
      user: {},
      responsive: false  
    }    
  },
  components: {
    NewUsers
  },
  methods: {
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
    },
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    },
    onClickBtn() {
      this.$store.commit('toggleSidebar', true)
      
    }
  },
  mounted () {
    this.getUserData() 
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
}
</script>
