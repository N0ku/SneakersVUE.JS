<template>
  <header>
    <div id="header-content">
      <div class="row header-row">
        <h1><router-link to="/">SNEAKERS SHOP</router-link></h1>
        <div class="header-icon">
          <img class="svg-icon"
            src="/src/assets/svg/2849824-basket-buy-market-multimedia-shop-shopping-store_107977.svg" alt="Cart">
          <img class="svg-icon" src="/src/assets/svg/heart-svgrepo-com.svg" alt="Heart">
          <img class="svg-icon" v-on:click="showSearch()" src="/src/assets/svg/1093183.svg" alt="Loupe" id="glass-icon">
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <router-link to="">Tendances 🔥</router-link>
          </li>
          <li class="menu-deroulant">
            <router-link to="">Marques</router-link>
            <ul class="sous-menu">
              <li>
                <router-link to="">Nike</router-link>
              </li>
              <li>
                <router-link to="">Puma</router-link>
              </li>
              <li>
                <router-link to="">Adidas</router-link>
              </li>
              <li>
                <router-link to="">Converse</router-link>
              </li>
              <li>
                <router-link to="">Yeezy</router-link>
              </li>
              <li>
                <router-link to="">Vans</router-link>
              </li>
            </ul>
          </li>
          <li class="menu-deroulant">
            <router-link to="#">Collections</router-link>
            <ul class="sous-menu">
              <li>
                <router-link to="">Pradish Designer</router-link>
              </li>
              <li>
                <router-link to="">Hibernation</router-link>
              </li>
              <li>
                <router-link to="">Sueur</router-link>
              </li>
              <li>
                <router-link to="">Soi-Disant artistique</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="">À Propos</router-link>
          </li>
          <li>
            <router-link to="">Commande</router-link>
          </li>
        </ul>
      </nav>

      <div class="search-content">
        <input type="search" name="search" id="input-search" placeholder="Search...">
      </div>
    </div>
  </header>
</template>

<script>
export default {
    name:"Header"
}
</script>

<style>
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
    font-family: 'Times New Roman', Times, serif;
    font-size: 50px;
    letter-spacing: 5px;
    padding: 0;
    margin: 0;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}

#header-content {
    background-color: rgb(2, 1, 1);

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

/* header --END*/

/* Nav --START */
nav {
    width: 100%;
    font-size: 18px;
    --hauteur-menu: 60px;
}

nav>ul {
    display: flex;
    text-align: center;
    height: var(--hauteur-menu);
}

nav ul {
    list-style-type: none;
    margin-top: 0;
}

nav>ul>li {
    position: relative;
    height: 100%;
    flex: 1;
}

nav>ul>li>router-link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

li router-link {
    text-decoration: none;
}

.menu-deroulant>router-link:after {
    content: '❯';
    font-size: 15px;
    margin-left: 7px;
    display: inline-block;
}

.sous-menu {
    margin-top: var(--hauteur-menu);
    width: 100%;
    text-align: left;
    background-color: rgb(0, 0, 0);
    border-radius: 2px;
    overflow: hidden;
    max-height: 0;
}

.sous-menu>li>router-link:hover {
    text-decoration: underline;
    animation: smoothColor 1s 1;
    color: #f5754e;
}

.sous-menu>li>router-link {
    height: 50px;
    padding-left: 20px;
    width: 100%;
    align-items: center;
    display: flex;
}

nav>ul>li:hover>router-link {
    animation: smoothColor 1s 1;
    color: #f5754e;
}

.menu-deroulant:hover>router-link:after {
    animation: rotationArrow 0.2s linear forwards;
}

.menu-deroulant:hover>.sous-menu {
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
</style>