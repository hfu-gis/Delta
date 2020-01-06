<template>
  <div>
    <v-card
class="profil"
    >
      <v-img
              class="profilbild"
              src="user.imageUrl"
      >
        <v-card-title>{{user.nutzername}}</v-card-title>
      </v-img>

      <v-card-subtitle class="subtitl">Mein Profil:</v-card-subtitle>

      <v-card-text >
        <div class="vertlist">
          <h3>Vorname</h3>
          <p>{{user.vorname}}</p>
        </div>
       <div class="vertlist">
         <h3>Nachname</h3>
         <p>{{user.nachname}}</p>
       </div>
        <div>
          <h3>Nachname</h3>
          <p>{{user.nachname}}</p>
        </div>
        <div>
          <h3>Email</h3>
          <p>{{user.email}}</p>
        </div>
        <div>
          <h3>Zahlmöglichkeit</h3>
        <p>{{user.Zahlmöglichkeit}}</p>
        </div>
        <div>
          <h3>Liferadresse</h3>
          <p>{{user.lieferadresse.land}}</p>
          <p>{{user.lieferadresse.bundesland}}</p>
          <p>{{user.lieferadresse.plz}}</p>
          <p>{{user.lieferadresse.anschrift}}</p>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "profil",
  data () {
    return {
      user:{
        nutzername:'',
        vorname:'',
        nachname:'',
        Zahlmöglichkeit:'',
        lieferadresse:{
          vorname: '',
          nachname: '',
          land: '',
          plz: '',
          anschrift: '',
          stadt: '',
          bundesland: '',
        },
        email:'',
        imageUrl:''
      },

    }
  },

  computed: {

  },

  methods: {

  },

  created() {
  }
};
</script>

<style scoped>
.profil{width: 40%;margin-left: 20%}
  .subtitl{margin-left: 50%}
</style>
