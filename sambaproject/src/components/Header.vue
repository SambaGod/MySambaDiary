<template>
<div id="nav">
<nav class="headline">
  <v-toolbar app>
    <v-toolbar-side-icon class="grey--text" @click="drawer=!drawer"></v-toolbar-side-icon>
    <toolbar-title class="grey--text">
      <span class="font-weight-thin">My</span>
      <span><b>SambaDiary</b></span>&nbsp;
    </toolbar-title>
    
     <router-link to="./">Home</router-link> |
      <router-link to="./login">Login</router-link> |
      <router-link to="./register">Register</router-link>

      <v-spacer></v-spacer>

    <v-btn depressed class="grey--text headline">
    <span>LOGIN</span>
    <v-icon right>power_settings_new</v-icon>
    </v-btn>

    
  </v-toolbar>

  <v-navigation-drawer app v-model="drawer" class="grey">
   <p>Hurray! You found me :D</p>
  </v-navigation-drawer>

  </nav>
</div>
</template>

<script>
export default {
    name: "navigation",

    data(){
      return{
      drawer:false
      }
    }
}
</script>


<style>

#nav {
  margin: 0 auto;
  border: solid 2px black;
  
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ed1d25;
}


</style>

