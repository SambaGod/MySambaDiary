<template>
  <div class="home">
    <h1>Login</h1>
    <input v-model="user" placeholder="You user!">
    <input v-model="password" placeholder="Secret!">
    <button @click="login()">Login!</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService.js'

export default {
  name: 'home',
  data() {
    return {
      user: "",
      password: ""
    }
  },
  methods: {
    login() {
      const response = AuthenticationService.register({
        u: this.user,
        pw: this.password
      })
      console.log(response)
    }
  }
}
</script>
