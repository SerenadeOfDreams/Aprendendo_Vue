import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("../../../views/Home.vue"),
  },
];

export default routes;
