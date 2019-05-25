<template>
<div>
    <v-content>
      <v-container>
        <h2>Userlist</h2>
        <Usertable></Usertable>
        <AddUser></AddUser>
      </v-container>
    </v-content>
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
    }
}
</script>