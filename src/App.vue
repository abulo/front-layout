<script setup lang="ts">
// import { onMounted } from "vue";
// import { useDark, deviceDetection } from "@pureadmin/utils";

// const { isDark, toggleDark } = useDark();

// const isMobile = deviceDetection();
// onMounted(() => {
//   console.log(isDark.value ? "dark" : "light");
// });
</script>

<template>
  <router-view />
  <!-- <el-button @click="toggleDark"> {{ `当前网页处于 ${isDark ? "dark" : "light"} 主题，点击切换主题` }} {{ isMobile ? "（移动端不支持切换）" : "" }} </el-button> -->
</template>
