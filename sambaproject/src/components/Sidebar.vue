<template>
<v-navigation-drawer
  id="app-drawer"
  v-model="inputValue"
  app
  dark
  mobile-break-point="991"
  width="260"
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
      <v-list-tile avatar>
      <v-list-tile-avatar
        color="white"
      >
        <v-img
          :src="logo"
          height="34"
          contain
        />
      </v-list-tile-avatar>
      <v-list-tile-title class="title">Admin</v-list-tile-title>
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
          class="v-list-item"
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
export default {
  name: "Sidebar",
  data() {
      return {
          links: [
              {
                to: "/admin",
                text: "Dashboard"
              },
              {
                to: "/admin/schools",
                text: "Samba schools"
              },
              {
                to: "/admin/users",
                text: "Users"
              },
              {
                to: "/admin/events",
                text: "Events"
              }
          ]
      }
  }
}
</script>