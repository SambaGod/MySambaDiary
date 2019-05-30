<template>
<v-container fluid>
    <h1>Schools</h1>
    <Schooltable></Schooltable>
    <AddSchool></AddSchool>
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