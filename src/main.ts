import { createApp } from "vue";
import ElementPlus from "element-plus";
import App from "./App.vue";

// 导入公共样式
import "./style/index.scss";
// 一定要在main.ts中导入tailwind.css，防止vite每次hmr都会请求src/style/index.scss整体css文件导致热更新慢的问题
import "./style/tailwind.css";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(ElementPlus).mount("#app");
