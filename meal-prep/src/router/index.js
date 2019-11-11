import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Registration from "../views/Registration";
import Wiki from "../views/Wiki";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Registration",
    name: "Registration",
    component: Registration
  },
  {
    path:"/Wiki",
    name:"Wiki",
    component: Wiki
  },
  {
    path: "/Scoreboard",
    name: "Scoreboard",
    component: Scoreboard
  },
  {
    path: "/Playerdirectory",
    name: "Playerdirectory",
    component: Playerdirectory
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
