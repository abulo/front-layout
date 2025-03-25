// 响应式storage
import type { App } from "vue";
import Storage from "responsive-storage";
import { responsiveStorageNameSpace } from "@/config";

export const injectResponsiveStorage = (app: App, config: PlatformConfigs) => {
  const nameSpace = responsiveStorageNameSpace();
  const configObj = Object.assign({
    version: config.Version ?? "1.0.0",
    title: config.Title,
    locale: config.Locale ?? "zh-cn",
    darkMode: config.DarkMode ?? false,
    isMobile: config.IsMobile ?? false,
    theme: config.Theme ?? "light"
  });
  app.use(Storage, { nameSpace, memory: configObj });
};
