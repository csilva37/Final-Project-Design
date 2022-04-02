import { createRouter, createWebHistory } from "vue-router";
import useAuth from "./composable/useAuth";

import Index from "./pages/index.vue";
import About from "./pages/about.vue";
import Login from "./pages/login.vue";
import Character from "./pages/character.vue";
import NotFound from "./pages/404.vue";
import Sheet from "./pages/sheet.vue";

const { isAuthenticated } = useAuth();

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/character",
    name: "Character",
    component: Character,
    beforeEnter: (to, from, next) => {
      console.log(isAuthenticated);
      if (!isAuthenticated.value) {
        next("/login");
      }
      next();
    },
  },
    {
      path: "/sheet",
      name: "Character Sheet",
      component: Sheet,
      beforeEnter: (to, from, next) => {
        console.log(isAuthenticated);
        if (!isAuthenticated.value) {
          next("/login");
        }
        next();
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;