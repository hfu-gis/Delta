<template>
  <div class="inhalt">
    <v-card class="bildporf">
      <v-img class="profilbild" src="user.imageUrl">
        <v-card-title class="usna">{{ user.username }}</v-card-title>
      </v-img>
    </v-card>
    <v-card class="profil">
      <v-card-title class="subtitl">Mein Profil:</v-card-title>

      <v-card-text>
        <div class="vertlist">
          <h3>Vorname:</h3>
          <p class="cont">{{ user.vorname }}</p>
        </div>
        <div class="vertlist">
          <h3>Nachname:</h3>
          <p class="cont">{{ user.nachname }}</p>
        </div>
        <div class="vertlist">
          <h3>Username:</h3>
          <p class="cont">{{ user.username }}</p>
        </div>
        <div class="vertlist">
          <h3>Email:</h3>
          <p class="cont">{{ user.email }}</p>
        </div>
        <div class="vertlist">
          <h3>Zahlmöglichkeit:</h3>
          <p class="cont">{{ user.Zahlmöglichkeit }}</p>
        </div>
        <div class="vertlist">
          <h3>Lieferadresse:</h3>
          <div class="cont">
            <p>{{ user.lieferadresse.land }}</p>
            <p>{{ user.lieferadresse.bundesland }}</p>
            <p>{{ user.lieferadresse.plz }}</p>
            <p>{{ user.lieferadresse.anschrift }}</p>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import db from "../db";
export default {
  name: "profil",
  data() {
    return {
      user: {}
    };
  },

  computed: {},

  methods: {},

  created() {
    // zeigt Daten aus DB an
    db.collection("Nutzer")
      .doc("Nickhaec")
      .get()
      .then(doc => {
        this.user = doc.data();
      })
      .catch(err => {
        // eslint-disable-next-line
      console.log('Nutzer nicht gefunden', err)
      });
  }
};
</script>

<style scoped>
.profil {
  width: 40%;
  margin-left: 20%;
}
.subtitl {
  margin-left: 30%;

  color: white;
}
.bildporf {
  width: 200px;
  height: 300px;
}
.inhalt {
  display: flex;
}
.vertlist {
  margin-top: 5%;
  display: flex;
}
.usna {
  text-align: center;
}
.cont {
  position: absolute;
  left: 50%;
}
</style>
