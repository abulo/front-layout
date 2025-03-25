<template>
  <router-view v-slot="{ Component }">
    <transition mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { useDark, useGlobal, deviceDetection, useResizeObserver } from "@pureadmin/utils";
const { $storage } = useGlobal<GlobalPropertiesApi>();
defineOptions({
  name: "Layout"
});

console.log($storage);
</script>

<style lang="scss" scoped></style>
