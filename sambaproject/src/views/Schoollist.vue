<template>
<v-container fluid grid-list-md>
    <h1>Schools</h1>
        <Schooltable></Schooltable>
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
          Add new school
          </v-btn>
        </template>

        <v-card>
          
          <v-toolbar color="teal" dark>
            <v-toolbar-title>Add new school</v-toolbar-title>

            <v-spacer></v-spacer>

          </v-toolbar>

          <v-card-text>
            <AddSchool></AddSchool>
          </v-card-text>

        </v-card>
      </v-dialog>
</v-container>
</template>
<script>
import AddSchool from "@/components/admin/AddSchool"
import Schooltable from "@/components/Schooltable"
export default {
    components: {
        AddSchool,
        Schooltable
    }
}
</script>