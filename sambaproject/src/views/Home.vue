<template>
<div id="homeBod">
  <Header />
  <div id="lwrap">
  <router-view></router-view>
  </div>
 
<footer></footer>
</div>

</template>

<script>

import Header from "@/components/Header";

export default {

  name: "Home",
  components: {Header}

}


</script>

<style>

#homeBod{
  background:url("../assets/hBack.jpeg") no-repeat center;
  background-size: 110%;
}
#lwrap {

  width:1000px;
  border: 2px solid black;
  margin: 0 auto;
  margin-top: 100px;

}

footer {
  margin-top: 300px;
  height: 50px;
  border: 2px solid black;
  background: #111;
}
</style>