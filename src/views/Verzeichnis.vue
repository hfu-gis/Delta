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
                @click="$router.push({ name: item.to })"
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
                @click="$router.push({ name: item.to })"
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
import horror from "../components/horror";
import action from "../components/action";
import doku from "../components/doku";
import scifi from "../components/scifi";
import komödien from "../components/komödien";
import thriller from "../components/thriller";
import krimi from "../components/krimi";
import romantik from "../components/romantik";
export default {
  name: "Verzeichnis",
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
      { title: "Metal" },
      { title: "Pop" },
      { title: "Hip Hop" },
      { title: "House" },
      { title: "Techno" },
      { title: "Rock n´Roll" }
    ],
    spiele: [
      { title: "RPG" },
      { title: "MMORPG" },
      { title: "Adventure" },
      { title: "Strategie" },
      { title: "Shooter" }
    ],
    currentPage: ""
  }),
  components: {
    about,
    horror,
    action,
    doku,
    scifi,
    komödien,
    thriller,
    krimi,
    romantik
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
  margin-left: 3%;
}
</style>
