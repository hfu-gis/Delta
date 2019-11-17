<template>
  <div>
    <header><h1>Welcome to Bob der Scrumventure</h1></header>
    <section>
      <article>
        <section>
          <h3>Login</h3>
          <label>Name</label>
          <textarea id="name" name="text" cols="16" rows="1"></textarea>
          <label>Password</label>
          <input type="password" id="password" name="text" cols="16" rows="1" />
        </section>
      </article>
    </section>
    <section>
      <article>
        <section><h3>Sign up</h3></section>
        <a href="Registration/Registration.html">
          <button>Registration</button>
        </a>
      </article>
    </section>
    <section>
      <article>
        <a href="scoreboard/Scoreboard.html">
          <button>Scoreboard</button>
        </a>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "LoginBotS"
};
</script>

<style scoped></style>
