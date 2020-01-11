<template>
  <div>
    <section class="erstesection">
      <about />
    </section>
    <section class="zweitesection">
      <article class="navi">
        <v-card class="navigation">
          <ol class="navliste">
            <li style="margin-top: 0%">
              <a @click="switchTo('profil')">Profil</a>
            </li>
            <li><a @click="switchTo('editor')">Profileinstellungen</a></li>
            <li><a @click="switchTo('favouriten')">Wunschliste</a></li>
            <li><a @click="switchTo('bestellverlauf')">Bestellverlauf</a></li>
            <li>
              <a @click="switchTo('zahlmoeglichkeiten')">Zahlmöglichkeiten</a>
            </li>
          </ol>
        </v-card>
      </article>
      <keep-alive>
        <component v-bind:is="currentPage" class="inhalt"> </component>
      </keep-alive>
    </section>
  </div>
</template>

<script>
import about from "../components/about";
import profil from "../components/profil";
import editor from "../components/editor";
import favouriten from "../components/favouriten";
import bestellverlauf from "../components/bestellverlauf";
import zahlmoeglichkeiten from "../components/zahlmoeglichkeiten";
export default {
  name: "Profile",
  components: {
    about,
    profil,
    editor,
    favouriten,
    bestellverlauf,
    zahlmoeglichkeiten
  },
  data: () => ({
    currentPage: ""
  }),
  methods: {
    switchTo: function(page) {
      this.currentPage = page;
    }
  }
};
</script>

<style scoped>
.navliste li {
  list-style-type: none;
  margin-top: 50%;
  margin-left: -9%;
}
.navliste a {
  color: white;
}
.navi {
  width: auto;
  background: #424242;
  height: 500px;
  /*border: #424242 solid 1px;*/
  margin-left: 2%;
}
.zweitesection {
  display: flex;
}
.inhalt {
  margin-left: 5%;
  width: 100%;
}
.navigation{height: 100%}
.navliste a:hover {
  color: #9e9e9e;
}
  a{font-weight: lighter;font-size: 20px}
</style>
