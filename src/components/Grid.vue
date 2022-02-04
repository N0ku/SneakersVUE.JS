<template>
  <div class="item-grille" v-for="(sneaker, index) in Allsneak" :key="index">
    <!--    <div class="item-collection-grille">
      <div class="item-solde"></div>
      <div class="item-image">
        <img v-bind:src="Allsneak[index].grid_image_url" alt="imgSneaker" />
      </div>
      <div class="item-marque">
        <h4>{{Allsneak[index].brand_name}}</h4>
      </div>
      <div class="item-price">
        <h4>{{Allsneak[index].retail_price_cents}}</h4>
      </div>
      <div class="item-available" v-if="Allsneak[index].has_stock">
        <h4>En stock</h4>
      </div>
    </div>  -->

    <div class="item-collection-grille">
      <div class="item-image">
        <img :src="Allsneak[index].grid_picture_url" alt="imgSneaker" />
      </div>
      <div class="item-marque">
        <h4>{{ Allsneak[index].brand_name }}</h4>
      </div>
      <div class="item-collection">
        <h4>{{ Allsneak[index].details }}</h4>
      </div>
      <div class="item-price">
        <h4>{{ Allsneak[index].retail_price_cents }}</h4>
      </div>
      <div class="item-id">
        <h4>{{ Allsneak[index].id }}</h4>
      </div>
      <div class="item-available">
        <h4>{{ Allsneak[index].name }}</h4>
      </div>
    </div>
    <div class="item-collection-grille-hover">
      <div class="item-image-hover">
        <img :src="Allsneak[index].grid_picture_url" alt="imgSneaker" />
      </div>
      <div class="item-boxcondition-hover">
        <h4>{{ Allsneak[index].box_condition }}</h4>
      </div>
      <div class="item-collection-hover">
        <h4>{{ Allsneak[index].details }}</h4>
      </div>
      <div class="item-release-year-hover">
        <h4>{{ Allsneak[index].release_year }}</h4>
      </div>
      <div class="item-available-hover">
        <h4>It's Available ? {{ Allsneak[index].has_stock }}</h4>
      </div>
      <div class="item-id-hover">
        <h4>{{ Allsneak[index].id }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridView",
  props: ["sneakersbrand"],
  data() {
    return {
      Allsneak: this.sneakersbrand,
    };
  },
  methods: {
    showProps: function () {
      console.log(this.sneakersbrand);
    },
  },
  created() {
    this.showProps();
  },
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