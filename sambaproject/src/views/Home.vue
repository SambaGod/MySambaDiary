<template>
<div id="homeBod">
  <Header />
  <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height="600">
  <v-layout
      align-center
      column
      justify-center
    >
      <h1 class="display-2 font-weight-thin mb-3"><b>MySambaDiary</b></h1>
      <h4 class="subheading">Test Home Page</h4>
    </v-layout>
  </v-parallax>
 
<Footer />

</div>

</template>

<script>

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {

  name: "Home",
  components: {Header, Footer}

}


</script>

<style>

</style>