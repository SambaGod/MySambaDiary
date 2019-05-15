<template>
<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
</div>
</template>

<script>
export default {
    name: "navigation"
}
</script>


<style scoped>

#nav {
    width: 1000px;
    margin: 0 auto;
    border: solid 2px black;
}


</style>

