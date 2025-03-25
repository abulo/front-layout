<template>
  <router-view v-slot="{ Component }">
    <transition mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
defineOptions({
  name: "Layout"
});
</script>

<style lang="scss" scoped></style>
