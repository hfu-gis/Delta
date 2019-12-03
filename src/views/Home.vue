<template>
  <div>
    <section class="erstesection">
      <article class="zwischenelement">
        <input id="checkbox" type="checkbox">
        <section class="boxinhalt">
        </section>
        <v-container class="labelbox">
          <label for="checkbox" class="textbutton"><h1>Was ist der Delta Shop?</h1></label>
        </v-container>
      </article>
      <nav class="kategorie">
        <kategorien/>
      </nav>
      <v-container>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </v-container>
    </section>
  </div>
</template>

<script>

  import kategorien from "../components/kategorien";
export default {
  name: "Home",
  components:{
    kategorien
  }
};
</script>

<style scoped>
  .boxinhalt {display: none;height:0;-webkit-animation-name: example;-webkit-animation-duration: 2s;animation-name: example;animation-duration: 2s;}
  @-webkit-keyframes example { from {height: 0;} to {height: 200px} }
  #checkbox {display:none;}
  .labelbox{text-align: center;}
  #checkbox:checked ~ .boxinhalt {display: block;height: 200px;}
  .textbutton h1{font-size: 50px;font-weight: lighter}
</style>
