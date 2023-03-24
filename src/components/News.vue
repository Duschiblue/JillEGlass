<!-- Javascript -->
<script>
export default {

  // Open Subscribe Input
  data() {
    return {
      open: false
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
  <!-- News Click -->
  <div v-on:click="toggle" class="news">News</div>
  <div v-if="open">

  <!-- Subscribe Popup -->
  <div v-on:click="toggle" class="backdrop" />
    <div class="subscribe-container">
      <div class="elements-flex">
        <h1>Subscribe for updates on restock!</h1>
        <input type="email" id="email" placeholder="alex@gmail.com">
        <br> <!-- Break Between Input & Button -->
        <button>Subcribe</button>
        <h6>By sharing your email adress, you agree to recieve marketing emails and consent to our <a href="/about"><span>Terms & Conditions</span></a> and <a href="/about"><span>Privacy Policy</span></a>.</h6>
      </div>
    </div>
  </div>
</template>

<!-- ------------------------------------------------ -->

<!-- CSS -->
<style>
/* Background Darkens */
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
}

/* News Button */
.news {
    padding: 12px 6px 10px;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-size: 16px;
    color: black;
    transition: all 0.15s;
}

/* Smaller Version Included With Sidebar */
@media screen and (max-width: 1000px) {
  /* News Button */
  .news:hover {
    color: white;
    cursor: pointer;
  }

  /* Subscribe Input */
  .subscribe-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    background-image: url('../assets/subscribe.png');
    border-radius: 10px;
    height: 350px;
    display: flex;
    width: 300px;
    z-index: 10;
  }

  /* Subscription Text */
  h1 {
    font-family: 'Montserrat', sans-serif;
    display: flex;
    justify-content: center;
    margin-top: 1px;
    font-size: 25px;
  }

  /* Email Input */
  #email {
    border: 2px solid rgba(0,0,0,0.5);
    padding: 12px;
    margin-top: 40px;
    font-size: 17px;
    border-radius: 5px;
  }

  /* Subscribe Button */
  button {
    width: 100px;
    padding: 10px;
    margin-top: 10px;
    font-size: 18px;
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    background: #0e776e;
    color: #ffffff;
    box-shadow: 0px 2px 2px #ddd;
    font-family: 'Montserrat', sans-serif; 
  }

  /* TOS & Information */
  h6 {
    margin-top: 30px;
    font-family: 'Montserrat', sans-serif; 
  }
}

/* Pc Version Included With Sidebar */
@media screen and (min-width: 1001px) {
  /* Subscribe Input */
  .subscribe-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    background-image: url('../assets/subscribe.png');
    border-radius: 10px;
    height: 400px;
    display: flex;
    width: 500px;
    z-index: 10;
  }

  .news:hover {
    background-color: #ade6d9;
    color: black;
    box-shadow: 3px 3px 5px #679289 inset;
    cursor: pointer;
    width: 100%;
  }

  /* Subscription Text */
  h1 {
    font-family: 'Montserrat', sans-serif;
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }

  /* Email Input */
  #email {
    border: 2px solid rgba(0,0,0,0.5);
    padding: 12px;
    margin-top: 40px;
    font-size: 17px;
    border-radius: 5px;
  }

  /* Subscribe Button */
  button {
    width: 243px;
    padding: 10px;
    margin-top: 10px;
    font-size: 18px;
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
    background: #0e776e;
    color: #ffffff;
    box-shadow: 0px 2px 2px #ddd;
    font-family: 'Montserrat', sans-serif; 
  }

  /* TOS & Information */
  h6 {
    margin-top: 30px;
    font-family: 'Montserrat', sans-serif; 
  }
}

/* Flex Box Elements */
.elements-flex {
  text-align: center;
}
</style>

<!-- ------------------------------------------------ -->