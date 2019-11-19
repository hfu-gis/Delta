<template>
  <div class="scoreboard_Seiteninhalt">
    <main>
      <section class="überschrift">
        <header>
          <h1>Scoreboard</h1>
        </header>
      </section>
      <section class="scorebard" fluid>
        <v-data-table
          :headers="player"
          :items="infos"
          :sort-by="['score', 'level']"
          :sort-desc="[false, true]"
        ></v-data-table>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Scoreboard",
  data() {
    return {
      player: [
        {
          text: "Player",
          align: "left",
          sortable: "false",
          value: "name"
        },
        { text: "Score", value: "score" },
        { text: "Reached level", value: "level" }
      ],
      infos: [
        {
          name: "Jonathan",
          score: 6,
          level: 2
        },
        {
          name: "Marcus",
          score: 3,
          level: 1
        },
        {
          name: "Niclas",
          score: 100,
          level: 2
        },
        {
          name: "Jonathan",
          score: 8,
          level: 4
        }
      ]
    };
  }
};
</script>

<style scoped>
.scorebard {
  margin-top: 40px;
  width: 70%;
  margin-left: 10%;
}
.überschrift {
  margin-left: 1%;
}
</style>
