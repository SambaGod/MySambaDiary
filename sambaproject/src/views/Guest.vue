<template>
  <div>
  <Header />
  <router-view></router-view>
  </div>
</template>
<script>
import Header from "@/components/Header"

export default {
    name: "Guest",
    components: {
        Header
    }
}
</script>