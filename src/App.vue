<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app right clipped class="navigation">
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-action>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="listitems">{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar class="appbar" app clipped-right dark height="120">
      <router-link to="/">
        <v-toolbar-title class="routbild">
          <v-img class="logo" src="./assets/BotsLogo.png"></v-img>
        </v-toolbar-title>
      </router-link>
      <v-spacer />
        <v-container class="suchfeld">
            <v-icon class="suchicon">mdi-magnify</v-icon>
            <v-text-field name="suchfeld" label="Suche" id="suchfeld" type="suchfeld"></v-text-field>
        </v-container>
        <v-spacer/>
      <router-link to="Registration" class="topnavrouter"><v-btn class="topnavbtn" style="background: #424242">Registration</v-btn></router-link>
      <router-link to="Login" class="topnavrouter"><v-btn class="topnavbtn" style="background: #424242">Login</v-btn></router-link>
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

    <v-footer  class="footer">
            <section class="cright">
                &copy; {{ new Date().getFullYear() }}
                <strong>Delta Shop</strong>
            </section>
        <v-spacer/>
            <section class="footerergänzungslinks">
            <router-link to="" class="footerlinks" id="linkerlink" style="text-decoration: none">Impressum</router-link>
            <router-link to="" class="footerlinks" id="mittlererlink" style="text-decoration: none">Kontakt</router-link>
            <router-link to="" class="footerlinks" id="rechterlink" style="text-decoration: none">AGB</router-link>
            </section>
    </v-footer>
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
.logo {height: 80px;width: 100px;align-content: flex-start;align-self: center; margin-top: 20%}
.routbild {width: 200px;height: 200px;margin-left: 10%; align-self: center}
.logo:hover {height: 120px;width: 140px;transition: 1s;}
.navicon {display: inline-block;cursor: pointer;align-self: center;margin-right: 2%;order: 3;}
.bar1, .bar2, .bar3 {width: 35px;height: 5px;background-color: #9e9e9e;margin: 6px 0;transition: 0.7s;}
.change .bar1 {-webkit-transform: rotate(-45deg) translate(-9px, 6px);transform: rotate(-45deg) translate(-9px, 6px);}
.change .bar2 {opacity: 0;}
.change .bar3 {-webkit-transform: rotate(45deg) translate(-9px, -6px);transform: rotate(45deg) translate(-9px, -6px);}
.navigation {transition: 0.7s;}
.topnavrouter {text-decoration: none;justify-content: flex-end;align-items: center;margin-right: 4%;align-self: center;order: 2;}
.topnavrouter:hover, .topnavrouter:focus {text-decoration: underline solid red;font-weight: bold;-webkit-transform: translateY(4px);transition: 0.5s;color: white;text-underline-position: under}
    .cright{float: left}
    .footerergänzungslinks{margin-right: 15%}
    #linkerlink{margin-right: 50%}
    #mittlererlink{margin-right: 50%}
    #rechterlink{margin-right: 50%}
.suchfeld{width: 50%; align-self: center; margin-right: 5%; border: white solid 1px; position: fixed;margin-left: 20%;display: flex}
.suchicon{margin-right: 1%}
    .appbar{justify-content: space-between}
</style>
