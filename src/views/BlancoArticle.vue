<template>
  <div>
    <article>
      <about />
    </article>
    <div>
      <h1 class="überschrift">
        ProductTitle
      </h1>
    </div>
    <div class="flexed">
      <div class="flexitem">
        <v-img class="Bild" src="../assets/122043.jpg" height="600" width="600">
        </v-img>
      </div>
      <div class="flexitem">
        <p class="preis">
          29,99€
        </p>
        <p class="produktbeschreibung">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet.
        </p>
        <v-btn class="zuWarenkorb">
          Zum Warenkorb hinzufügen
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import about from "../components/about";
export default {
  name: "BlancoArticle",
  components: {
    about
  }
};
</script>

<style scoped>
.flexed {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.Bild {
  margin-left: 15%;
  margin-top: 1%;
}
.überschrift {
  margin-left: 5%;
  margin-top: 3%;
}
.produktbeschreibung {
  margin-top: 3%;
  margin-left: 20%;
  margin-right: 40%;
  text-align: justify;
}
.preis {
  margin-left: 20%;
  margin-right: 20%;
  color: red;
  font-size: xx-large;
}
.zuWarenkorb {
  margin-top: 5%;
  margin-left: 20%;
}
</style>
