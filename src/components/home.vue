<template>
  <div>
    <div class="seitenanzahl">
      <v-btn
        @click="products = 5"
        style="background: red;border:black solid 1px"
        text
        >5</v-btn
      >
      <v-btn
        @click="products = 10"
        style="background: red;border:black solid 1px;margin-left: 1em"
        text
        >10
      </v-btn>
      <v-btn
        @click="products = 15"
        style="background: red;border:black solid 1px;margin-left: 1em"
        text
        >15
      </v-btn>
      <v-btn
        @click="products = produkte.length"
        style="background: red;border:black solid 1px;margin-left: 1em"
        text
        >Alle
      </v-btn>
    </div>
    <v-row>
      <v-col v-for="index of products" :key="index">
        <v-card elevation="4" class="carfs" v-if="index <= produkte.length">
          <v-image :src="produkte[index - 1].src" height="250">
            <v-card-title v-text="produkte[index - 1].titel" />
          </v-image>
          <v-card-text v-text="produkte[index - 1].text" class="beschreibung" />

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
  name: "home",
  data: () => {
    return {
      products: 0,
      produkte: [],
      user: {
        favoriten: [],
        cart: []
      }
    };
  },
  props: {},
  methods: {
    // schiebt favs und kaufobjeckte in den jewieligen Array
    updateFav: function() {
      let self = this;
      db.collection("Nutzer")
        .doc("Nickhaec")
        .update({
          favoriten: self.user.favoriten
        });
    },
    // schiebt favs und kaufobjeckte in den jewieligen Array
    updateCart: function() {
      let self = this;
      db.collection("Nutzer")
        .doc("Nickhaec")
        .update({
          warenkorb: self.user.cart
        });
    },
    resetprodukte: function() {
      this.products = [];
    },
    produktzahl: function(zahl) {
      this.products = zahl;
    },

    favPush: function(index) {
      this.user.favoriten.push(this.produkte[index]);
      this.updateFav();
      // eslint-disable-next-line
                console.log('did')
    },
    toCart: function(index) {
      this.user.cart.push(this.produkte[index]);
      this.updateCart();
    }
  },
  // gettet alles aus DB
  created() {
    db.collection("Angebot")
      .doc("Neuste Produkte")
      .collection("Filme")
      .get()
      .then(filmeAusDb => {
        filmeAusDb.forEach(doc => {
          this.produkte.push(doc.data());
        });
      });
    db.collection("Angebot")
      .doc("Musik")
      .collection("Metal")
      .get()
      .then(musikausDB => {
        musikausDB.forEach(doc => {
          this.produkte.push(doc.data());
        });
      });
    db.collection("Angebot")
      .doc("Filme")
      .collection("Thriller")
      .get()
      .then(filmeausDB => {
        filmeausDB.forEach(doc => {
          this.produkte.push(doc.data());
        });
      });
    db.collection("Angebot")
      .doc("Games")
      .collection("Strategie")
      .get()
      .then(spieleausDB => {
        spieleausDB.forEach(doc => {
          this.produkte.push(doc.data());
        });
      });
    db.collection("Angebot")
      .doc("Musik")
      .collection("Techno")
      .get()
      .then(musikausDB => {
        musikausDB.forEach(doc => {
          this.produkte.push(doc.data());
        });
      });
    db.collection("Angebot")
      .doc("Filme")
      .collection("Romantik")
      .get()
      .then(filmeausDB => {
        filmeausDB.forEach(doc => {
          this.produkte.push(doc.data());
        });
      });
    db.collection("Angebot")
      .doc("Games")
      .collection("Shooter")
      .get()
      .then(spieleausDB => {
        spieleausDB.forEach(doc => {
          this.produkte.push(doc.data());
        });
      });
    db.collection("Angebot")
      .doc("Games")
      .collection("RPG")
      .get()
      .then(spieleausDB => {
        spieleausDB.forEach(doc => {
          this.produkte.push(doc.data());
        });
      });
    db.collection("Angebot")
      .doc("Filme")
      .collection("Science-Fiction")
      .get()
      .then(filmeausDB => {
        filmeausDB.forEach(doc => {
          this.produkte.push(doc.data());
        });
      });
    db.collection("Angebot")
      .doc("Musik")
      .collection("Rock")
      .get()
      .then(musikausDB => {
        musikausDB.forEach(doc => {
          this.produkte.push(doc.data());
        });
      });
    db.collection("Angebot")
      .doc("Filme")
      .collection("Krimi")
      .get()
      .then(filmeausDB => {
        filmeausDB.forEach(doc => {
          this.produkte.push(doc.data());
        });
      });
    db.collection("Angebot")
      .doc("Games")
      .collection("MMORPG")
      .get()
      .then(spieleausDB => {
        spieleausDB.forEach(doc => {
          this.produkte.push(doc.data());
        });
      });
    db.collection("Angebot")
      .doc("Neuste Produkte")
      .collection("Games")
      .get()
      .then(gamesAusDb => {
        gamesAusDb.forEach(doc => {
          this.produkte.push(doc.data());
        });
      });
    db.collection("Angebot")
      .doc("Filme")
      .collection("Action")
      .get()
      .then(filmeAusDb => {
        filmeAusDb.forEach(doc => {
          this.produkte.push(doc.data());
        });
      });
    db.collection("Angebot")
      .doc("Games")
      .collection("Adventure")
      .get()
      .then(spieleausDB => {
        spieleausDB.forEach(doc => {
          this.produkte.push(doc.data());
        });
      });
    db.collection("Angebot")
      .doc("Filme")
      .collection("Dokumentation")
      .get()
      .then(filmeAusDb => {
        filmeAusDb.forEach(doc => {
          this.produkte.push(doc.data());
        });
      });
    db.collection("Angebot")
      .doc("Musik")
      .collection("Hip Hop")
      .get()
      .then(musikausDB => {
        musikausDB.forEach(doc => {
          this.produkte.push(doc.data());
        });
      });
    db.collection("Angebot")
      .doc("Filme")
      .collection("Komödien")
      .get()
      .then(filmeausDB => {
        filmeausDB.forEach(doc => {
          this.produkte.push(doc.data());
        });
      });
    db.collection("Angebot")
      .doc("Musik")
      .collection("Pop")
      .get()
      .then(musikausDB => {
        musikausDB.forEach(doc => {
          this.produkte.push(doc.data());
        });
      });
    db.collection("Angebot")
      .doc("Filme")
      .collection("Horror")
      .get()
      .then(filmeausDB => {
        filmeausDB.forEach(doc => {
          this.cards.push(doc.data());
        });
      });
    db.collection("Angebot")
      .doc("Musik")
      .collection("House")
      .get()
      .then(musikausDB => {
        musikausDB.forEach(doc => {
          this.produkte.push(doc.data());
        });
      });
    db.collection("Angebot")
      .doc("Neuste Produkte")
      .collection("Musik")
      .get()
      .then(musikAusDb => {
        musikAusDb.forEach(doc => {
          this.produkte.push(doc.data());
          this.products = this.produkte.length;
        });
      })
      .catch(err => {
        // eslint-disable-next-line
                    console.log('nix gefunden', err)
      });
  },
  computed: {}
};
</script>

<style scoped>
.carfs {
  width: 600px;
}

.beschreibung {
  height: 120px;
  background-attachment: scroll;
}

.seitenanzahl {
  display: flex;
}
</style>
