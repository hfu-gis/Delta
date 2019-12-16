<template>
<<<<<<< HEAD
  <main>
    <h1>
      Kategorien
    </h1>
    <article>
      <section>
        <h4>Filme</h4>
        <v-card class="card" max-width="250" raised elevation="10">
          <v-card-title>
            Horror
          </v-card-title>
          <v-card-text>
            alles rund ums Gruselige!
          </v-card-text>
        </v-card>
        <v-card class="card" max-width="250" raised elevation="10">
          <v-card-title>
            Action
          </v-card-title>
          <v-card-text>
            Nur die harten kommen in den Garten!
          </v-card-text>
        </v-card>
        <v-card class="card" max-width="250" raised elevation="10">
          <v-card-title>
            Komödien
          </v-card-title>
          <v-card-text>
            Lachen ist gesund!
          </v-card-text>
        </v-card>
        <v-card class="card" max-width="250" raised elevation="10">
          <v-card-title>
            Liebesfilme
          </v-card-title>
          <v-card-text>
            Für die Gefühlvollen unter uns
          </v-card-text>
        </v-card>
        <v-card class="card" max-width="250" raised elevation="10">
          <v-card-title>
            Dramen
          </v-card-title>
          <v-card-text>
            Für die, die das Leben spüren wollen
          </v-card-text>
        </v-card>
        <v-card class="card" max-width="250" raised elevation="10">
          <v-card-title>
            SciFi
          </v-card-title>
          <v-card-text>
            Bis zu Unendlichkeit und noch viel weiter!
          </v-card-text>
        </v-card>
        <v-card class="card" max-width="250" raised elevation="10">
          <v-card-title>
            Kinderfilme
          </v-card-title>
          <v-card-text>
            Für die Kleinsten das Größte
          </v-card-text>
        </v-card>
      </section>
      <section>
        <h4>
          Musik
        </h4>
        <v-card class="card" max-width="250" raised elevation="10">
          <v-card-title>
            Heavy-Metal
          </v-card-title>
          <v-card-text>
            Harte Töne für harte Kerle
          </v-card-text>
        </v-card>
        <v-card class="card" max-width="250" raised elevation="10">
          <v-card-title>
            Jazz
          </v-card-title>
          <v-card-text>
            Sanfter Groove zum entspannen
          </v-card-text>
        </v-card>
        <v-card class="card" max-width="250" raised elevation="10">
          <v-card-title>
            Klassik
          </v-card-title>
          <v-card-text>
            für Kenner
          </v-card-text>
        </v-card>
        <v-card class="card" max-width="250" raised elevation="10">
          <v-card-title>
            Rock n' Roll
          </v-card-title>
          <v-card-text>
            Für die Jung-Gebliebenen
          </v-card-text>
        </v-card>
        <v-card class="card" max-width="250" raised elevation="10">
          <v-card-title>
            Techno
          </v-card-title>
          <v-card-text>
            Mir fällt nix mehr ein
          </v-card-text>
        </v-card>
        <v-card class="card" max-width="250" raised elevation="10">
          <v-card-title>
            Swing
          </v-card-title>
          <v-card-text>
            Schwing das Tanzbein Partner!
          </v-card-text>
        </v-card>
        <v-card class="card" max-width="250" raised elevation="10">
          <v-card-title>
            Country
          </v-card-title>
          <v-card-text>
            Fernweh auf der Country Road
          </v-card-text>
        </v-card>
      </section>
      <section>
        <h4>
          Download Inhalte
        </h4>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  name: "Categorys"
};
</script>

<style scoped></style>
=======
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
        data: ()=>{
            card:[]
        }
    };
    mounted()
        this.card.push({
        title:'',
        src:''
        })

    }
</script>

<style scoped>



</style>
>>>>>>> 634cddb5c835ff9f85b062d135e8277463fc9ef7
