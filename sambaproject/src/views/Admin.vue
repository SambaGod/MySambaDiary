<template>
  <div>
    <SideBar></SideBar>
    <v-content>
      <v-toolbar>
        <v-btn v-if="mobileView" @click="openSideBar()" flat icon><v-icon>menu</v-icon></v-btn>
        <v-toolbar-title>
          <router-link to="/dashboard">MySambaDIary</router-link>
          <!--<v-spacer></v-spacer>-->
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <h2>{{ user.name }}</h2>
        <v-btn flat @click="logout()">Logout</v-btn>
        
      </v-toolbar>
      
      <router-view></router-view>
    </v-content>
  </div>
</template>  
<script>
import axios from "axios"
import router from "../router"
import SideBar from "@/components/Sidebar"

export default {    
  name: "Login",    
  data() {    
    return {    
      user: {},
      responsive: false  
    }    
  },
  components: {
    SideBar
  },
  computed: {
    mobileView() {
      console.log(this.$vuetify.breakpoint.name)
      if (this.$vuetify.breakpoint.name == "sm" || this.$vuetify.breakpoint.name == "xs") {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    openSideBar() {
      this.$store.commit('openSidebar', open)
    },
    logout() {
      axios.get("/api/logout")
        .then((response) => {
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
