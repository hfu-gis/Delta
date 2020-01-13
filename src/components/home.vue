<template>
    <div>
        <v-row>
            <v-col v-for="produkt in produkte" :key="produkt.title">
                <v-card elevation="4" class="carfs">
                    <v-image :src="produkt.src" height="250">
                        <v-card-title v-text="produkt.title" />
                    </v-image>
                    <v-card-text v-text="produkt.text" class="beschreibung"/>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn icon @click="favPush">
                            <v-icon>mdi-heart</v-icon>
                        </v-btn>

                        <v-btn icon @click="$router.push({name:'BlancoArticle'})">
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
        name: "home",
        data: () => {
            return {
                produkte: [],
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
        created() {
            db.collection('Angebot').doc('Neuste Produkte').collection('Filme').get()
            .then(filmeAusDb =>{
                filmeAusDb.forEach(doc =>{
                    this.produkte.push(doc.data())
                })
            })
                .catch((err) => {
                // eslint-disable-next-line
                console.log('nix gefunden', err)
            })
        },
        computed: {},
        // mounted() {
        //     for (let i = 1; i < 9; i++) {
        //         this.cards.push({
        //             title: "Titel" + " " + i,
        //             src: 'https://picsum.photos/140?random=' + i,
        //             text: "Lorem ipsum"
        //         });
        //     }
        // }
    }
</script>

<style scoped>
    .carfs {
        width: 600px;
    }
    .beschreibung{height: 120px}
</style>