import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "Product",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
