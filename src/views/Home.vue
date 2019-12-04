<template>
  <div>
    <section class="erstesection">
      <article class="zwischenelement">
        <input id="checkbox" type="checkbox">
        <section class="boxinhalt">
        </section>
        <v-container class="labelbox">
          <label for="checkbox" class="textbutton"><h1>Was ist der Delta Shop?</h1></label>
        </v-container>
      </article>
      <nav class="kategorie">
        <kategorien/>
      </nav>
      <div class="bilder">
        <v-container class="vorschau">
          <div class="ersteReihe">
            <div class="reihe">
              <header><h2>Lorem</h2></header>
              <v-container class="kontainerfürbild">
                <router-link to="" class="bildrout"><img src="../assets/122043.jpg" height="250" width="275"/></router-link>
              </v-container>
              <article></article>
            </div>
            <div class="reihe">
              <header><h2>Lorem</h2></header>
              <v-container class="kontainerfürbild">
                <router-link to="" class="bildrout"><img src="../assets/122043.jpg" height="250" width="275"/></router-link>
              </v-container>
              <article></article>
            </div>
            <div class="reihe">
              <header><h2>Lorem</h2></header>
              <v-container class="kontainerfürbild">
                <router-link to="" class="bildrout"><img src="../assets/122043.jpg" height="250" width="275"/></router-link>
              </v-container>
              <article></article>
            </div>
            <div class="reihe">
              <header><h2>Lorem</h2></header>
              <v-container class="kontainerfürbild">
                <router-link to="" class="bildrout"><img src="../assets/122043.jpg" height="250" width="275"/></router-link>
              </v-container>
              <article></article>
            </div>
          </div>
          <div class="zweiteReihe">
            <div class="reihe">
              <header><h2>Lorem</h2></header>
              <v-container class="kontainerfürbild">
                <router-link to="" class="bildrout"><img src="../assets/122043.jpg" height="250" width="275"/></router-link>
              </v-container>
              <article></article>
            </div>
            <div class="reihe">
              <header><h2>Lorem</h2></header>
              <v-container class="kontainerfürbild">
                <router-link to="" class="bildrout"><img src="../assets/122043.jpg" height="250" width="275"/></router-link>
              </v-container>
              <article></article>
            </div>
            <div class="reihe">
              <header><h2>Lorem</h2></header>
              <v-container class="kontainerfürbild">
                <router-link to="" class="bildrout"><img src="../assets/122043.jpg" height="250" width="275"/></router-link>
              </v-container>
              <article></article>
            </div>
            <div class="reihe">
              <header><h2>Lorem</h2></header>
              <v-container class="kontainerfürbild">
                <router-link to="" class="bildrout"><img src="../assets/122043.jpg" height="250" width="275"/></router-link>
              </v-container>
              <article></article>
            </div>
          </div>
        </v-container>
      </div>
      <div class="dritteReihe">
        <div class="zwischenbanner">
          <v-container class="zwbanner">
            <router-link to=""><img src="../assets/122043.jpg" height="300px" width="87%"></router-link>
          </v-container>
        </div>
      </div>

    </section>
    <section class="zweitesection">

    </section>
  </div>
</template>

<script>

  import kategorien from "../components/kategorien";
export default {
  name: "Home",
  components:{
    kategorien
  }
};
</script>

<style scoped>
  .boxinhalt {display: none;height:0;-webkit-animation-name: example;-webkit-animation-duration: 2s;animation-name: example;animation-duration: 2s;}
  @-webkit-keyframes example { from {height: 0;} to {height: 200px} }
  #checkbox {display:none;}
  .labelbox{text-align: center;}
  #checkbox:checked ~ .boxinhalt {display: block;height: 200px;}
  .textbutton h1{font-size: 20px;font-weight: lighter}
  .ersteReihe{flex-direction: row; display: flex; justify-content: center; align-content: center}
  .kontainerfürbild{align-self: center}
  .zweiteReihe{flex-direction: row; display: flex; justify-content: center; align-content: center; margin-top: 2%;margin-bottom: 2%}
  .vorschau div div{border: #424242 solid 1px; background: #424242; height: 400px}
  .reihe{margin: 2%; width: 300px}
  .reihe header h2{font-weight: lighter; text-align: center}
  .kontainerfürbild img:hover{transition: 1s; transform: translateY(10px)}
  .bilder{border: grey solid 1px; background: -moz-mac-accentdarkshadow; width: 80%; margin-left: 12%}
  .dritteReihe{margin-top: 1%}
  .zwischenbanner{justify-content: center; align-content: center; align-self: center; text-align: center; margin-left: 4%}
</style>
