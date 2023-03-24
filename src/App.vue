<!-- Javascript -->
<script>
// Imports
import News from "./components/News.vue"


export default {
  components: {
    News,
  },
  computed: {
    username() {
      return this.$route.params.username
    },
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
      this.img = "../src/assets/shopping-cart.png"
      this.cart_visible = false
    }
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
    <router-link to="/shop">Shop</router-link>
    <router-link to="/gallery">Gallery</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
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
    <router-view id="router"></router-view>
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

/* Cart (Not in use atm)*/
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #679289;
  height: 50px;
  z-index: 8;
}

/* Topbar Elements */
.topbar a {
  color: white;
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

/* Smaller Version for Topbar Text */
@media screen and (max-width: 400px) {
  .topbar a {
    color: white;
    padding: 14px 8px;
    text-decoration: none;
    vertical-align: middle;
    font-family: 'Montserrat', sans-serif;
  }
}

.all {
  margin-top: 14px;
}

/* Sidebar Design */
.sidebar {
  background-color: #9bccc1f1;
  height: calc(100% - 50px);
  width: 120px;
  position: fixed;
  z-index: 7;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 50px;
  transition: 0.3s;
  display: flex;
  align-items: center;
}

/* Small Version */
@media screen and (max-width: 1000px) {
  .sidebar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #9bccc1f1;
    height: 50px;
    z-index: 7;
  }

  .sidebar a {
    color: rgb(0, 0, 0);
    text-decoration: none;
    vertical-align: middle;
    font-family: 'Montserrat', sans-serif;
    padding: 3px 3px;
    margin-left: 3px;
  }

  .all{
    margin: 0;
  }

  .sidebar a:hover {
    color: white;
  }

  .spacer {
    display: none;
  }

  .news {
    display: inline-block;
  }

  /* Main Window */
  main {
    padding-top: 40px;
  }
}

/* Pc Version */
@media screen and (min-width: 1001px) {
  /* Main Window */
  main {
    position: relative;
    z-index: 1;
    width: caclc(100% - 30px);
    padding-left: 30px;
  }

  /* Sidebar Design */
  .sidebar {
    display: flex;
    flex-direction: column;
    background-color: #9bccc1f1;
    height: calc(100% - 50px);
    width: 120px;
    position: fixed;
    z-index: 7;
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 50px;
    left: -90px;
    transition: 0.3s;
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

  /* Sidebar Hovering */
  .sidebar:hover {
    left: 0;
  }

  .sidebar a:hover {
    background-color: #ade6d9;
    color: black;
    box-shadow: 3px 3px 5px #679289 inset;
    transition: 0.15s;
  }

  /* News Link */
  .news {
    margin-bottom: 14px;
  }
  
  /* Sidebar Spacer Between News & Devisions*/
  .spacer {
    flex: 1
  }
}

/* Other Router Windows */
#router {
  width: 100%;
}
</style>


