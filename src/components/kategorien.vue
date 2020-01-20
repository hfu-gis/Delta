<template>
  <nav class="kategorienliste">
    <v-card elevation="12" width="250" class="list">
      <v-navigation-drawer floating permanent>
        <v-list>
          <v-list-item-title class="ueschrift">Filme:</v-list-item-title>
          <v-list-item
            v-for="item in filme"
            :key="item.title"
            link
            @click="$router.push({ name: item.to })"
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
</template>

<script>
export default {
  name: "kategorien",
  data: () => ({
    filme: [
      {
        // navigationsleisteninhalt aller Kategorien
        title: "Horror",
        src: "../assets/placeholder/3-days-to-kill-2.jpg",
        to: "Verzeichnis"
      },
      {
        title: "Action",
        src: "../assets/placeholder/3-days-to-kill-2.jpg",
        to: "Verzeichnis"
      },
      {
        title: "Dokumentation",
        src: "../assets/placeholder/3-days-to-kill-2.jpg",
        to: "Verzeichnis"
      },
      {
        title: "Scifi",
        src: "../assets/placeholder/3-days-to-kill-2.jpg",
        to: "Verzeichnis"
      },
      {
        title: "Komödien",
        src: "../assets/placeholder/3-days-to-kill-2.jpg",
        to: "Verzeichnis"
      },
      {
        title: "Thriller",
        src: "../assets/placeholder/3-days-to-kill-2.jpg",
        to: "Verzeichnis"
      },
      {
        title: "Krimi",
        src: "../assets/placeholder/3-days-to-kill-2.jpg",
        to: "Verzeichnis"
      },
      {
        title: "Romantik",
        src: "../assets/placeholder/3-days-to-kill-2.jpg",
        to: "Verzeichnis"
      }
    ],
    musik: [
      {
        title: "Metal",
        url: "../assets/placeholder/3-days-to-kill-2.jpg",
        to: "Verzeichnis"
      },
      {
        title: "Pop",
        src: "../assets/placeholder/3-days-to-kill-2.jpg",
        to: "Verzeichnis"
      },
      {
        title: "Hip Hop",
        src: "../assets/placeholder/3-days-to-kill-2.jpg",
        to: "Verzeichnis"
      },
      {
        title: "House",
        src: "../assets/placeholder/3-days-to-kill-2.jpg",
        to: "Verzeichnis"
      },
      {
        title: "Techno",
        src: "../assets/placeholder/3-days-to-kill-2.jpg",
        to: "Verzeichnis"
      },
      {
        title: "Rock n´Roll",
        src: "../assets/placeholder/3-days-to-kill-2.jpg",
        to: "Verzeichnis"
      }
    ],
    spiele: [
      {
        title: "RPG",
        url: "../assets/placeholder/3-days-to-kill-2.jpg",
        to: "Verzeichnis"
      },
      {
        title: "MMORPG",
        src: "../assets/placeholder/3-days-to-kill-2.jpg",
        to: "Verzeichnis"
      },
      {
        title: "Adventure",
        src: "../assets/placeholder/3-days-to-kill-2.jpg",
        to: "Verzeichnis"
      },
      {
        title: "Strategie",
        src: "../assets/placeholder/3-days-to-kill-2.jpg",
        to: "Verzeichnis"
      },
      {
        title: "Shooter",
        src: "../assets/placeholder/3-days-to-kill-2.jpg",
        to: "Verzeichnis"
      }
    ]
  })
};
</script>

<style scoped>
.list {
  margin-left: 15%;
  margin-top: 14%;
}
.ueschrift {
  margin-top: 2%;
  font-size: 30px;
}
.titel {
  font-weight: lighter;
}
</style>
