<!-- Javascript -->
<script>
    export default{
        
    }
</script>

<!-- ------------------------------------------------ -->

<!-- HTML -->
<template>
    <!-- About Background -->
    <div class="main">
        <h1>Hello here is the Gallery!</h1>
        <img class="images" src="../assets/jillelkins.jpg">
        <img class="images" src="../assets/seahorse1.jpg">
        <img class="images" src="../assets/heart1.jpg">
        <img class="images" src="../assets/octopus1.jpg">
        <img class="images" src="../assets/dragon1.jpg">
        <img class="images" src="../assets/swirl1.jpg">
        <img class="images" src="../assets/val1.jpg">
        <img class="images" src="../assets/val2.jpg">
    </div>
</template>

<!-- ------------------------------------------------ -->

<!-- CSS -->
<style scoped>
/* Div For All Items */
.main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    width: 100% !important;
    height: 100%;
    margin-top: 60px;
}

/* Images */
.images {
    width: 100%;
}
</style>
