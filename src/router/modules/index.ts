import type { RouteRecordRaw } from "vue-router";
// 布局
const Layout = () => import("@/layout/index.vue");
export const constantRouter: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      // 首页
      {
        path: "",
        component: () => import("@/views/index.vue"),
        name: "Index",
        meta: {
          title: "不断追求完美的开源博客"
        }
      }
    ]
  },
  // 访问其他任何不存在的路由，重定向到首页
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
    name: "any"
  }
];
