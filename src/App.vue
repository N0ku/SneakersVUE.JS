<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import json from "../src/assets/script/data.json";

/* const req = new XMLHttpRequest();

req.open(
  "GET",
  "https://raw.githubusercontent.com/Stupidism/goat-sneakers/master/api.json",
  false
);
req.send(null);
if (req.status == 200) {
  data = JSON.parse(req.responseText);
} else {
  console.log("MEEEEEEH", req.status);
} */

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      myJson: json,
    };
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