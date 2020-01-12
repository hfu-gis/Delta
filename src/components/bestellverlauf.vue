<template>
  <div>
    <v-col v-for="card in cards" :key="card.title" class="verlauf">
      <v-card elevation="4">
        <v-img :src="card.src" class="white--text align-end" height="140">
          <v-card-title v-text="card.title" />
        </v-img>

        <v-card-actions>
          <v-spacer></v-spacer>

          <!--          <v-btn icon>-->
          <!--            <v-icon>mdi-heart</v-icon>-->
          <!--          </v-btn>-->

          <!--          <v-btn icon>-->
          <!--            <v-icon>mdi-bookmark</v-icon>-->
          <!--          </v-btn>-->

          <!--          <v-btn icon>-->
          <!--            <v-icon>mdi-share-variant</v-icon>-->
          <!--          </v-btn>-->
        </v-card-actions>
      </v-card>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "bestellverlauf",
  data: () => {
    return {
      cards: []
    };
  },
  mounted() {
    for (let i = 1; i < 6; i++) {
      this.cards.push({
        title: "Kauf " + i,
        src: "./assets/placeholder"
      });
    }
  }
};
</script>

<style scoped>
.verlauf {
  width: 40%;
  margin-left: 22%;
}
</style>
