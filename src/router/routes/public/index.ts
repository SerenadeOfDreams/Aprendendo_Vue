import type { RouteRecordRaw } from "vue-router";

const modules = import.meta.glob<{ default: RouteRecordRaw }>("./!(index).ts", {
  eager: true,
});

const children = Object.values(modules).flatMap<RouteRecordRaw>(
  (module) => module.default
);

export const publicRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../../../layout/AppLayout.vue"),
    children: children,
  },
];
