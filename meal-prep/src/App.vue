<template>
  <v-app>
    <v-app-bar app color="#181818" height="90pm">
      <div class="d-flex align-center">
        <v-img
          alt="BOB Logo"
          class="shrink mr-2"
          contain
          src="assets/bots-logo.png" height="162" width="288"
          transition="g"
          align="center"
        />
        <v-img
          alt="BOB Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src=""
          width="100"
        />
      </div>
    </v-app-bar>
    <v-sheet height="1100" class="overflow-hidden" style="position: relative;">
      <v-container class="fill-height">
        <v-row align="right" justify="center">
            <img src="assets/menue.png" height="90" width="90" @click.stop="drawer = !drawer"/>
        </v-row>
      </v-container>
      <v-navigation-drawer v-model="drawer" absolute temporary right>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src=""></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              <v-img src=""></v-img>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-sheet>
    <v-content>
     <router-view/>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Faq'},
          { title: 'Game'},
          { title: 'LoginBotS'},
          { title: 'Playerdirectory'},
          { title: 'Privacy'},
          { title: 'Registration'},
          { title: 'Scoreboard'},
          { title: 'Wiki'},
        ],
      }
    },
  }
</script>
