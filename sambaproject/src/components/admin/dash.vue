<template>
   <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex md4 xs12>
            <v-card color="primary">
              <v-card-text class="px-0">
                <NewUsers></NewUsers>
              </v-card-text>
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
</template>
<script>
export default {
    computed: {
        user() {
            return this.$store.getters.user
        }
    }
}
</script>