import { defineStore } from "pinia";
import { store, getConfig, storageLocal, deviceDetection, responsiveStorageNameSpace } from "../utils";
export const useAppStore = defineStore("pure-app", {
  state: (): ResponsiveStorage => ({
    version: storageLocal().getItem<StorageConfigs>(`${responsiveStorageNameSpace()}layout`)?.version ?? getConfig().Version,
    title: storageLocal().getItem<StorageConfigs>(`${responsiveStorageNameSpace()}layout`)?.title ?? getConfig().Title,
    darkMode: storageLocal().getItem<StorageConfigs>(`${responsiveStorageNameSpace()}layout`)?.darkMode ?? getConfig().DarkMode,
    device: deviceDetection() ? "mobile" : "desktop",
    theme: storageLocal().getItem<StorageConfigs>(`${responsiveStorageNameSpace()}layout`)?.theme ?? getConfig().Theme
  }),
  getters: {
    getVersion(state) {
      return state.version;
    },
    getTitle(state) {
      return state.title;
    },
    getDarkMode(state) {
      return state.darkMode;
    },
    getDevice(state) {
      return state.device;
    },
    getTheme(state) {
      return state.theme;
    }
  },
  actions: {
    // const layout = storageLocal().getItem<StorageConfigs>(`${responsiveStorageNameSpace()}layout`);
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
    }
  }
});

//ResponsiveStorage
export function useAppStoreHook() {
  return useAppStore(store);
}
