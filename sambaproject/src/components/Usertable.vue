<template>
  <div>
    <v-data-table
    :headers="headers"
    :items="users"
    class="elevation-1"
  >
    <template v-slot:items="props">
      <td>{{ props.item.id }}</td>
      <td>{{ props.item.email }}</td>
      <td>{{ props.item.name }}</td>
      <td>{{ props.item.isAdmin }}</td>
      <td>
        <v-btn v-if="!props.item.isAdmin" flat icon @click="changeAdmin(props.item.id, 1)"><v-icon>verified_user</v-icon></v-btn>
        <v-btn v-if="props.item.isAdmin" flat icon @click="changeAdmin(props.item.id, 0)"><v-icon>remove_circle</v-icon></v-btn>
        <v-btn flat icon @click="deleteUser(props.item.id)"><v-icon>delete</v-icon></v-btn>
      </td>
    </template>
  </v-data-table>
  <v-snackbar
      v-model="snackbar"
      :multi-line="'multi-line'"
      :right="'right'"
      :timeout="timeout"
      :top="'top'"
      :color="'pink'"
    >
      {{ snackbarText }}
      <v-btn
        color="white"
        flat icon
        @click="snackbar = false"
      >
        <v-icon>clear</v-icon>
      </v-btn>
    </v-snackbar>
  </div>
</template>
<script>
import axios from "axios"

export default {
    name: "Usertable",
    data() {
        return {
            headers: [
              {text: "id", value: "id"}, 
              {text: "Email", value: "email", sortable: true},
              {text: "Name", value: "name", sortable: true},
              {text: "Admin", value: "isAdmin", sortable: true},
              {text: "Actions", value: "actions"}
            ],
            users: [],
            timeout: 6000,
            snackbar: false,
            snackbarText: ""
        }
    },
    methods: {
        getUserData: function() {
            let self = this    
            axios.get("/api/users")    
              .then((response) => {    
                console.log(response)    
                self.$set(this, "users", response.data.users)    
              })    
              .catch((errors) => {    
                console.log(errors) 
              })    
        },
        changeAdmin(i, value) {
          let login = () => {
            let data = {
              id: i,
              value: value
            }

            axios.post("/api/changeAdmin", data)
              .then((response) => {
                console.log(response)
                this.snackbar = true
                this.snackbarText = response.data
                this.getUserData()
              })
              .catch((errors) => {
                console.log(errors)
              })

          }
          login()
        },
        deleteUser(i) {
          let login = () => {
            let data = {
              id: i
            }

            axios.post("/api/deleteUser", data)
              .then((response) => {
                this.snackbar = true
                this.snackbarText = response.data
                console.log(response)
                this.getUserData()
              })
              .catch((errors) => {
                console.log(errors)
              })

          }
          login()
        } 
    },
    mounted() {    
        this.getUserData()    
    }  
}
</script>