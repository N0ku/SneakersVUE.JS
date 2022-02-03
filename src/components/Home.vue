<template>
  <Header />
  <img v-bind:src="image.picture" />
  <div class="div-vitrine-colomn">
    <div class="div-vitrine-row">
     <!--  <img  v-for="img in images" v-bind:src="img" />-->
      <!-- img -->
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <p>Bordel</p>
  <div class="div-collection-grille">
    <div class="item-grille">
      <div class="item-collection-grille">
        <div class="item-solde"></div>
        <div class="item-image"></div>
        <div class="item-marque"></div>
        <div class="item-collection"></div>
        <div class="item-price"></div>
      </div>
    </div>
    <div class="item-grille"></div>
    <div class="item-grille"></div>
    <div class="item-grille"></div>
    <div class="item-grille"></div>
    <div class="item-grille"></div>
    <div class="item-grille"></div>
    <div class="item-grille"></div>
    <div class="item-grille"></div>
  </div>
  <Footer />
</template>

<script>

import Header from "./Header.vue";
import Footer from "./Footer.vue";

/* import data from "../assets/script/data.json";
const dataObj = JSON.parse(data);

console.log(dataObj); */

export default {
  name: "Home",
  components: {
    Header,
    Footer
  }
}
  </script>


<style>
.div-vitrine-row {
  padding: 0% 25%;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  max-width: 2000;
  width: 100%;
}

.image {
  padding: 10px;
  overflow: hidden;
}

.image img {
  border: 1px solid white;
  width: 100%;
  max-width: 500px;
  max-height: 1000px;
  height: 100%;
  transition: 2s;
  cursor: zoom-in;
}

.image:hover img {
  transform: scale(1.5);
}

.div-collection-grille {
  display: grid;
  max-width: 1200px;
  width: 95%;
  height: auto;
  margin: 15px auto;
  border: 2px solid black;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
  grid-gap: 15px;
}

.item-grille {
  width: auto;
  height: 200px;
  background: grey;
  border: 2px solid white;
}
</style>