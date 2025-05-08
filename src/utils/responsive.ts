// 响应式storage
import { App } from "vue";
import Storage from "responsive-storage";
import { responsiveStorageNameSpace } from "@/config";

export const injectResponsiveStorage = (app: App, config: PlatformConfigs) => {
  const nameSpace = responsiveStorageNameSpace();
  const configObj = Object.assign({
    layout: Storage.getData("layout", nameSpace) ?? {
      version: config.Version ?? "1.0.0",
      title: config.Title,
      darkMode: config.DarkMode ?? false,
      device: config.Device ?? "desktop",
      theme: config.Theme ?? "light"
    }
  });
  app.use(Storage, { nameSpace, memory: configObj });
};
