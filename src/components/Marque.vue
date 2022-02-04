<template>
  <h1 id="title-brand">{{ $route.params.name }}</h1>
  <GridView :sneakersbrand="sneakersToShow" v-for="(sneaker,index) in sneakersToShow" :key="index"/>
</template>

<script>
import GridView from "./Grid.vue";
import json from "../assets/script/data.json";

export default {
  name: "Marque",
  props: ["name"],
  components: {
    GridView,
  },
  data() {
    return {
      sneakersToShow: [],
      brand: this.$route.params.name,
      myjson: json,
    };
  },
  methods: {
    getBrand: function () {
      for (let index = 0; index < this.myjson.sneakers.length; index++) {
        if (this.myjson.sneakers[index].brand_name == this.brand) {
          console.log(this.myjson.sneakers[index]);
          this.sneakersToShow.push(this.myjson.sneakers[index]);
        }
      }
    },
  },
  created() {
    this.getBrand();
  },
};
</script>

<style>
#title-brand {
  font-size: 20px;
  margin-top: 200px;
}
</style>