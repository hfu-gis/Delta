import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Registration from "../views/Registration";
import Login from "../views/Login";
import Categorys from "../views/Categorys";
import Profile from "../views/Profile";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Categorys",
    name: "Categorys",
    component: Categorys
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
