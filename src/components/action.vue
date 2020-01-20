<template>
  <div>
    <v-row>
      <v-col v-for="(card, index) in cards" :key="card.titel">
        <v-card elevation="4" class="carfs">
          <v-image :src="card.src" height="140">
            <v-card-title v-text="card.titel" />
          </v-image>
          <v-card-text v-text="card.text" class="beschreibung" />

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn icon @click="favPush(index - 1)">
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
  name: "action",
  data: () => {
    return {
      alreadyPushed: false,
      cards: [],
      user: {
        favoriten: [],
        cart: []
      }
    };
  },
  methods: {
    updateFav: function() {
      let self = this;
      db.collection("Nutzer")
        .doc("Nickhaec")
        .get()
        .then(res => {
          for (let i in res.data().favoriten) {
            self.user.favoriten.push(i);
          }
          db.collection("Nutzer")
            .doc("Nickhaec")
            .update({
              favoriten: self.user.favoriten
            });
        });
    },
    updateCart: function() {
      let self = this;
      db.collection("Nutzer")
        .doc("Nickhaec")
        .update({
          warenkorb: self.user.cart
        });
    },
    favPush: function(index) {
      this.user.favoriten.push(this.cards[index]);
      this.updateFav();
      // eslint-disable-next-line
      console.log('did')
    },
    toCart: function(index) {
      this.user.cart.push(this.produkte[index]);
      this.updateCart();
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
  mounted() {}
};
</script>

<style scoped>
.carfs {
  width: 450px;
}
/* .beschreibung{height: 120px;background-attachment: fixed;} */
</style>
