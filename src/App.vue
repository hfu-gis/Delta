<template>
  <v-app id="inspire">

    <v-navigation-drawer
            v-model="drawer"
            app
            right
            clipped
    >
      <v-list dense>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-run</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Play!</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-help</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>F.A.Q.</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-gamepad-left</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About the Game</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <router-link to="/views/Privacy.vue" text-decoration="none">
        <v-list-item link>
          <v-list-item-action>
              <v-icon>mdi-incognito</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Terms & Conditions</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </router-link>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar
            app
            clipped-right
    >
      <router-link to="/App.vue">
      <v-toolbar-title><v-img height="60px" width="80px" src="./assets/botsloscho.png"></v-img></v-toolbar-title>
      </router-link>
      <v-spacer/>
      <v-btn class="mr-2"> Login </v-btn>

      <v-btn> Register </v-btn>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

    </v-app-bar>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },

    data: () => ({
      drawer: null,
    }),

    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>