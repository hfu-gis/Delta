<template>
  <div class="home">
    <img alt="BOB logo" src="../assets/Logo_BOB1024_1.png" />
    <Scoreboard msg="Welcome to Your Scoreboard" />
  </div>
</template>

<script>
import Scoreboard from "../components/Scoreboard";
export default {
  name: "score",
  components: {
    Scoreboard
  }
};
</script>
