<template>
<div>
    <Sidebar></Sidebar>
    <v-content>
      <v-container>
        <h2>Userlist</h2>
        <Usertable></Usertable>
      </v-container>
    </v-content>
</div>
</template>
<script>
import Sidebar from "@/components/Sidebar"
import Usertable from "@/components/Usertable"
export default {
    name: "userlist",
    components: {
        Sidebar,
        Usertable
    }
}
</script>