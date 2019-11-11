import Vue from "vue";
import VueRouter from "vue-router";
import Registration from "../views/Registration";
import Wiki from "../views/Wiki";
import Scoreboard from "../views/Scoreboard";
import Playerdirectory from "../views/Playerdirectory";
import BleirohrItem from "../views/LedpipeItem";
import DieSlums from "../views/TheSlums";
import Handgranate from "../views/HandgrenadeItem";
import LaptopItem from "../views/LaptopItem";
import LoginBotS from "../views/LoginBotS";

import Game from "../views/Game";
import About from "../views/About"
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
    path:"/Bleirohr",
    name:"Bleirohr",
    component:BleirohrItem
  },
  {
    path:"/DieSlums",
    name:"DieSlums",
    component:DieSlums
  },
  {
    path:"/Handgranate",
    name:"Handgranate",
    component:Handgranate

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
