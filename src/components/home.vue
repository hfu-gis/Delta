<template>
    <div>
        <div class="seitenanzahl">
            <v-btn @click="products = 5" style="background: #424242" text>5</v-btn>
            <v-btn
                    @click="products = 10"
                    style="background: #424242;margin-left: 1em"
                    text
            >10
            </v-btn
            >
            <v-btn
                    @click="products = 15"
                    style="background: #424242;margin-left: 1em"
                    text
            >15
            </v-btn
            >
            <v-btn
                    @click="products = produkte.length"
                    style="background: #424242;margin-left: 1em"
                    text
            >Alle
            </v-btn
            >
        </div>
        <v-row>
            <v-col v-for="index of products" :key="index">
                <v-card elevation="4" class="carfs" v-if="index <= produkte.length">
                    <v-image :src="produkte[index - 1].src" height="250">
                        <v-card-title v-text="produkte[index - 1].titel"/>
                    </v-image>
                    <v-card-text v-text="produkte[index - 1].text" class="beschreibung"/>

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
<<<<<<< HEAD
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
    updateFav: function() {
      let self = this;
      db.collection("Nutzer")
        .doc("Nickhaec")
        .update({
          favoriten: self.user.favoriten
        });
    },
    resetprodukte: function() {
      this.products = [];
    },
    produktzahl: function(zahl) {
     
      this.products = zahl;
    },
=======
    import db from "../db";
>>>>>>> 616527b59f8696c451286f5926a6b84d117bd92a

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
            updateFav: function () {
                let self = this;
                db.collection("Nutzer")
                    .doc("Nickhaec")
                    .update({
                        favoriten: self.user.favoriten
                    });
            },
            updateCart: function () {
                let self = this;
                db.collection("Nutzer")
                    .doc("Nickhaec")
                    .update({
                        warenkorb: self.user.warenkorb
                    });
            },
            resetprodukte: function () {
                this.products = [];
            },
            produktzahl: function (zahl) {
                /*this.resetprodukte();
                for (let i = 0; i <= this.produkte.length; i++) {
                  if (i < zahl) {
                    // let j = this.produkte[i]
                    this.products.push(this.produkte[i]);
                  }
                }*/
                this.products = zahl;
            },

            favPush: function (index) {
                this.user.favoriten.push(this.produkte[index]);
                this.updateFav();
                // eslint-disable-next-line
                console.log('did')
<<<<<<< HEAD
    },
    toCart: function() {
      let x = this.card;
      this.user.cart.push(x);
    }
  },
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
      .doc("Neuste Produkte")
      .collection("Games")
      .get()
      .then(gamesAusDb => {
        gamesAusDb.forEach(doc => {
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
=======
            },
            toCart: function (index) {
                this.user.warenkorb.push(this.produkte[index]);
                this.updateCart();
            }
        },
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
                .doc("Neuste Produkte")
                .collection("Games")
                .get()
                .then(gamesAusDb => {
                    gamesAusDb.forEach(doc => {
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
        // mounted() {
        //     for (let i = 1; i < 9; i++) {
        //         this.cards.push({
        //             title: "Titel" + " " + i,
        //             src: 'https://picsum.photos/140?random=' + i,
        //             text: "Lorem ipsum"
        //         });
        //     }
        // }
    };
>>>>>>> 616527b59f8696c451286f5926a6b84d117bd92a
</script>

<style scoped>
    .carfs {
        width: 600px;
    }

    .beschreibung {
        height: 120px;
    }

    .seitenanzahl {
        display: flex;
    }
</style>
