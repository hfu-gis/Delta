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
  name: "house",
  data: () => {
    return {
      cards: [],
      user: {
        favouriten: [],
        cart: []
      }
    };
  },
  methods: {
    favPush: function() {
      let x = this.card;
      this.user.favouriten.push(x);
      // eslint-disable-next-line
                console.log('did')
    },
    toCart: function() {
      let x = this.card;
      this.user.cart.push(x);
    }
  },
  computed: {},
  mounted() {
    // for (let i = 1; i < 16; i++) {
    //   this.cards.push({
    //     title: "Titel" + " " + i,
    //     src: "./assets/placeholder/" + i,
    //     text: "Lorem ipsum"
    //   });
    // }
  },
  created() {
    db.collection("Angebot")
      .doc("Musik")
      .collection("House")
      .get()
      .then(musikausDB => {
        musikausDB.forEach(doc => {
          this.cards.push(doc.data());
        });
      })
      .catch(err => {
        // eslint-disable-next-line
              console.log('nix gefunden', err)
      });
  }
};
</script>

<style scoped>
.carfs {
  width: 450px;
}
</style>
