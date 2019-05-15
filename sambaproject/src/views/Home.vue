<template>
<div>
  <Header />
  <router-view></router-view>
    
</div>

</template>

<script>

import Header from "@/components/Header"

export default {

  name: "Home",
  components: {Header}

}


</script>

<style>
</style>