import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import * as firebase from "firebase";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created(){
    firebase.initializeApp({
      apiKey: 'AIzaSyAacup6WBgqvjFq9kFWmfdvZPt_TOZqARM',
      authDomain: 'gis-deltaforce-bob.firebaseapp.com',
      databaseURL: 'https://gis-deltaforce-bob.firebaseio.com',
      projectId: 'gis-deltaforce-bob',
      storageBucket: ''
    })
  }
}).$mount("#app");
