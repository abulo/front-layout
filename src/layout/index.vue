<template>
  <!-- <el-container class="h-screen"> -->
  <!-- <div class="site-header left-0 right-0 top-0 z-50 absolute"> -->
  <LayHeader :scroll-status="scrollStatus" />
  <!-- </div> -->
  <!-- <LayMain /> -->
  <!-- <el-footer>Footer</el-footer> -->
  <!-- </el-container> -->

  <!-- <el-button @click="toggleDark">
      {{ `当前网页处于 ${isDark ? "dark" : "light"} 主题，点击切换主题` }}
    </el-button> -->
  <router-view v-slot="{ Component }">
    <transition mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { useScrollDetection } from "@/layout/hook/useScrollDetection";
import LayHeader from "./components/header.vue";
import LayMain from "./components/main.vue";
const { scrollStatus } = useScrollDetection();
defineOptions({
  name: "Layout"
});
</script>

<style lang="scss" scoped></style>
