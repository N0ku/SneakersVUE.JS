<template>
  <Header />

  <router-view />
  <Footer />
</template>

<script>
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import GridView from "./components/Grid.vue";



export default {
  name: "App",
  components: {
    Header,
    Footer,
    GridView,
  },
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
  background-color: #1f1f1f;
  height: 100vh;
}


</style>