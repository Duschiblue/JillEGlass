<!-- Javascript -->
<script>
export default {
  // Open Cart Input
  data() {
    return {
      open: false,
      visible: false
    }
  },

  // Toggle Click
  methods: {
    toggle() {
      this.open = !this.open
    },
  },
}
</script>

<!-- ------------------------------------------------ -->

<!-- HTML -->
<template>
  <!-- Cart Window -->
  <div @mouseleave="$emit('close')">
    <div class="container-small" >
      <img class="cart-image" src="../assets/sc1.png">
    </div>
    <div class="container">
      <h4>Your Cart</h4>
    </div>
  </div>
</template>

<!-- ------------------------------------------------ -->

<!-- CSS -->
<style scoped>
/* Cart Window */
.container-small {
  top: 0px;
  right: 0px;
  width: 70px;
  height: 80px;
  background-color: #9bccc1;
  position: fixed;
  border-radius: 10px;
}

.container {
  width: 200px;
  height: 200px;
  position: fixed;
  top: 50px;
  right: 0px;
  background-color: #9bccc1;
  text-align: center;
  border-radius: 10px;
}

/* Cart Image */
.cart-image {
  height: 30px;
  margin-top: 10px;
  vertical-align: middle;
  float: right;
  margin-right: 20px;
  cursor: pointer;
}

/* Your Cart Text */
h4 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  margin-top: 10px;
}
</style>
