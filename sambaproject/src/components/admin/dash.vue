<template>
   <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex md3 xs12>
            <v-card color="primary" height="100%">
              <v-card-text class="px-0">
                <NewUsers></NewUsers>
                <v-divider class="divider"></v-divider>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md3 xs12>
            <v-card color="primary" height="100%">
              <v-card-text class="px-0"><h2>Schools</h2></v-card-text>
            </v-card>
          </v-flex>
          <v-flex md3 xs12>
            <v-card color="primary" height="100%">
              <v-card-text class="px-0"><h2>Events</h2></v-card-text>
            </v-card>
          </v-flex>
          <v-flex md3 xs12>
            <v-card color="primary" height="100%">
              <v-card-text class="px-0"><h2>Something statistics</h2></v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <div>    
          
        </div>
    </v-container>
</template>
<script>
import NewUsers from "@/components/admin/NewUsers"
export default {
    components: {
        NewUsers
    },
    computed: {
        user() {
            return this.$store.getters.user
        }
    }
}
</script>
<style scoped>
.divider {
  margin: 10px;
}
</style>