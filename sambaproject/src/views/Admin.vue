<template>
  <div>
    <Sidebar/>
    <v-content>
      <v-btn
          v-if="responsive"
          class="default v-btn--simple"
          dark
          icon
          @click.stop="onClickBtn"
        >
          <v-icon>mdi-view-list</v-icon>
        </v-btn>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex md4 xs12>
            <v-card color="primary">
              <v-card-text class="px-0"><h2>New registered users</h2></v-card-text>
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
      user: {},
      responsive: false  
    }    
  },
  components: {
    Sidebar
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
      console.log(this.$store.getters.adminSidebarOpen)
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
