<template>
  <div class="division-box">
    <div class="container mx-auto pt-[1rem] md:pt-[2rem] pl-[0.5rem] pr-[0.5rem] md:pl-[0rem] md:pr-[0rem] grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
      <div
        v-for="(item, index) in 4"
        :key="index"
        :val="item"
        class="division-item relative flex items-center bg-(--layout-division-bg) p-[0.5rem] rounded-[0.35rem] h-full max-md:flex-col max-md:text-center">
        <div class="division-icon block leading-[1] text-[1.5rem] p-[1.25rem] text-white bg-[#8399ff] text-center max-md:p-[1rem] max-md:mb-[0.35rem] rounded-[50%]">
          <IconifyIconOnline icon="fa-solid:volume-up" />
        </div>
        <div class="division-warp ml-[1rem] max-md:ml-0">
          <div class="division-title font-[600] mb-[2px] text-[1.25rem] max-md:text-[1rem] max-md:mb-[0]">
            <router-link :to="{ path: '/' }">ddd</router-link>
          </div>
          <div class="division-desc mb-0 text-[0.875rem] text-[#a1a1a8] max-md:text-[0.75rem]">dd</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "DivisionBox"
});
</script>

<style lang="scss" scoped></style>
