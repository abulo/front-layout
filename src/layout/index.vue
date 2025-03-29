<template>
  <div ref="appWrapperRef">
    <!-- <el-container class="h-screen"> -->
    <div class="site-header left-0 right-0 top-0 z-50 absolute">
      <LayHeader />
    </div>
    <LayMain />
    <el-footer>Footer</el-footer>
    <!-- </el-container> -->

    <!-- <el-button @click="toggleDark">
      {{ `当前网页处于 ${isDark ? "dark" : "light"} 主题，点击切换主题` }}
    </el-button> -->
  </div>
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
import { useGlobal, deviceDetection, useResizeObserver } from "@pureadmin/utils";
import { useAppStoreHook } from "@/store/modules/app";
import LayHeader from "./components/header.vue";
import LayMain from "./components/main.vue";
const { $storage } = useGlobal<GlobalPropertiesApi>();

const appWrapperRef = ref();
// const { isDark, toggleDark } = useDark();

useResizeObserver(appWrapperRef, entries => {
  setGlobal();
});

const setGlobal = () => {
  const isMobile = deviceDetection();
  useAppStoreHook().setDevice(isMobile ? "mobile" : "desktop");
};

onMounted(() => {
  setGlobal();
});
</script>

<style lang="scss" scoped>
.site-header {
  transition:
    background-color 0.3s cubic-bezier(0.77, 0, 0.175, 1),
    box-shadow 0.3s cubic-bezier(0.77, 0, 0.175, 1),
    transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);
}
</style>
