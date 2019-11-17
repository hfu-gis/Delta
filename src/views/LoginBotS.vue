<template>
  <div>
    <header><h1 class="überschrift">Welcome to Bob the Scrumventure</h1></header>
    <section>
      <article>
        <section class="login">
          <h3>Login:</h3>
          <label>Name&nbsp;</label>
          <textarea class="input" id="name" name="text" cols="16" rows="1"></textarea>
          <label>&nbsp;Password&nbsp;</label>
          <input class="input" type="password" id="password" name="text" cols="16" rows="1" />
        </section>
      </article>
    </section>
    <section class="reg">
      <article>
        <a href="Registration/Registration.html">
          <button class="button"><u>Sign Up</u></button>
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

<style scoped>
  .überschrift{
  margin-left:30%;
    color: white;
  }
  .login{
    margin-left: 50%;
    margin-top: 5%;
    color: white;
  }
  .reg{
    margin-left: 30%;
    margin-top: 5%;
    color:white;
  }
  .button{
    color: white;
  }
  .input{
    background:white;
  }

</style>
