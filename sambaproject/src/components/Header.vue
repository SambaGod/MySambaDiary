<template>
<div id="head">
<div id="nav">
      <router-link to="./">Home</router-link> |
      <router-link to="./login">Login</router-link> |
      <router-link to="./register">Register</router-link>
</div>
</div>
</template>

<script>
export default {
    name: "navigation"
}
</script>


<style>

#head {
  height:45px;
  border: 2px solid black;
  border-bottom:5px solid #ed1d25;
  background: #111;
}

#nav {
  width: 1000px;
  margin: 0 auto;
  border: solid 2px black;
  font-size: 17pt;
  padding-left: 20px;
  background: #fff;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ed1d25;
}


</style>

