<template>
  <h1 id="title-brand">{{ $route.params.name }}</h1>
 <!--  <div v-for="(sneaker,index) in data.sneakers" :key"index">
  <div v-if="data.sneakers[index].brand_name == $route.params.name">
    <grid></grid>
  </div>
  </div> -->
</template>

<script>
import Grid from "./Grid.vue";

const req = new XMLHttpRequest();
req.open(
  "GET",
  "https://raw.githubusercontent.com/Stupidism/goat-sneakers/master/api.json",
  false
);
req.send(null);
if (req.status == 200) {
  var data = JSON.parse(req.responseText);
} else {
  console.log("MEEEEEEH", req.status);
}

export default {
  name: "Marque",
  props: ["name"],
  components: {
    Grid,
  },
  data() {
    return {};
  }
};

</script>

<style>
#title-brand {
  font-size: 200px;
  margin-top: 200px;
}
</style>