<template>
  <div>
      <article>
        <about />
      </article>
    <div class="content">
      <nav class="kategorienliste">
        <v-card elevation="12" width="250" class="list">
          <v-navigation-drawer floating permanent>
            <v-list>
              <v-list-item-title class="ueschrift">Filme:</v-list-item-title>
              <v-list-item
                      v-for="item in filme"
                      :key="item.title"
                      link
                      @click="switchTo(item.page)"
              >
                <v-img :src="item.src">
                  <v-card-title class="titel">{{ item.title }}</v-card-title>
                </v-img>
              </v-list-item>
              <v-list-item-title class="ueschrift">Musik:</v-list-item-title>
              <v-list-item
                      v-for="item in musik"
                      :key="item.title"
                      link
                      @click="switchTo(item.page)"
              >
                <v-img :src="item.src">
                  <v-card-title class="titel">{{ item.title }}</v-card-title>
                </v-img>
              </v-list-item>
              <v-list-item-title class="ueschrift">Games:</v-list-item-title>
              <v-list-item
                      v-for="item in spiele"
                      :key="item.title"
                      link
                      @click="switchTo(item.page)"
              >
                <v-img :src="item.src">
                  <v-card-title class="titel">{{ item.title }}</v-card-title>
                </v-img>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </nav>
      <div class="lis">
        <keep-alive>
          <component v-bind:is="currentPage" class="inhalt"> </component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import about from "../components/about";
import home from "../components/home";
import horror from "../components/horror";
import action from "../components/action";
import doku from "../components/doku";
import scifi from "../components/scifi";
import komödien from "../components/komödien";
import thriller from "../components/thriller";
import krimi from "../components/krimi";
import romantik from "../components/romantik";
import metal from "../components/metal";
import pop from "../components/pop";
import hiphop from "../components/hiphop";
import house from "../components/house";
import techno from "../components/techno";
import rocknroll from "../components/rocknroll";
import rpg from "../components/rpg";
import mmorpg from "../components/mmorpg";
import adventure from "../components/adventure";
import strategie from "../components/strategie";
import shooter from "../components/shooter";
export default {
  name: "Home",
  data: () => ({
    filme: [
      { title: "Horror", page: "horror" },
      { title: "Action", page: "action" },
      { title: "Dokumentation", page: "doku" },
      { title: "Scifi", page: "scifi" },
      { title: "Komödien", page: "komödien" },
      { title: "Thriller", page: "thriller" },
      { title: "Krimi", page: "krimi" },
      { title: "Romantik", page: "romantik" }
    ],
    musik: [
      { title: "Metal", page: "metal" },
      { title: "Pop", page: "pop" },
      { title: "Hip Hop", page: "hiphop" },
      { title: "House", page: "house" },
      { title: "Techno", page: "techno" },
      { title: "Rock n´Roll", page: "rocknroll" }
    ],
    spiele: [
      { title: "RPG", page: "rpg" },
      { title: "MMORPG", page: "mmorpg" },
      { title: "Adventure", page: "adventure" },
      { title: "Strategie", page: "strategie" },
      { title: "Shooter", page: "shooter" }
    ],
    currentPage: "home"
  }),

  // let storage = firebase.storage();
  // let storageRef = storage.ref();
  // let imagesRef=storageRef.child('Mediencover');

    components: {
          pop,
          house,
          hiphop,
          techno,
          rocknroll,
          rpg,
          mmorpg,
          adventure,
          strategie,
          shooter,
          about,
          horror,
          action,
          doku,
          scifi,
          komödien,
          thriller,
          krimi,
          romantik,
          metal,
          home
      },
        methods: {
          switchTo: function(page) {
          this.currentPage = page;
        }
    }
  };
</script>

<style scoped>


  .content {
    display: flex;
  }
  .lis {
    margin-left: 5%;
  }
  .kategorienliste {
    margin-left: 2%;
    margin-top: 0.7%;
  }
  .top {
    font-weight: lighter;
    text-align: center;
    font-size: 40px;
  }
  .titel {
    font-weight: lighter;
  }
  .ueschrift {
    margin-top: 2%;
    font-size: 30px;
  }
</style>
