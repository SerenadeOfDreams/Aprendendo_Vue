import type { RouteRecordRaw } from "vue-router";
import { privateRoutes } from "./private";
import { publicRoutes } from "./public";

export const routes: RouteRecordRaw[] = [...publicRoutes, ...privateRoutes];
