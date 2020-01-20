<template>
  <div>
    <SideBar></SideBar>
    
    <v-content>
      <v-toolbar app>
        <v-btn v-if="$vuetify.breakpoint.smAndDown" @click="openSideBar()" flat icon><v-icon>menu</v-icon></v-btn>
        <v-toolbar-title>
          <router-link to="/dashboard">MySambaDIary</router-link>
          <!--<v-spacer></v-spacer>-->
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat @click="openProfileMenu()">
          <v-icon>person</v-icon>
          {{ user.name }}
        </v-btn>
        <v-btn v-if="$vuetify.breakpoint.smAndUp" flat @click="logout()">Logout</v-btn>
        
      </v-toolbar>
      
      <router-view></router-view>
    </v-content>
  </div>
</template>  
<script>
import axios from "axios"
import router from "../router"
import SideBar from "@/components/user/UserSideBar"

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
  user() {
    return this.$store.getters.user
  },
  mounted () {
    this.getUserData()
    
  },
  methods: {
    openProfileMenu() {
      console.log("open")
    },
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
          this.$store.commit('welcomeUser', response.data.user)
          this.getAttends(response.data.user.id)
        })    
        .catch((errors) => {    
          console.log(errors)    
          router.push("/")    
        })    
    },
    getAttends() {
      console.log(this.user)
      axios.get("/api/attends", {
        params: {
          userId: this.user.id
        }
      }
      ).then(response => {
        console.log(response)
        this.$store.commit('attendEvent', response.data)
      })
    },
    onClickBtn() {
      this.$store.commit('toggleSidebar', true)
    }
  },
}
</script>
