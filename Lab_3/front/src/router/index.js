import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import simple from "../views/simple.vue";
import complex from "../views/complex.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/simple",
    name: "simple",
    component: simple,
  },
  {
    path: "/complex",
    name: "complex",
    component: complex,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
