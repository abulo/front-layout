import { defineStore } from "pinia";
import { store, getConfig, storageLocal, responsiveStorageNameSpace } from "../utils";

export const useAppStore = defineStore("pure-app", {
  state: (): ResponsiveStorage => ({
    layout: storageLocal().getItem<StorageConfigs>(`${responsiveStorageNameSpace()}layout`) ?? {
      version: getConfig().Version ?? "1.0.0",
      title: getConfig().Title,
      darkMode: getConfig().DarkMode ?? false,
      device: getConfig().Device ?? "desktop",
      theme: getConfig().Theme ?? "light"
    }
  }),
  getters: {
    getLayout(state) {
      return state.layout;
    }
  },
  actions: {
    setVersion(version: string) {
      const layout = storageLocal().getItem<StorageConfigs>(`${responsiveStorageNameSpace()}layout`);
      layout.version = version;
      storageLocal().setItem(`${responsiveStorageNameSpace()}layout`, layout);
    },
    setTitle(title: string) {
      const layout = storageLocal().getItem<StorageConfigs>(`${responsiveStorageNameSpace()}layout`);
      layout.title = title;
      storageLocal().setItem(`${responsiveStorageNameSpace()}layout`, layout);
    },
    setDarkMode(darkMode: boolean) {
      const layout = storageLocal().getItem<StorageConfigs>(`${responsiveStorageNameSpace()}layout`);
      layout.darkMode = darkMode;
      storageLocal().setItem(`${responsiveStorageNameSpace()}layout`, layout);
    },
    setDevice(device: string) {
      const layout = storageLocal().getItem<StorageConfigs>(`${responsiveStorageNameSpace()}layout`);
      layout.device = device;
      storageLocal().setItem(`${responsiveStorageNameSpace()}layout`, layout);
    },
    setTheme(theme: string) {
      const layout = storageLocal().getItem<StorageConfigs>(`${responsiveStorageNameSpace()}layout`);
      layout.theme = theme;
      storageLocal().setItem(`${responsiveStorageNameSpace()}layout`, layout);
    },
    setLayout(layout: any) {
      storageLocal().setItem(`${responsiveStorageNameSpace()}layout`, layout);
    }
  }
});

//ResponsiveStorage
export function useAppStoreHook() {
  return useAppStore(store);
}
