<template>
  <v-app id="inspire">
    <v-app-bar class="appbar" app clipped-right dark height="120">
      <router-link to="/">
        <v-toolbar-title class="routbild">
          <v-img class="logo" src="./assets/DeltaLogo.png"></v-img>
        </v-toolbar-title>
      </router-link>
      <v-spacer />

      <v-container class="suchfeld">
        <v-icon class="suchicon">mdi-magnify</v-icon>

        <label>
          <input type="search" list="Shop" />
          <datalist id="Shop">
            <option>Pulp Fiction</option>
            <option>Schimpansen</option>
            <option>Conjuring 2</option>
            <option>Leuchtturm</option>
            <option>Irishman</option>
            <option>Joker</option>
            <option>Titanic</option>
            <option>Arrival</option>
            <option>ExMachina</option>
            <option>Star Wars</option>
            <option>Parasite</option>
            <option>Uncut Gems</option>
            <option>Counter Strike Global Offense</option>
            <option>Grand Theft Auto 5</option>
            <option>Rainbow Six Siege</option>
            <option>Red Dead Redemption 2</option>
            <option>Civilisation 6</option>
            <option>Rome 2</option>
            <option>Stellaris</option>
          </datalist>
        </label>
      </v-container>
      <v-spacer />
      <v-btn
        v-if="!this.userIsAuthenticated"
        class="topnavbtn"
        style="background: red;float:right;margin-right: 2%; border: black solid 1px"
        @click="$router.push({ name: 'Registration' })"
        >Registration
      </v-btn>
      <v-btn
        v-if="!this.userIsAuthenticated"
        class="topnavbtn"
        style="background: red;float:right;margin-right: 2%; border: black solid 1px"
        @click="$router.push({ name: 'Login' })"
        >Login
      </v-btn>
      <v-icon
        v-if="this.userIsAuthenticated"
        class="profilicon"
        style="background: #424242;float: right;margin-right: 3%;font-size:40px"
        @click="$router.push({ name: 'Profile' })"
        >mdi-account
      </v-icon>
    </v-app-bar>
    <v-content>
      <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        dark
        fixed
        bottom
        right
        color="red"
        @click="toTop"
        class="up"
      >
        <v-icon>mdi-chevron-triple-up</v-icon>
      </v-btn>
      <router-view />
    </v-content>

    <v-footer class="footer" app>
      <section class="cright">
        &copy; {{ new Date().getFullYear() }}
        <strong>Delta Shop</strong>
      </section>
      <v-spacer />
      <section class="footerergänzungslinks">
        <router-link
          to="impressum"
          class="footerlinks"
          id="linkerlink"
          style="text-decoration: none;color: white"
          >Impressum</router-link
        >
        <router-link
          to="Kontakt"
          class="footerlinks"
          id="mittlererlink"
          style="text-decoration: none;color: white"
          >Kontakt</router-link
        >
        <router-link
          to="AGB"
          class="footerlinks"
          id="rechterlink"
          style="text-decoration: none;color: white"
          >AGB</router-link
        >
      </section>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  methods: {
    // scrollt die Seite hoch
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 10;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  },
  data: () => ({
    fab: false
  }),
  computed: {
    // gibt den User von den auths zurück
    user() {
      return this.$store.getters.user;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    }
  },

  created() {
    this.$vuetify.theme.dark = true;
    // this.$router.push({path: '/home'})
  }
};
</script>
<style scoped>
.logo {
  height: 80px;
  width: 100px;
  align-content: flex-start;
  align-self: center;
  margin-top: 20%;
}

.routbild {
  width: 120px;
  height: 140px;
  margin-left: 10%;
  align-self: center;
}

.logo:hover {
  height: 120px;
  width: 140px;
  transition: 1s;
}

.topnavrouter {
  text-decoration: none;
  justify-content: flex-end;
  align-items: center;
  margin-right: 6%;
  align-self: center;
  order: 2;
}

.topnavrouter:hover,
.topnavrouter:focus {
  text-decoration: underline solid red;
  font-weight: bold;
  -webkit-transform: translateY(4px);
  transition: 0.5s;
  color: white;
  text-underline-position: under;
}

.cright {
  float: left;
}

.footerergänzungslinks {
  margin-right: 15%;
  color: white;
}

.footerlinks:hover {
  color: #9e9e9e;
}

#linkerlink {
  margin-right: 50%;
}

#mittlererlink {
  margin-right: 50%;
}

#rechterlink {
  margin-right: 50%;
}

.suchfeld {
  width: 30%;
  align-self: center;
  margin-right: 5%;
  position: fixed;
  left: 35%;
  display: flex;
  border: 2px solid #999;
  border-radius: 0.5em;
}

.suchicon {
  margin-right: 1%;
}

.appbar {
  justify-content: space-between;
}

.cright strong {
  font-weight: lighter;
}

.profileicon {
  float: right;
  margin-right: -23%;
}

.profilicon {
  align-self: center;
}

.up {
  margin-bottom: 2%;
}
</style>
