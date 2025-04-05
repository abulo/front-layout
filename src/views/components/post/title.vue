<template>
  <div class="title-post">
    <div class="container mx-auto pt-[1rem] md:pt-[2rem] pl-[0.5rem] pr-[0.5rem] md:pl-[0rem] md:pr-[0rem]">
      <div class="text-center mb-4">
        <div class="text-[1.5rem] font-[500]">CMS</div>
        <div class="mb-0 text-[rgba(89,93,105,0.75)]">当前热门分类文章展示</div>
      </div>
    </div>
    <div class="container mx-auto pt-[1rem] md:pt-[2rem] pl-[0.5rem] pr-[0.5rem] md:pl-[0rem] md:pr-[0rem] grid grid-cols-1 md:max-lg:grid-cols-2 lg:grid-cols-4 gap-2 md:max-lg:gap-3 lg:gap-4">
      <div class="list-posts relative rounded-[0.3rem] overflow-hidden" v-for="(item, index) in 4">
        <div class="category-bg" :style="{ backgroundImage: `url(${post})` }">
          <div class="category-title flex items-center justify-center text-[#ffffff] text-[1.15rem] text-center mb-[0.5rem]">
            <IconifyIconOnline icon="ri:circle-line" />
            <div class="pl-[0.25rem]">HTML5模板 ></div>
          </div>
          <div class="category-desc m-0 line-clamp-1 whitespace-nowrap overflow-hidden text-ellipsis block text-center leading-[1.5] text-[0.875rem]">
            html5网站模板免费下载,html5企业网站模板下载,网页模板
          </div>
        </div>
        <ul class="list-post-container">
          <li v-for="(item, index) in 4">
            <div class="title inline-block pr-[5px] line-clamp-1 whitespace-nowrap overflow-hidden text-ellipsis ml-[0]">
              <span class="post-num inline-block text-[#fff] bg-[#999] text-[14px] w-[18px] h-[18px] leading-[18px] text-center">{{ index + 1 }}</span>
              <a href="#">Aments-汽车配件商店HTML模板</a>
            </div>
            <span class="post-views">4.2K<IconifyIconOnline icon="fa-solid:fire" class="ml-[0.25rem]" /></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import post from "@/assets/post.jpg";
defineOptions({
  name: "TitlePost"
});
</script>

<style lang="scss" scoped>
@use "@/views/components/post/post.scss";
</style>
