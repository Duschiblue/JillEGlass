<!-- Javascript -->
<script></script>

<!-- ------------------------------------------------ -->

<!-- HTML -->
<template>
    <!-- About Page -->
    <div class="main">

        <!-- Information -->
        <div class="information-container">
            <div class="row">
                <div id="grid">
                    <div class="text">
                        <!-- Page Heading -->
                        <div id="heading">
                            <h1>About The Artist</h1>
                        </div>
                        <h2>About The Glass</h2>
                        <p>All my pieces are made with borosilicate glass (hard glass) and are handsculpted in front of a
                            flame at a few thousand fahrenheit degrees. No use of molds and very minimal use of tools.
                            Starting off with solid glass rods, I shape the glass in the flame by using gathering-, pushing-
                            and pulling techniques to get desired shape. The pieces then rest in a kiln to prevent stress in
                            glass.</p>
                        <h2>About Me</h2>
                        <p>I was born and raised in Småland, Sweden, very close to the "Glass Kingdom" of Sweden (Orrefors,
                            Kosta Boda and many others).
                            Often I would take trips there, either shool fieldtrips or with family and friends. Glass has
                            always been a big fascination to me.</p>
                        <p>I started my lampworking career August 1998 on Hawaii, where I learned from the very talented
                            glass artists at Maui Crystal in Lahaina, Maui.</p>
                        <p>Working with glass was such an amazing feeling. I was more creative with drawing (mostly
                            portraits by requests) and sculpting with clay while living in Sweden. The flow feeling of
                            working hot glass had such an impact on me. I became addicted right away.</p>
                        <p>I met my husband on Maui and in 1999 I moved to the North Shore, Oahu where he lived. There I
                            continued as an apprentice for Krista Woodward at Oceans in Glass, Haleiwa. Another talented
                            artist to learn from.</p>
                        <p>2001 a move took us to Traverse City, Michigan and I started my own studio in October of that
                            year. After four years there, another move took us to Mobile, Alabama on the Gulf coast where we
                            lived for 7 1/2 years.
                            Fall of 2013 I started my studio in charming Västervik on the east coast of Sweden, right by
                            it's amazing archipelago. Here we live today with our two children</p>
                        <h2>Terms of Service</h2>
                        <p>IT IS MY ART AND I HAVE LICENSED OWNERSHIP SO DONT TRY TO STEAL! If you do not pay for tracking and the package gets lost in the mail then I am not responsible for a replacement. Order tracking to secure your purchase.</p>
                        </div>

                    <!-- Image -->
                    <div id="lampworkimage">
                        <img src="../assets/lampwork.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- ------------------------------------------------ -->

<!-- CSS -->
<style>
/* Main Container */
.main {
    width: 100% !important;
    height: 100%;
    display: flex;
    flex-direction: column;
}


/* Heading */
#heading {
    text-align: left;
    padding-bottom: 20px;
}

/* Information Container */
.information-container {
    padding: 40px;
    display: flex;
    flex-direction: column;
}

.row {
    width: inherit;
    display: flex;
    flex-wrap: wrap;
}

/* Title Display */
h1 {
    margin-top: 40px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
}

h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    margin-top: 20px;
    width: 100%;
}

#grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

p {
    margin-top: 10px;
    margin-bottom: 30px;
    width: 100%;
    min-width: min(500px, 100%);
    flex: 1;
    font-family: 'Montserrat', sans-serif;
}

/* Image */
#lampworkimage img {
    width: 100%;
    margin-top: 80px;
}

/* Smaller Version */
@media screen and (max-width: 1150px) {
    .main {
        width: 100% !important;
        height: 100%;
        flex-direction: row;
    }

    #grid {
        grid-template-columns: 1fr;
    }
}
</style>
