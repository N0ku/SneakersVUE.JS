<template>
  <Home />
</template>

<script>
import Home from "./components/Home.vue";


export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style>
* {
  color: #ecebda;
  padding: 0;
  margin: 0;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

body {
  margin: 0;
  padding: 0;
  background-color: #323244;
  height: 100vh;
}
</style>