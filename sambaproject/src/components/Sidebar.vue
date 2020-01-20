<template>
<v-navigation-drawer
  v-model="inputValue"
  id="app-drawer"
  class="menu accent-4"
  app
  absolute
  dark
  :permanent="$vuetify.breakpoint.mdAndUp"
  :temporary="$vuetify.breakpoint.smAndDown"
  width="300"
>
  <v-img
    :src="image"
    :gradient="sidebarOverlayGradiant"
    height="100%"
  >
    <v-layout
      class="fill-height"
      tag="v-list"
      column
    >
      <v-list-tile class="sidebarLink" avatar>
        <v-list-tile-title class="title">Admin section</v-list-tile-title>
        <!--{{inputValue}}-->
      </v-list-tile>
      <v-divider/>
        <v-list-tile v-if="responsive">
          <v-text-field
            class="purple-input search-input"
            label="Search..."
            color="purple"
          />
        </v-list-tile>
        <v-list-tile
          v-for="(link, i) in this.links"
          :key="i"
          :to="link.to"
          :active-class="'#21a018'"
          avatar
          class="v-list-item sidebarLink"
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title v-text="link.text"/>
        </v-list-tile>

      </v-layout>
    </v-img>
    
</v-navigation-drawer>
</template>
<script>

import axios from "axios"
import router from "../router"

export default {
  name: "Sidebar",
  data() {
      return {
          logo: "",
          links: [
              {
                to: "/admin",
                text: "Dashboard",
                icon: 'view_module'
              },
              {
                to: "/admin/schools",
                text: "Samba schools",
                icon: 'music_note'
              },
              {
                to: "/admin/users",
                text: "Users",
                icon: 'person'
              },
              {
                to: "/admin/events",
                text: "Events",
                icon: 'event'
              },
              
          ]
      }  
  },
  methods: {
    logout() {
      axios.get("/api/logout")
        .then((response) => {
          console.log(response)
          router.push("/")
        })
    }
  },
  computed: {
    inputValue() {
        console.log(this.$store.getters.sidebarOpen)
        return this.$store.getters.sidebarOpen
    }
  }

}
</script>

<style scoped>
.sidebarLink {
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 5px;
}
.lgout{
  margin-top: 100px;
  margin-left: -70px;
}

</style>