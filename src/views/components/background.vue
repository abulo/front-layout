<template>
  <div class="background relative">
    <div class="bg-fixed text-center bg-no-repeat bg-center bg-cover" :style="{ backgroundImage: `url(${bg})` }">
      <div class="container mx-auto pt-[1rem] md:pt-[2rem] pl-[0.5rem] pr-[0.5rem] md:pl-[0rem] md:pr-[0rem]">
        <div class="text-center mb-4">
          <div class="text-[1.5rem] font-[500]">CMS</div>
          <div class="mb-0 text-[rgba(89,93,105,0.75)]">当前热门分类文章展示</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import bg from "@/assets/bg.png";
defineOptions({
  name: "Background"
});
</script>

<style lang="scss" scoped></style>
