
<template>
    <main>
        <h1>
            Kategorien
        </h1>
        <article>
            <section>
                <h4>Filme</h4>
                <v-row dense>
                    <v-col>
                        <v-card
                                class = card
                                max-width="250"
                                raised
                                elevation="10">
                            <v-img
                                    :src ="card.src"
                                    class="whie--text align-end"
                                    gradient ="to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5)"
                                    height="140">
                                <v-card-title v-text="card.title">
                                </v-card-title>
                            </v-img>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn icon>
                                    <v-icon>mdi-forward</v-icon>
                                </v-btn>
                                <v-btn icon>
                                    <v-icon>mdi-star</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </section>
            <section>
                <h4>Musik</h4>

            </section>
            <section>
                <h4>
                    Videospiele
                </h4>
            </section>
        </article>

    </main>
</template>

<script>
    export default {
        name: "Categorys",
        data: () => {
            card:[]
        },
    };
        mounted() {
        this.card.push({
                title: '',
                src: ''
            })
        }
</script>

<style scoped>
</style>