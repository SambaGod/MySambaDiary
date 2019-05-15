<template>
<div id="nav">
      <router-link to="./">Home</router-link> |
      <router-link to="./login">Login</router-link> |
      <router-link to="./register">Register</router-link>
</div>
</template>

<script>
export default {
    name: "navigation"
}
</script>


<style>

#nav {
  width: 1000px;
  margin: 0 auto;
  border: solid 2px black;
  font-size: 17pt;
  padding-left: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


</style>

