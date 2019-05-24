<template>
<div>
    <v-container>
        <v-card >
        <h2>Register a samba school</h2>
        <v-form @submit="login" ref="form">
            <v-text-field v-model="name" label="Name"></v-text-field>
            <v-text-field v-model="city" label="City"></v-text-field>
            <v-text-field v-model="country" label="Country" ></v-text-field>
            <v-btn type="submit">Add school!</v-btn>  
        </v-form>
        </v-card>
      </v-container>
</div>
</template>
<script>
export default {
    name: "SchoolRegistration",
    data() {
        return {
            email: "",
            name: "",
            city: "",
            country: "",
            password: ""
        }
    }
}
</script>