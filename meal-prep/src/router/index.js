import Vue from "vue";
import VueRouter from "vue-router";
import Registration from "../views/Registration";
import Wiki from "../views/Wiki";
import Scoreboard from "../views/Scoreboard";
import Playerdirectory from "../views/Playerdirectory";
import LedpipeItem from "../views/LedpipeItem";
import TheSlums from "../views/TheSlums";
import HandgrenadeItem from "../views/HandgrenadeItem";
import LaptopItem from "../views/LaptopItem";
import LoginBotS from "../views/LoginBotS";
import Game from "../views/Game";
import About from "../views/About"
import Privacy from "../views/Privacy";
import Faq from "../views/Faq";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Registration",
    name: "Registration",
    component: Registration
  },
  {
    path: "/About",
    name: "About",
    component: About
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
  },
  {
    path:"/LedpipeItem",
    name:"LedpipeItem",
    component:LedpipeItem
  },
  {
    path:"/HandgrenadeItem",
    name:"HandgrenadeItem",
    component:HandgrenadeItem

  },
  {
    path:"/Laptop",
    name:"Laptop",
    component:LaptopItem
  },
  {
    path:"/TheSlums",
    name:"TheSlums",
    component:TheSlums
  },
  {
    path:"/LoginBotS",
    name:"LoginBotS",
    component:LoginBotS
  },
  {
    path: "/Game",
    name: "Game",
    component: Game
  },
  {
    path: "/Faq",
    name: "Faq",
    component: Faq
  },
  {
    path: "/Privacy",
    name: "Privacy",
    component: Privacy
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
