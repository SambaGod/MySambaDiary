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
    src=""
    gradient="0deg, rgba(100,115,201,.7), rgba(25,32,72,.7)"
    height="100%"
  >
    <v-layout
      class="fill-height"
      tag="v-list"
      column
    >
    
      <v-list-tile class="sidebarLink" avatar>
        <v-list-tile-title class="title">Menu</v-list-tile-title>
        <!--{{inputValue}}-->
      </v-list-tile>
      <v-divider/>
        
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

        <v-list-group
          no-action
          sub-group
          value="true"
          v-if="this.user.school"

        >
          <template v-slot:activator>
            <v-list-tile
              :active-class="'#21a018'"
              avatar
              class="v-list-item sidebarLink"
            >
            <v-list-tile-title>School</v-list-tile-title>
          </v-list-tile>
          </template>

          <v-list-tile
            v-for="(link, i) in schoolLinks"
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
        </v-list-group>

      </v-layout>
    </v-img>
    
    
</v-navigation-drawer>
</template>
<script>

import axios from "axios"

export default {
  name: "Sidebar",
  data() {
      return {
        image: "https://media.afar.com/uploads/images/afar_post_headers/images/hMgp5KhvDm/original_norway-northern-lights-lofoten-aurora.jpg?1543255337",
          logo: "",
          links: [
              {
                to: "/dashboard",
                text: "Dashboard",
                icon: 'view_module'
              },
              {
                to: "/events",
                text: "Browse events",
                icon: 'event'
              },
              {
                to: "/settings",
                text: "Settings",
                icon: 'settings'
              },
              
          ],
          schoolLinks: [
            {
              to: "/school/eventmanagement",
              text: "Manage events",
              icon: 'event'
            },
            {
              to: "",
              text: "Settings",
              icon: 'settings'
            },
            {
              to: "",
              text: "Statistics",
              icon: 'insert_chart_outlined'
            }
          ]
      }  
  },
  methods: {

  },
  computed: {
    user() {
      return this.$store.getters.user
    },
    inputValue() {
        console.log(this.$store.getters.sidebarOpen)
        return this.$store.getters.sidebarOpen
    }
  }

}
</script>

<style scoped>
.menu {
    background-color: teal !important;
}
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