<template>
  <v-app id="inspire">

    <v-app-bar class="appbar" app clipped-right dark height="120">
      <router-link to="/">
        <v-toolbar-title class="routbild">
          <v-img class="logo" src="./assets/BotsLogo.png"></v-img>
        </v-toolbar-title>
      </router-link>
      <v-spacer />
      <v-container class="suchfeld">
        <v-icon class="suchicon">mdi-magnify</v-icon>
        <v-text-field
          name="suchfeld"
          label="Suche"
          id="suchfeld"
          type="suchfeld"
        ></v-text-field>
      </v-container>
      <v-spacer />
      <router-link to="Registration" class="topnavrouter"
        ><v-btn class="topnavbtn" style="background: #424242"
          >Registration</v-btn
        ></router-link
      >
      <router-link to="Login" class="topnavrouter"
        ><v-btn class="topnavbtn" style="background: #424242"
          >Login</v-btn
        ></router-link
      >
      <router-link to="Profile" style="text-decoration: none" class="profileicon">
        <v-icon class="profilicon" style="background: #424242">mdi-account</v-icon>
      </router-link>

    </v-app-bar>
    <v-content>
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
          to=""
          class="footerlinks"
          id="linkerlink"
          style="text-decoration: none;color: white"
          >Impressum</router-link
        >
        <router-link
          to=""
          class="footerlinks"
          id="mittlererlink"
          style="text-decoration: none;color: white"
          >Kontakt</router-link
        >
        <router-link
          to=""
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
  props: {
    source: String
  },
  methods: {

  },
  data: () => ({

  }),

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
  width: 200px;
  height: 200px;
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
  width: 50%;
  align-self: center;
  margin-right: 5%;
  border: white solid 1px;
  position: fixed;
  margin-left: 15%;
  display: flex;
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
  .profileicon{float: right;margin-right: -23%;}
  .profilicon{align-self: center}
</style>
