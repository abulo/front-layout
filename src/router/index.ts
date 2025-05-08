import { createRouter, createWebHistory } from "vue-router";
import { constantRouter } from "@/router/modules";
import NProgress from "@/utils/progress";
const router = createRouter({
  // 路由模式 History
  history: createWebHistory(),
  routes: constantRouter
});

router.beforeEach((to, from, next) => {
  // 查看文章详情页，滚动条回到顶部
  NProgress.start();
  window.document.title = to.meta.title as string;
  next();
});

router.afterEach(() => {
  NProgress.done();
  window.scrollTo(0, 0);
});

export default router;
