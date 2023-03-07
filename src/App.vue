<!-- Javascript -->
<script>
// Imports
import News from "./components/News.vue"
import Cart from "./components/Cart.vue"

export default {
  components: {
    News,
    Cart
  },

  // Shopping Cart Hovering
  data() {
    return {
      img: "../src/assets/shopping-cart.png",
      cart_visible: false,
    }
  },

  methods: {
    changecart() {
      this.img = '../src/assets/sc1.png'
      this.cart_visible = true
    },
    changecart1() {
      this.img = '../src/assets/shopping-cart.png'
      this.cart_visible = false
      console.log('bob');
    },
  },
}
</script>

<!-- ------------------------------------------------ -->

<!-- HTML -->
<template>
  <!-- Website Title -->
  <title>JillEGlass</title>

  <!-- Topbar -->
  <div class="topbar">
    <img class="logo" src="../src/assets/jillelogo.png">
    <router-link to="#">Shop</router-link>
    <a href="gallery">Gallery</a>
    <a href="about">About</a>
    <a href="contact">Contact</a>
    <a href="#"><img class="cart" :src="img" @mouseover="changecart"></a>
    <Cart @close="changecart1" v-if="cart_visible" />
  </div>

  <!-- Sidebar -->
  <div class="sidebar">
    <a class="all" href="all">All</a>
    <a href="sealife">Sealife</a>
    <a href="hearts">Hearts</a>
    <a href="holiday">Holiday</a>
    <a href="other">Other</a>
    <a href="misc">Misc</a>
    <div class="spacer" />
    <News />
  </div>

  <!-- Shop Choices -->
  <div class="item-container"></div>

  <!-- Main Window -->
  <main>
    <router-view></router-view>
  </main>
</template>

<!-- ------------------------------------------------ -->

<!-- CSS (Scoped) -->
<style scoped>
/* Imports */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&family=Orbitron&family=Playfair+Display&family=Special+Elite&display=swap');

/* Logo */
.logo {
  height: 40px;
  margin-top: 5px;
  vertical-align: middle;
}

/* Cart */
.cart {
  height: 30px;
  margin-top: 10px;
  vertical-align: middle;
  float: right;
  margin-right: 20px;
  background-color: #679289;
}

/* Topbar Design */
.topbar {
  background-color: #679289;
  height: 50px;
  z-index: 100;
}

/* Topbar Elements */
.topbar a {
  color: azure;
  padding: 14px 16px;
  text-decoration: none;
  vertical-align: middle;
  font-family: 'Montserrat', sans-serif;
}

.topbar router-link {
  color: azure;
  padding: 14px 16px;
  text-decoration: none;
  vertical-align: middle;
  font-family: 'Montserrat', sans-serif;
}

.topbar a:hover {
  color: black;
}

.topbar router-link:hover {
  color: black;
  cursor: pointer;
}

.all {
  margin-top: 14px;
}

/* Sidebar Design */
.sidebar {
  display: flex;
  flex-direction: column;
  background-color: #9bccc1;
  height: calc(100% - 50px);
  width: 120px;
  position: fixed;
  z-index: -50;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 50px;
  left: -90px;
  transition: 0.3s;
}

.sidebar:hover {
  left: 0;
}

/* Sidebar Elements */
.sidebar a {
  padding: 12px 2px 10px;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  font-size: 16px;
  display: block;
  color: black;
}

.sidebar a:hover {
  background-color: #ade6d9;
  color: black;
  box-shadow: 3px 3px 5px #679289 inset;
  transition: 0.15s;
}

.news {
  margin-bottom: 14px;
}

/* Sidebar Spacer Between News & Devisions*/
.spacer {
  flex: 1
}

/* Main Window */
main {
  position: relative;
  z-index: -10000;
  margin-left: 30px;
}
</style>


