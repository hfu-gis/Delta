<template>
  <div>
    <section class="erstesection">
      <article>
        <about />
      </article>
      <nav class="kategorie">
        <kategorien />
      </nav>
      <div class="bilder">
        <v-container class="vorschau">
          <div class="ersteReihe">
            <div class="reihe">
              <header><h2>Lorem</h2></header>
              <v-container class="kontainerfürbild">
                <router-link to="" class="bildrout"
                  ><img src="../assets/122043.jpg" height="250" width="275"
                /></router-link>
              </v-container>
              <article></article>
            </div>
            <div class="reihe">
              <header><h2>Lorem</h2></header>
              <v-container class="kontainerfürbild">
                <router-link to="" class="bildrout"
                  ><img src="../assets/122043.jpg" height="250" width="275"
                /></router-link>
              </v-container>
              <article></article>
            </div>
            <div class="reihe">
              <header><h2>Lorem</h2></header>
              <v-container class="kontainerfürbild">
                <router-link to="" class="bildrout"
                  ><img src="../assets/122043.jpg" height="250" width="275"
                /></router-link>
              </v-container>
              <article></article>
            </div>
            <div class="reihe">
              <header><h2>Lorem</h2></header>
              <v-container class="kontainerfürbild">
                <router-link to="" class="bildrout"
                  ><img src="../assets/122043.jpg" height="250" width="275"
                /></router-link>
              </v-container>
              <article></article>
            </div>
          </div>
          <div class="zweiteReihe">
            <div class="reihe">
              <header><h2>Lorem</h2></header>
              <v-container class="kontainerfürbild">
                <router-link to="" class="bildrout"
                  ><img src="../assets/122043.jpg" height="250" width="275"
                /></router-link>
              </v-container>
              <article></article>
            </div>
            <div class="reihe">
              <header><h2>Lorem</h2></header>
              <v-container class="kontainerfürbild">
                <router-link to="" class="bildrout"
                  ><img src="../assets/122043.jpg" height="250" width="275"
                /></router-link>
              </v-container>
              <article></article>
            </div>
            <div class="reihe">
              <header><h2>Lorem</h2></header>
              <v-container class="kontainerfürbild">
                <router-link to="" class="bildrout"
                  ><img src="../assets/122043.jpg" height="250" width="275"
                /></router-link>
              </v-container>
              <article></article>
            </div>
            <div class="reihe">
              <header><h2>Lorem</h2></header>
              <v-container class="kontainerfürbild">
                <router-link to="" class="bildrout"
                  ><img src="../assets/122043.jpg" height="250" width="275"
                /></router-link>
              </v-container>
              <article></article>
            </div>
          </div>
        </v-container>
      </div>
      <div class="dritteReihe">
        <div class="zwischenbanner">
          <v-container class="zwbanner">
            <router-link to=""
              ><img src="../assets/122043.jpg" height="300px" width="80%"
            /></router-link>
          </v-container>
        </div>
      </div>
    </section>
    <section class="zweitesection"></section>
  </div>
</template>

<script>
import kategorien from "../components/kategorien";
import about from "../components/about";
export default {
  name: "Home",
  data() {
    return {
      filmcover:{
        filmtitel:"",
        imageURL:"",
        filmbeschreibung:""
      }
    };
  },
  // let storage = firebase.storage();
  // let storageRef = storage.ref();
  // let imagesRef=storageRef.child('Mediencover');

  components: {
    about,
    kategorien
  },

};
</script>

<style scoped>
.ersteReihe {
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-content: center;
}
.kontainerfürbild {
  align-self: center;
}
.zweiteReihe {
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 2%;
  margin-bottom: 2%;
}
.vorschau div div {
  border: #424242 solid 1px;
  background: #424242;
  height: 400px;
}
.reihe {
  margin: 2%;
}
.reihe header h2 {
  font-weight: lighter;
  text-align: center;
}
.kontainerfürbild img:hover {
  transition: 1s;
  transform: translateY(10px);
}
.dritteReihe {
  margin-top: 1%;
}
.zwischenbanner {
  justify-content: center;
  align-content: center;
  align-self: center;
  text-align: center;
}
.bildrout {
  align-self: center;
}
.bildrout img {
  align-self: center;
  justify-content: center;
  align-content: center;
}
</style>
