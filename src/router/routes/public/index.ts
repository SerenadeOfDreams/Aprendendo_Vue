import type { RouteRecordRaw } from "vue-router";

export const publicRoutes: RouteRecordRaw[] = [
  {
    path: "/home",
    component: () => import("../../../views/Home.vue"),
  },
];
