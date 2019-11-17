<template>
  <div>
    <main>
      <h1>About the Game</h1>
      <hr />
      "Bob the Scrumventure" is a rogue-like RPG browser game made with
      javascript. It is set in a futuristic dystopian world with cyberpunk/retro
      influences.
      <p></p>
      Fight your way through the dungeon with never ending, procedurally
      generated levels and turn-based gameplay.
      <p></p>
      This game is a non-profit student project and free for everyone! So
      <a href="/Registration">join now!</a>.
      <hr />
      <input
        type="submit"
        class="playnowbtn"
        value="Play Now"
        onclick="window.location='Game.html';"
      />
    </main>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped></style>
