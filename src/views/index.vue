<template>
  <main>
    <div class="home-search-box">
      <div class="search-bg text-center relative z-0 bg-type-img jarallax pt-[60px]" data-jarallax="" data-speed="0.2">
        <div class="search-bg-overlay absolute top-0 left-0 z-1 h-[100%] w-[100%]" />
        <img class="jarallax-img lazy" :data-src="bg" :src="bg" alt="搜索本站精品资源" />
        <div class="container search-warp max-w-[100%] lg:max-w-[50%] pt-[40px] pb-[40px] lg:pt-[120px] lg:pb-[120px] mx-auto pl-[0.5rem] pr-[0.5rem]">
          <h1 class="search-title text-[#fff]! mb-[0.875rem]! leading-[1.2] font-[500] text-[1.5rem]! lg:text-[1.75rem]!">搜索本站精品资源</h1>
          <p class="search-desc hidden lg:block text-[rgba(255,255,255,.85)] mb-[1.5rem] text-[1rem]">RiPro是Ritheme全新开发甄品VIP会员资源/素材虚拟商城主题</p>
          <Search />
          <div class="search-hots">
            <span>搜索热词</span>
            <span>wordpress</span>
            <span>测试</span>
            <span>下载</span>
            <span>素材</span>
            <span>搜索热词</span>
            <span class="max-md:hidden">wordpress</span>
            <span class="max-md:hidden">测试</span>
            <span class="max-md:hidden">下载</span>
            <span class="max-md:hidden">素材</span>
          </div>
        </div>
      </div>
    </div>
    <div class="home-dynamic text-[0.875rem]">
      <div class="container mx-auto pl-[0.5rem] pr-[0.5rem] pt-3 pb-0">
        <div class="home-notice-container flex flex-row items-center overflow-hidden p-2 rounded-[0.25rem]">
          <div class="flex flex-row items-center justify-center home-notice-volume text-white rounded-[0.25rem] p-[0.2rem_0.3rem] mr-[0.25rem]">
            <IconifyIconOnline icon="fa-solid:volume-up" />
            <div class="pl-[0.25rem]">网站动态</div>
          </div>
          <div class="flex-1 items-end p-[0.2rem_0.3rem]">
            <NoticeBar :stepInterval="2000" direction="left" :transitionDuration="200">
              <div class="notice-item">177****2331 开通了黄金会员</div>
              <div class="notice-item">177****2331 开通了黄金会员</div>
              <div class="notice-item">177****2331 开通了黄金会员</div>
              <div class="notice-item">177****2331 开通了黄金会员</div>
              <div class="notice-item">177****2331 开通了黄金会员</div>
              <div class="notice-item">177****2331 开通了黄金会员</div>
            </NoticeBar>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[1000px]">dd</div>
  </main>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { jarallax } from "jarallax";
import Search from "@/components/Search/index.vue";
import NoticeBar from "@/components/NoticeBar/index.vue";
import bg from "@/assets/bg.png";
defineOptions({
  name: "Index"
});

onMounted(() => {
  jarallax(document.querySelectorAll(".jarallax"), {
    imgElement: ".jarallax-img",
    containerClass: "jarallax-container"
  });
});
</script>

<style lang="scss" scoped>
.home-search-box {
  .search-bg {
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
  }

  .search-bg-overlay {
    z-index: -1;
    background: linear-gradient(0deg, rgb(25 27 38 / 32%), rgb(25 27 38 / 72%));
  }

  .search-hots {
    span {
      font-size: 0.875rem;
      color: rgb(255 255 255 / 65%);
      cursor: pointer;

      &:hover {
        color: #fff;
      }

      &::before {
        content: ", ";
      }

      &:nth-child(2) {
        &::before {
          content: "";
        }
      }

      &:first-child {
        margin-right: 0.25rem !important;
        color: rgb(255 255 255 / 65%);
        cursor: default;

        &::before {
          content: "";
        }
      }
    }
  }
}

.jarallax {
  position: relative;
  z-index: 0;

  .jarallax-container {
    > img {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      margin-top: -30px !important;
      object-fit: cover;
    }
  }
}

.home-notice-container {
  font-size: 0.857rem;
  font-weight: 400;
  line-height: 1;
  background-color: rgba(var(--layout-home-notice-bg-rgb), 0.1) !important;

  .home-notice-volume {
    background-color: rgba(var(--layout-home-notice-bg-rgb), 1) !important;
  }

  .notice-item {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 100%;
    font-size: 0.857rem;
    font-weight: 500;
    line-height: 1;
    white-space: nowrap;
  }
}
</style>
