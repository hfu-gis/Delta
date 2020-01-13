import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Registration from "../views/Registration";
import Login from "../views/Login";
import Profile from "../views/Profile";

import BlancoArticle from "../views/BlancoArticle";
import Impressum from "../views/Impressum";
import AGB from "../views/AGB";
import Kontakt from "../views/Kontakt";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Kontakt",
    name: "Kontakt",
    component: Kontakt
  },
  {
    path: "/AGB",
    name: "AGB",
    component: AGB
  },
  {
    path: "/Impressum",
    name: "Impressum",
    component: Impressum
  },
  {
    path: "/BlancoArticle",
    name: "BlancoArticle",
    component: BlancoArticle
  },
  {
    path: "/Registration",
    name: "Registration",
    component: Registration
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/Profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "",
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
