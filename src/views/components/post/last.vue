<template>
  <div class="last-post">
    <div class="container mx-auto pt-[1rem] md:pt-[2rem] pl-[0.5rem] pr-[0.5rem] md:pl-[0rem] md:pr-[0rem]">
      <div class="text-center mb-4">
        <div class="text-[1.5rem] font-[500]">最新推荐</div>
        <div class="mb-0 text-[rgba(89,93,105,0.75)]">当前最新发布更新的热门资源，我们将会持续保持更新</div>
      </div>
      <div class="post-cate text-center mb-4">
        <span class="m-1 px-3 active">最新</span>
        <span class="m-1 px-3">HTML5模板</span>
      </div>
    </div>
    <PostList />
  </div>
</template>

<script setup lang="ts">
import PostList from "./post-list.vue";
defineOptions({
  name: "LastPost"
});
</script>

<style lang="scss" scoped>
.post-cate {
  > span {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 1.5;
    vertical-align: middle;
    color: var(--layout-post-cate-color);
    text-align: center;
    cursor: pointer;
    user-select: none;
    background-color: var(--layout-post-cate-bg);
    border: 1px solid transparent;
    border-radius: 0.2rem;
    transition: all 0.3s ease-in-out;
  }

  > span.active {
    color: var(--layout-post-cate-color-hover);
  }
}
</style>
