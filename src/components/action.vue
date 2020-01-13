<template>
  <div>
    <v-row>
      <v-col v-for="card in cards" :key="card.titel">
        <v-card elevation="4" class="carfs">
          <v-image :src="card.src" height="140">
            <v-card-title v-text="card.titel" />
          </v-image>
          <v-card-text v-text="card.text" />

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon @click="favPush">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon @click="$router.push({ name: 'BlancoArticle' })">
              <v-icon>mdi-table-of-contents</v-icon>
            </v-btn>
            <v-btn icon @click="toCart">
              <v-icon>mdi-cart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import db from "../db";

export default {
  name: "action",
  data: () => {
    return {
      alreadyPushed: false,
      cards: [],
      user: {
        favouriten: [],
        cart: []
      }
    };
  },
  methods: {
    favPush: function() {
      this.user.favouriten.push({
        title: this.cart.title,
        src: this.cart.src,
        text: this.cart.text
      });
      // eslint-disable-next-line
          console.log('did')
    },
    toCart: function() {
      let x = this.card;
      this.user.cart.push(x);
    }
  },
  computed: {},
  created() {
    db.collection("Angebot")
      .doc("Filme")
      .collection("Action")
      .get()
      .then(filmeAusDb => {
        filmeAusDb.forEach(doc => {
          this.cards.push(doc.data());
        });
      })
      .catch(err => {
        // eslint-disable-next-line
              console.log('nix gefunden', err)
      });
  },
  mounted() {
    // for (let i = 1; i < 16; i++) {
    //   this.cards.push({
    //     title: "Titel" + " " + i,
    //     src: "./assets/placeholder/" + i,
    //     text: "Lorem ipsum"
    //   });
    // }
  }
};
</script>

<style scoped>
.carfs {
  width: 450px;
}
</style>
