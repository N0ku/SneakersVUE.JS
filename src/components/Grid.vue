<template>
  <div class="item-grille">
    <div class="item-collection-grille">
      <div class="item-solde"><p>solde</p></div>
      <div class="item-image">
        <img src="../assets/images/brown-sneakers.jpeg" alt="" />
      </div>
      <div class="item-marque"><h1>marque</h1></div>
      <div class="item-collection"><h1>collection</h1></div>
      <div class="item-price"><h2>price</h2></div>
      <div class="item-available"><h2>available</h2></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "GridView",
};
</script>




<style>
.item-image {
  padding: 0px;
  margin: 0px;

  overflow: hidden;
}

.item-image img {
  max-width: 300px;
  width: 70%;
  height: auto;
  height: auto;
  margin: 0px;
  justify-content: center;
}

.div-collection-grille {
  display: grid;
  max-width: 1200px;
  width: 95%;
  height: auto;
  margin: 15px auto;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
  grid-gap: 15px;
}

.item-grille {
  width: auto;
  height: auto;
  border: 2px solid white;
}

.item-collection-grille {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
}

.item-image {
  grid-area: 1 / 1 / 3 / 2;
}
.item-solde {
  grid-area: 1 / 1 / 2 / 2;
}
.item-marque {
  grid-area: 1 / 2 / 2 / 3;
}
.item-collection {
  grid-area: 2 / 2 / 3 / 3;
}
.item-price {
  grid-area: 3 / 2 / 4 / 3;
}
.item-available {
  grid-area: 3 / 1 / 4 / 2;
}
</style>
})