<template>
  <div>
    <v-row>
      <v-col v-for="(card, index) in cards" :key="card.titel">
        <v-card elevation="4" class="carfs">
          <v-image :src="card.src" height="140">
            <v-card-title v-text="card.titel" />
          </v-image>
          <v-card-text v-text="card.text" />

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon @click="favPush(index)">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon @click="$router.push({ name: 'BlancoArticle' })">
              <v-icon>mdi-table-of-contents</v-icon>
            </v-btn>
            <v-btn icon @click="toCart(index - 1)">
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
  name: "adventure",
  data: () => {
    return {
      cards: [],
      user: {
        favoriten: [],
        cart: []
      }
    };
  },
  methods: {
    favPush: function(index) {
      this.user.favoriten.push(this.produkte[index]);
      this.updateFav();
      // eslint-disable-next-line
      console.log('did')
    },
    updateFav: function() {
      let self = this;
      db.collection("Nutzer")
        .doc("Nickhaec")
        .update({
          favoriten: self.user.favoriten
        });
    },
    updateCart: function(){
      let self = this;
      db.collection("Nutzer")
              .doc("Nickhaec")
              .update({
                warenkorb: self.user.cart
              });
    },
    toCart: function(index) {
      this.user.cart.push(this.produkte[index]);
      this.updateCart();
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
      .doc("Games")
      .collection("Adventure")
      .get()
      .then(spieleausDB => {
        spieleausDB.forEach(doc => {
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
