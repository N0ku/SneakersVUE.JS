<template>
  <div>
    <header>
      <div id="header-content">
        <div class="row header-row">
          <h1><router-link to="/" id="title">SNEAKERS SHOP</router-link></h1>
          <div class="header-icon">
            <img
              class="svg-icon"
              src="../assets/svg/2849824-basket-buy-market-multimedia-shop-shopping-store_107977.svg"
              alt="Cart"
            />
            <img
              class="svg-icon"
              src="../assets/svg/heart-svgrepo-com.svg"
              alt="Heart"
            />
            <img
              class="svg-icon"
              v-on:click="showSearch()"
              src="../assets/svg/1093183.svg"
              alt="Loupe"
              id="glass-icon"
            />
          </div>
        </div>

        <nav>
          <ul>
            <li>
              <router-link to="" class="link">Tendances 🔥</router-link>
            </li>
            <li class="menu-deroulant">
              <router-link to="" class="link">Marques</router-link>
              <ul class="sous-menu">
                <li>
                  <router-link
                    class="link"
                    :to="{ name: 'marque', params: { name: 'Nike' } }"
                    >Nike</router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{ name: 'marque', params: { name: 'Champion' } }"
                    class="link"
                    >Champion</router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{ name: 'marque', params: { name: 'Air Jordan' } }"
                    class="link"
                    >Air Jordan</router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{ name: 'marque', params: { name: 'Converse' } }"
                    class="link"
                    >Converse</router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{ name: 'marque', params: { name: 'Gucci' } }"
                    class="link"
                    >Gucci</router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{ name: 'marque', params: { name: 'Vans' } }"
                    class="link"
                    >Vans</router-link
                  >
                </li>
                <li>
                  <router-link
                    :to="{ name: 'marque', params: { name: 'adidas' } }"
                    class="link"
                    >Adidas</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="menu-deroulant">
              <router-link class="link" to="">Catégorie</router-link>
              <ul class="sous-menu">
                <li>
                  <router-link :to="{name: 'Categorie', params: { name: 'basketball' }}" class="link">BasketBall</router-link>
                </li>
                <li>
                  <router-link :to="{name: 'Categorie', params: { name: 'lifestyle' }}"  class="link">Lifestyle</router-link>
                </li>
                <li>
                  <router-link :to="{name: 'Categorie', params: { name: 'running' }}"  class="link">Running</router-link>
                </li>
                <li>
                  <router-link :to="{name: 'Categorie', params: { name: 'skateboarding' }}"  class="link">Skate Board</router-link>
                </li>
                <li>
                  <router-link :to="{name: 'Categorie', params: { name: 'other' }}"  class="link"
                    >Other (Pradish Catégorie)</router-link
                  >
                </li>
              </ul>
            </li>
            <li>
              <router-link to="" class="link">À Propos</router-link>
            </li>
            <li>
              <router-link to="" class="link">Commande</router-link>
            </li>
          </ul>
        </nav>

        <div class="search-content">
          <input
            type="search"
            name="search"
            id="input-search"
            placeholder="Search..."
          />
        </div>
      </div>
    </header>
  </div>
</template>

<script>
var script = require('../assets/script/script.js')

export default {
  name: "Header",
  data() {
    return {
    };
  },
};
</script>

<style scoped>
/* KEYFRAME --START */
@keyframes rotationArrow {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(90deg);
  }
}

@keyframes ShowMenu {
  0% {
    box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0);
    border-top: 3px solid #ec21af;
  }

  30% {
    box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.3);
    border-top: 3px solid #ec9421;
  }

  100% {
    max-height: 50em;
    border-top: 3px solid #f5754e;
    box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.3);
  }
}

@keyframes smoothColor {
  0% {
    color: #ec21af;
  }

  50% {
    color: #ec9421;
  }

  100% {
    color: #f5754e;
  }
}

/* header --START*/
header {
  position: absolute;
  z-index: 99;
  padding: 0;
  margin: 0;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: fit-content;
}

header h1 {
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  font-size: 50px;
  letter-spacing: 5px;
  text-decoration: none !important;
  padding: 0;
  margin: 0;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

#header-content {
  background-color: #1f1f1f;
}

.row {
  display: inline;
}

.svg-icon {
  width: 25px;
  height: 25px;
  margin: 1%;
  float: right;
  cursor: pointer;
}

#title {
  text-decoration: none;
}

/* header --END*/

/* Nav --START */
nav {
  width: 100%;
  font-size: 18px;
  --hauteur-menu: 60px;
}

nav > ul {
  display: flex;
  text-align: center;
  height: var(--hauteur-menu);
}

nav ul {
  list-style-type: none;
  margin-top: 0;
}

nav > ul > li {
  position: relative;
  height: 100%;
  flex: 1;
}

nav > ul > li > a {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

li a {
  text-decoration: none;
}

.menu-deroulant > a:after {
  content: "❯";
  font-size: 15px;
  margin-left: 7px;
  display: inline-block;
}

.sous-menu {
  margin-top: var(--hauteur-menu);
  width: 100%;
  text-align: left;
  background-color: #1f1f1f;
  border-radius: 2px;
  overflow: hidden;
  max-height: 0;
}

.link:hover {
  text-decoration: underline;
  animation: smoothColor 1s 1;
  color: #f5754e;
}

.link {
  height: 50px;
  padding-left: 20px;
  width: 100%;
  align-items: center;
  display: flex;
}

nav > ul > li:hover > .link {
  animation: smoothColor 1s 1;
  color: #f5754e;
}

.menu-deroulant:hover > .link:after {
  animation: rotationArrow 0.2s linear forwards;
}

.menu-deroulant:hover > .sous-menu {
  animation: ShowMenu 1s forwards;
}

/* Nav --END */

/* Search --START */
.search-content {
  width: 100%;
  height: 110px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: -1;
}

input[type="search"] {
  border-top: none;
  border-left: none;
  border-right: none;
  width: 60%;
  height: 50%;
  border-radius: 5px;
}

input[type="search"]::placeholder {
  letter-spacing: 5px;
}

#glass-icon:hover > .search-content{
  margin-top:var(--hauteur-menu);
}
</style>


