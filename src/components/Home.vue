<template>
  <div class="div-body">
    <div class="div-vitrine-colomn">
      <div class="div-vitrine-row">
        <div class="image">
          <img src="../assets/images/supreme-sneakers.jpeg" alt="" />
        </div>
        <div class="image">
          <img src="../assets/images/brown-sneakers.jpeg" alt="" />
        </div>
        <div class="image">
          <img src="../assets/images/pink-sneakers.jpeg" alt="" />
        </div>
        <div class="image">
          <img src="../assets/images/orange-sneakers.jpeg" alt="" />
        </div>
        <div class="image">
          <img src="../assets/images/supreme-sneakers.jpeg" alt="" />
        </div>
      </div>
    </div>
    <div class="div-collection-grille">
      <div class="item-grille" v-for="(produit, index) in produit" :key="index">
        <div class="item-collection-grille">
          <div class="item-image">
            <img
              :src="donnee.sneakers[index].grid_picture_url"
              alt="imgSneaker"
            />
          </div>
          <div class="item-marque">
            <h4>{{ donnee.sneakers[index].brand_name }}</h4>
          </div>
          <div class="item-collection">
            <h4>{{ donnee.sneakers[index].details }}</h4>
          </div>
          <div class="item-price">
            <h4>{{ donnee.sneakers[index].retail_price_cents }}</h4>
          </div>
          <div class="item-id">
            <h4>{{ donnee.sneakers[index].id }}</h4>
          </div>
          <div class="item-available">
            <h4>{{ donnee.sneakers[index].name }}</h4>
          </div>
        </div>
        <div class="item-collection-grille-hover">
          <div class="item-image-hover">
            <img
              :src="donnee.sneakers[index].grid_picture_url"
              alt="imgSneaker"
            />
          </div>
          <div class="item-boxcondition-hover">
            <h4>{{ donnee.sneakers[index].box_condition }}</h4>
          </div>
          <div class="item-collection-hover">
            <h4>{{ donnee.sneakers[index].details }}</h4>
          </div>
          <div class="item-release-year-hover">
            <h4>{{ donnee.sneakers[index].release_year }}</h4>
          </div>
          <div class="item-available-hover">
            <h4>It's Available ? {{ donnee.sneakers[index].has_stock }}</h4>
          </div>
          <div class="item-id-hover">
            <h4>{{ donnee.sneakers[index].id }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GridView from "./Grid.vue";

// //Prog Cloning Item
// const Clone = {
//   template:
//     '<div class={{name}}><div class="item-collection-grille"> <div class="item-solde"><p>solde</p></div> <div class="item-image"><img src="../assets/images/brown-sneakers.jpeg" alt="" /></div><div class="item-marque"><h1>marque</h1></div><div class="item-collection"><h1>collection</h1></div><div class="item-price"><h2>price</h2></div><div class="item-available"><h2>available</h2></div></div></div>',
//   props: {
//     name: {
//       type: String,
//     },
//   },
//   methods: {
//     //Mettre fonction qui regarde dans la data le nombre de produits avec X infos.
//   },
// };

//THOMAS
// const testClone = new Vue({
//   el: "thomas",

//   data: {
//     items: [],
//     value: 0,
//   },

//   methods: {
//     addCase() {
//       const RenderCase = {
//         render(h) {
//           return h(Clone, {
//             class: ["CASE"],
//             pros: {
//               name: "case",
//             },
//           });
//         },
//       };
//     },
//   },
// });

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
  name: "Home",
  components: {
    GridView,
  },
  data() {
    return {
      isZoomed: false,
      imageWidth: "300",
      imageHeight: "300",
      donnee: data,
      image: [],
      stock: [],
      price: [],
      solde: [],
      marque: [],
      collection: [],
      produit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      index: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },

  mounted() {
    // this.data == this.DataLoad(data);
  },

  methods: {
    DataLoad(data) {
      for (var i = 0; i < 20; i++) {
        console.log(meh);
        this.name.push(donnee.sneakers[i].name);
        this.image.push(donnee.sneakers[i].grid_picture_url);
        this.collection.push(donnee.sneakers[i].collection_slugs);
        this.marque.push(donnee.sneakers[i].brand_name);
        this.price.push(donnee.sneakers[i].retail_price_cents);
      }
    },
    // MouseOver: function () {
    //   if ((this.isZoomed = false)) {
    //     this.isZoomed = true;
    //   } else {
    //     this.isZoomed = false;
    //   }
    // },
  },
  computed: {
    toggleZoom() {
      return this.isZoomed ? false : true;
    },
  },
};
</script>
 


<style>
.div-vitrine-row {
  margin-top: 115px;
  padding: 0% 10%;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  max-width: 3000px;
  width: 100%;
  background-color: rgba(0, 0, 0, 1);
  background-image: url("../assets/images/Sneakers-backgrounds2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.image {
  padding: 20px;
  overflow: hidden;
}

.image img {
  border: 1px solid #ffc300;
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
  max-width: 1600px;
  width: 95%;
  height: auto;
  margin: 15px auto;
  grid-template-columns: repeat(auto-fill, 500px);
  justify-content: center;
  grid-gap: 15px;
}

.item-grille {
  position: relative;
  width: auto;
  height: auto;
  color: black;
  -webkit-box-shadow: 5px 5px 32px -9px rgba(255, 204, 166, 0.62);
  box-shadow: 5px 5px 32px -9px rgba(255, 204, 166, 0.62);
  background: (255, 231, 182, 0.5);
}

.item-collection-grille {
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
}

.item-image {
  grid-area: 1 / 1 / 3 / 2;
  padding: 50px 50px;
}

.item-image:hover {
  transform: none;
}
.item-image-hover:hover {
  transform: none;
}

.item-grille:hover .item-collection-grille-hover {
  visibility: visible;
}
.item-grille:hover .item-collection-grille {
  visibility: hidden;
}
.item-id {
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
.div-collection-grille-hover {
  position: absolute;
  display: grid;
  max-width: 1600px;
  width: 95%;
  height: auto;
  margin: 15px auto;
  grid-template-columns: repeat(auto-fill, 500px);
  justify-content: center;
  grid-gap: 15px;
}

.item-grille-hover {
  position: absolute;
  width: auto;
  height: auto;
  color: black;
  -webkit-box-shadow: 5px 5px 32px -9px rgba(255, 204, 166, 0.62);
  box-shadow: 5px 5px 32px -9px rgba(255, 204, 166, 0.62);
  background: (255, 231, 182, 0.5);
}

.item-collection-grille-hover {
  position: absolute;

  padding: 10px;
  visibility: hidden;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
}

.item-image-hover {
  padding: 0% 15%;
  position: absolute;
  grid-area: 1 / 1 / 3 / 2;
}
.item-id-hover {
  bottom: 0%;
  position: absolute;
  grid-area: 1 / 1 / 2 / 2;
}
.item-boxcondition-hover {
  bottom: 0%;
  left: 75%;
  position: absolute;
  grid-area: 1 / 2 / 2 / 3;
  font: black;
}
.item-collection-hover {
  top: 10%;
  position: absolute;
  grid-area: 2 / 2 / 3 / 3;
}
.item-release-year-hover {
  top: 90%;
  left: 93%;
  position: absolute;
  grid-area: 3 / 2 / 4 / 3;
}
.item-available-hover {
  top: 90%;
  position: absolute;
  grid-area: 3 / 1 / 4 / 2;
}
</style>