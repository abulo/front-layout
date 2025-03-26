<template>
  <div ref="appWrapperRef">啊是的是的</div>
  <!-- <router-view v-slot="{ Component }">
    <transition mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view> -->
</template>

<script setup lang="ts">
defineOptions({
  name: "Layout"
});
import { ref, onMounted } from "vue";
import { useDark, useGlobal, deviceDetection, useResizeObserver } from "@pureadmin/utils";
import { useAppStoreHook } from "@/store/modules/app";
const { $storage } = useGlobal<GlobalPropertiesApi>();

const appWrapperRef = ref();
const { isDark } = useDark();

useResizeObserver(appWrapperRef, entries => {
  setGlobal();
});

const setGlobal = () => {
  const isMobile = deviceDetection();
  useAppStoreHook().setDarkMode(isDark.value);
  useAppStoreHook().setTheme(isDark.value ? "dark" : "light");
  useAppStoreHook().setDevice(isMobile ? "mobile" : "desktop");
};

onMounted(() => {
  setGlobal();
});
</script>

<style lang="scss" scoped></style>
