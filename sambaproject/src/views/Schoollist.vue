<template>
<v-container fluid>
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