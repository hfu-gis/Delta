<template>
  <v-app id="inspire">

    <v-navigation-drawer v-model="drawer" app right clipped>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-action>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-right>

      <router-link to="">
      <v-toolbar-title><v-img height="60px" width="80px" src="./assets/BotsLogo.png"></v-img></v-toolbar-title>
      </router-link>
      <v-spacer/>
      <v-btn class="mr-2" to="Login">Login</v-btn>
      <v-btn to="Registration"> Register </v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
      <router-link to="/Impressum" style="justify-content: center; text-decoration: none; margin-left: 45%">Impressum</router-link>
    </v-footer>
  </v-app>
</template>

<script>
  import home from "./components/home";
  export default {
    props: {
      source: String,
    },
    component:{
      home
    },

    data: () => ({
      drawer: false,
      items: [
        { title: "Profil", to: "Profil" , icon: 'mdi-account-details'},
        { title: "Play", to: "Game" , icon: 'mdi-run'},
        { title: "FAQ", to: "Faq" , icon: 'mdi-help'},
        { title: "About", to: "About", icon: 'mdi-gamepad-left' },
        { title: "Scoreboard", to: "Scoreboard", icon: 'mdi-trophy'},
        { title: "Player Directory", to: "Playerdirectory", icon: 'mdi-table'},
        { title: "Terms & Conditions", to: "Privacy", icon: 'mdi-incognito' },
        { title:"Wiki", to:"Wiki", icon:'mdi-book-search' },
      ]
    }
    ),


    created () {
      this.$vuetify.theme.dark = true
      // this.$router.push({path: '/home'})
    },
  }
</script>