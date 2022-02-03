<template>
<div>

<div class="div-vitrine-colomn">
      <div class="div-vitrine-row">
        <!-- DATABASE!!!-->
        <div class="image" v-for="img in image" :key="img.picture">
          <img v-bind:src="img.picture" :key="id">
        </div>
      </div>
    </div>

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
</div>
</template>

<script>

export default {
  name:"Home",
  components:{
    Header,
    Footer
  },
  data(){
    return{
      image:[
        {
          id:901,
          picture:"../src/assets/images/brown-sneakers.jpeg",
        },
        {
          id:902,
          picture:"../src/assets/images/pink-sneakers.jpeg"
        },
        {
          id:903,
          picture:"../src/assets/images/orange-sneakers.jpeg",
        }
      ],
  }
  },
  components:{

  }
}
</script>

<style>

</style>