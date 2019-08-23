<template>
<div id="nav">
<nav class="headline">
  <v-toolbar app>
    <v-toolbar-side-icon class="grey--text" @click="drawer=!drawer"></v-toolbar-side-icon>
    <toolbar-title class="grey--text">
      <router-link to="./">
      <span class="font-weight-thin">My</span>
      <span><b>Samba<span class="red--text">Diary</span></b></span>&nbsp;
      </router-link>
    </toolbar-title>
    
     <!-- <router-link to="./">Home</router-link> |
      <router-link to="./login">Login</router-link> |
      <router-link to="./register">Register</router-link> -->

      <v-spacer></v-spacer>

    <v-btn depressed class="grey--text headline" to="./login">
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

#nav a {
  color: gray;
  text-decoration: none;
}

</style>

