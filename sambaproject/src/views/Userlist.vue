<template>
<div class="text-xs-center">
      <v-container>
        <h2>Userlist</h2>
        <Usertable></Usertable>
        <v-dialog
          v-model="dialog"
          width="500"
        >
        <template v-slot:activator="{ on }">
          <v-btn
            color="red lighten-2"
            dark
            v-on="on"
          >
          Add new user
          </v-btn>
        </template>

        <v-card>
          
          <v-toolbar color="teal" dark>
            <v-toolbar-title>Add new user</v-toolbar-title>

            <v-spacer></v-spacer>

          </v-toolbar>

          <v-card-text>
            <AddUser></AddUser>
          </v-card-text>

        </v-card>
      </v-dialog>
        
    </v-container>
</div>
</template>
<script>
import Sidebar from "@/components/Sidebar"
import Usertable from "@/components/Usertable"
import AddUser from "@/components/admin/AddUser"

export default {
    name: "userlist",
    components: {
        Sidebar,
        Usertable,
        AddUser
    },
    data() {
      return {
        dialog: false
      }
    }
}
</script>