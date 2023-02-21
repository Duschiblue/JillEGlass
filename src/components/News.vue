<!-- Javascript -->
<script>
export default {

  // Open Subscribe Input
  data() {
    return {
      open: false
    }
  },
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
    <!-- Subscribe Popup -->
    <div v-on:click="toggle" class="news">News</div>
    <div v-if="open">
    <div v-on:click="toggle" class="backdrop" />
        <div class="subscribe-container">
            Placeholder
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
    z-index: 3;
}

/* Subscribe Button */
.news {
    padding: 12px 2px 10px;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    font-size: 16px;
    display: block;
    color: black;
    transition: all 0.15s;
    margin-bottom: 14px;
}

.news:hover {
    background-color: #ade6d9;
    color: black;
    box-shadow: 3px 3px 5px #679289 inset;
    cursor: pointer;
}

/* Subscribe Input */
.subscribe-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    height: 400px;
    display: flex;
    width: 500px;
    z-index: 5;
}
</style>

<!-- ------------------------------------------------ -->