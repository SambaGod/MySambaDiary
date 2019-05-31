<template>
<v-container fluid grid-list-md>
    <h1>Schools</h1>
    <v-layout row wrap>
        <v-flex><Schooltable></Schooltable></v-flex>
        <v-flex><AddSchool></AddSchool></v-flex>
    </v-layout>
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