<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app right clipped class="navigation">
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-action>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="listitems">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-right
      dark
      shrink-on-scroll
      prominent
      scroll-threshold="300"
    >
      <router-link to="">
        <v-toolbar-title class="routbild">
          <v-img class="logo" src="./assets/BotsLogo.png"></v-img>
        </v-toolbar-title>
      </router-link>
      <v-spacer />
      <router-link to="" class="topnavrouter">Registration</router-link>
      <router-link to="" class="topnavrouter">Login</router-link>
      <div
        class="navicon"
        v-bind:class="{change:drawer}"
        @click.stop="drawer = !drawer"
      >
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>

    <v-footer app> </v-footer>
  </v-app>
</template>

<script>
export default {


  props: {
    source: String
  },
methods:{
    change:function(event) {
        // eslint-disable-next-line
        console.log(event);
        event.target.toggleClass('change');

    },
},
  data: () => ({
    drawer: false,
    items: [
      { title: "Profil", to: "", icon: "mdi-select-place" },
      { title: "Lorem", to: "", icon: "mdi-select-place" },
      { title: "Lorem", to: "", icon: "mdi-select-place" },
      { title: "Lorem", to: "", icon: "mdi-select-place" },
      { title: "Lorem", to: "", icon: "mdi-select-place" },
      { title: "Lorem", to: "", icon: "mdi-select-place" },
      { title: "Lorem", to: "", icon: "mdi-select-place" },
      { title: "Lorem", to: "", icon: "mdi-select-place" }
    ]
  }),

  created() {
    this.$vuetify.theme.dark = true;
    // this.$router.push({path: '/home'})
  }
};
</script>
<style scoped>
.logo {height: 80px;width: 100px;align-content: flex-start;align-self: center;}
.routbild {width: 200px;height: 200px;margin-left: 10%;}
.logo:hover {height: 120px;width: 140px;transition: 1s;}
.navicon {display: inline-block;cursor: pointer;margin-top: 2%;margin-right: 2%;order: 3;}
.bar1, .bar2, .bar3 {width: 35px;height: 5px;background-color: #9e9e9e;margin: 6px 0;transition: 0.7s;}
.change .bar1 {-webkit-transform: rotate(-45deg) translate(-9px, 6px);transform: rotate(-45deg) translate(-9px, 6px);}
.change .bar2 {opacity: 0;}
.change .bar3 {-webkit-transform: rotate(45deg) translate(-9px, -6px);transform: rotate(45deg) translate(-9px, -6px);}
.navigation {transition: 0.7s;}
.topnavrouter {text-decoration: none;justify-content: flex-end;align-items: center;margin-right: 5%;align-self: center;order: 2;}
.topnavrouter:hover {text-decoration: underline solid red;font-weight: bold;-webkit-transform: translateY(4px);transition: 1s;color: white;text-underline-position: under;}
</style>
