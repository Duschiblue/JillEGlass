<!-- Javascript -->
<script></script>

<!-- ------------------------------------------------ -->

<!-- HTML -->
<template>
    <!-- About Background -->
    <div class="main">
        <div class="itemcontainer">

            <!-- Item 1 = Dolphin -->
            <div class="item1">
                <div class="imagesize" ><img id="images" src="../assets/dolphin1.jpg"></div>
                <h1>Dolphin</h1>
                <p>Lampwork Boro Glass Pendant, Aqua Blue</p>
                <a id="link1" href="https://www.etsy.com/se-en/listing/1400373163/lampwork-boro-glass-pendant-focal-bead?click_key=d2d393d29513c73d298e60dda670f1c38c500b0f%3A1400373163&click_sum=d6a3ed97&ref=shop_home_recs_1">BUY</a>
            </div>

            <!-- Item 2 = Whale -->
            <div class="item1">
                <div class="imagesize" ><img id="images" src="../assets/val1.jpg"></div>
                <h1>Humpback Whale</h1>
                <p>Lampwork Boro Glass Pendant, Aqua Purple</p>
                <a id="link1" href="https://www.etsy.com/se-en/listing/1304263492/lampwork-boro-glass-pendant-focal-bead?click_key=e49569f452c3d4700c00b5056b3c7e4c91dc8ad3%3A1304263492&click_sum=707867c5&ref=shop_home_recs_2&cns=1">BUY</a>
            </div>

            <!-- Item 3 = Focal Bead -->
            <div class="item1">
                <div class="imagesize" ><img id="images" src="../assets/swirl1.jpg"></div>
                <h1>Focal Bead</h1>
                <p>Lampwork Boro Glass Pendant, Turquoise Blue</p>
                <a id="link1" href="https://www.etsy.com/se-en/listing/1436946753/lampwork-boro-glass-pendant-focal-bead?click_key=7845a0f7f471db0288694c81d592371c8982d66c%3A1436946753&click_sum=0bfbf191&ref=shop_home_recs_3">BUY</a>
            </div>

            <!-- Item 4 = Whale -->
            <div class="item1">
                <div class="imagesize" ><img id="images" src="../assets/val2.jpg"></div>
                <h1>Humpback Whale</h1>
                <p>Lampwork Boro Glass Pendant, Turquoise Blue</p>
                <a id="link1" href="https://www.etsy.com/se-en/listing/1298309182/lampwork-boro-glass-pendant-focal-bead?click_key=2079269e5fab04becf3bc77dabc53e5a4480ae2a%3A1298309182&click_sum=032b7a03&ref=shop_home_recs_4">BUY</a>
            </div>

            <!-- Item 4 = Seahorse -->
            <div class="item1">
                <div class="imagesize" ><img id="images" src="../assets/seahorse1.jpg"></div>
                <h1>Seahorse</h1>
                <p>Lampwork Boro Glass Pendant, Blue Green</p>
                <a id="link1" href="https://www.etsy.com/se-en/listing/1433026667/lampwork-boro-glass-pendant-focal-bead?click_key=fcd1e00b94b3cae779f53bf7a92c9e3f5710df56%3A1433026667&click_sum=9c6a75ba&ref=shop_home_recs_5&cns=1">BUY</a>
            </div>

            <!-- Item 5 = Seahorse -->
            <div class="item1">
                <div class="imagesize" ><img id="images" src="../assets/seahorse2.jpg"></div>
                <h1>Seahorse</h1>
                <p>Lampwork Boro Glass Pendant, Black White</p>
                <a id="link1" href="https://www.etsy.com/se-en/listing/1403244651/lampwork-boro-glass-pendant-focal-bead?click_key=e276d66f24656ec16bbad297b41404ef1c869387%3A1403244651&click_sum=8e1468c0&ref=shop_home_recs_6&cns=1">BUY</a>
            </div>

            <!-- Item 6 = Heart -->
            <div class="item1">
                <div class="imagesize" ><img id="images" src="../assets/heart1.jpg"></div>
                <h1>Heart</h1>
                <p>Lampwork Boro Glass Pendant, Black</p>
                <a id="link1" href="https://www.etsy.com/se-en/listing/1425739309/lampwork-boro-glass-pendant-focal-bead?click_key=c5dadec5550e6e9593414657cbdb8f03502d333f%3A1425739309&click_sum=74b158c4&ref=shop_home_recs_7">BUY</a>
            </div>
        </div>
    </div>
</template>

<!-- ------------------------------------------------ -->

<!-- CSS (Scoped) -->
<style scoped>
/* Shop Background */
.main {
    width: 100px;
    left: 20px;
}

/* Div Including All Items */
.itemcontainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

/* Item Containers */
.item1 {
    width: 250px;
    height: 370px;
    background: rgb(238, 229, 220);
    border-radius: 10px;
    position: relative;
    align-items: center;
    text-align: center;
    margin: 35px;
    padding-top: 20px;
    padding-bottom: 20px;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.item1:hover {
    transform: scale(1.1);
    box-shadow: 1px 10px 10px -10px rgba(0, 0, 24, 0.5);
    background: rgb(235, 220, 202);
    cursor: pointer;
}

/* Item Images */
#images {
    width: 200px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

/* Change Image Div */
.imagesize {
    width: 250px;
    height: 250px;
    margin: auto;
}

/* Buy Button */
#link1 {
    background-color: #ff9752f1;
    color: white;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 500;
    padding: 10px;
    border-radius: 5px;
    transition: 0.1s;
}

#link1:hover {
    background-color: #f57d2ef1;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

/* Title Designs */
h1 {
    margin-top: 0px;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    padding-top: 10px;
    width: 100%;
}

/* Information Spalt */
p {
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;   
}
</style>
