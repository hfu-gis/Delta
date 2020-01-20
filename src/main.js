import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import vuetify from "./plugins/vuetify";
import * as firebase from "firebase";
import Alert from "./components/Alert";
import VueMq from "vue-mq";
// Vue breakpoints
Vue.use(VueMq, {
  breakpoints: {
    xs: 12,
    sm: 450,
    md: 1250,
    lg: Infinity
  }
});

Vue.config.productionTip = false;
Vue.component("app-alert", Alert);

new Vue({
  template: `
    <grid-component :column="$mq | mq({
      phone: 2,
      tablet: 3,
      laptop: 4
    })">
    </grid-component>
  `
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyD9Rti5aPk9vzrj6V-CSwIlaJcnXn9kFz0",
      authDomain: "deltashop-6a97f.firebaseapp.com",
      databaseURL: "https://deltashop-6a97f.firebaseio.com",
      projectId: "deltashop-6a97f",
      storageBucket: "deltashop-6a97f.appspot.com",
      messagingSenderId: "493723113811",
      appId: "1:493723113811:web:1a5fdc607544257c6369a6",
      measurementId: "G-PNKMG3ZL3W"
    });
  }
}).$mount("#app");
