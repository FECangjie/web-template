import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import BaseLayout from "@/core/layouts/index.vue";

const homeView = () =>
  import(/* webpackChunkName: "home" */ "@/views/home/index.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: BaseLayout,
    children: [
      {
        path: "",
        name: "home",
        component: homeView,
        // meta: {
        //   title: "主页",
        // },
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: homeView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
