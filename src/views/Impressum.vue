<template>
  <div>
    <article>
      <about />
    </article>
    <v-card class="impressum" shaped elevation="20">
      <v-card-title class="überschrift">
        Impressum
      </v-card-title>
      <v-card-text class="text">
        Delta-Shop<br />
        <br />
        vertreten durch die Gesellschafter:<br />

        Niclas Cravaack<br />

        Nick Philipp Häcker<br />

        Marius Kögel<br />

        Johann Schulenburg<br />
        <br />
        Anschrift: <br />
        Musterstraße 1<br />
        PLZ:12345<br />
        Stadt: Musterstadt<br />
        <br />
        Kontakt:<br />
        Tel:12345 678901<br />
        fax:12345 678902<br />
        e-mail: musteradresse@delta-shop.de<br />
        <br />
        Handelsregister: HRA 12345 A<br />
        Amtsgericht Stuttgart<br />
        UST-ID: DE123456789<br />
        <br />
        Geschäftsführer: Der Doktor<br />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import about from "../components/about";
export default {
  name: "Impressum",
  components: {
    about
  }
};
</script>

<style scoped>
.impressum {
  margin-left: 35%;
  margin-right: 35%;
  margin-top: 5%;
}
.überschrift {
  margin-left: 34%;
  font-size: xx-large;
}
.text {
  font-size: large;
  text-align: center;
}
</style>
