<template>
<div id="homeBod">
  <Header />
  <div id="wrap">
    <div id="sec1">&nbsp;</div>
    <div id="sec2">
      <div class="sec2l">Left</div>
      <div class="sec2r">Right</div>
    </div>
    <div id="sec3">&nbsp;</div>
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
  background-size: 150%;
}
#wrap {

  width:900px;
  border: 2px solid black;
  margin: 0 auto;
  margin-top: 100px;

}

#sec1{
  height:200px;
  border:2px solid aqua;
  background: #fff;
}

#sec2{
  display: grid;
  grid-template-columns: 500px 400px;
  height: 500px;
  color: red;
  font-size: 72pt;
}

.sec2l{
  border:2px solid green;
  background:#fff;
}

.sec2r{
  border:2px solid greenyellow;
  background:rgba(0,0,0,0.3);
}

#sec3{
  height:200px;
  border:2px solid purple;
  display: block;
  background: #fff;
}

footer {
  margin-top: 100px;
  height: 200px;
  border: 2px solid black;
  background: #111;
}
</style>