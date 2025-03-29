<template>
  <div class="search-box">
    <div class="search-bg bg-type-img jarallax">
      <div class="search-bg-overlay absolute t-0 l-0 w-[100%] h-[100%] z-[-1]" />
      <div class="pt-[96px] lg:pt-[60px]" />
      <div class="search-warp w-full lg:w-[50%] pb-[40px] lg:pt-[120px] lg:pb-[120px] mr-auto ml-auto pl-[0.75rem] pr-[0.75rem] flex flex-col items-center">
        <h1 class="text-[1.5rem] font-[500] leading-[1.2] text-[#fff] mb-0 lg:mb-3.5">搜索本站精品资源</h1>
        <p class="text-[1rem] font-[500] text-[#fff] hidden lg:block xl:block 2xl:block">RiPro是Ritheme全新开发甄品VIP会员资源/素材虚拟商城主题</p>
        <div class="search-form w-[100%] md:m-[1_auto] m-[1rem_auto] rounded-[0.3rem] bg-white flex items-center">
          <div class="search-fields flex flex-1 flex-row">
            <input
              type="text"
              class="relative block leading-[1.5] pt-[0.5rem] pb-[0.5rem] pl-[1rem] pr-[0rem] w-[100%] border-0 m-0 outline-0 text-[#595d69]"
              placeholder="输入关键词 回车..."
              autocomplete="off"
              value=""
              required="required" />
            <button type="submit" class="right-0 top-0 border-none! leading-[1.5] p-[0_1rem] opacity-[0.65] text-[#595d69]"><IconifyIconOnline icon="fa-solid:search" /></button>
          </div>
        </div>
        <div class="search-hots text-[0.857rem] md:text-[1rem] font-[500]">
          <span class="mr-[0.25rem]!">搜索热词</span>
          <span>wordpress</span>
          <span>测试</span>
          <span>下载</span>
          <span>素材</span>
          <span>作品</span>
          <span>主题</span>
          <span>插件</span>
          <span>你好</span>
        </div>
      </div>
    </div>
  </div>
  <div>ddd</div>
  <div>ddd</div>
  <div>ddd</div>
  <div>ddd</div>

  <p />
  <p />
  <p />
  <p />
  <p />
  <p />
  <p />
  <p />
  <p />
  <p />
  <p />
  <p />
  <p />
  <p />
  <p />
  <p />
  <p />
  <p />
  <p />
  <p />
  <p />
  <p />
  <p />
  <p />
  <!-- </el-main> -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { jarallax } from "jarallax";
import bg from "@/assets/bg.png";
defineOptions({
  name: "LayMain"
});

const input = ref("");
const select = ref("");

onMounted(() => {
  jarallax(document.querySelectorAll(".jarallax"), {
    speed: 0.5,
    imgSrc: bg
  });
});
</script>

<style lang="scss" scoped>
.search-box {
  .search-bg {
    position: relative;
    z-index: 0;
    text-align: center;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;

    .search-bg-overlay {
      background: linear-gradient(0deg, rgb(25 27 38 / 32%), rgb(25 27 38 / 72%));
    }
  }

  .search-form {
    box-shadow: 0 0 0 5px rgb(0 0 0 / 10%);
    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: 0 0 0 5px rgb(0 0 0 / 30%);
    }
  }

  .search-hots {
    span {
      color: #fff;

      &::after {
        content: ",";
      }

      &:last-child {
        &::after {
          content: "";
        }
      }

      &:first-child {
        &::after {
          content: "";
        }
      }
    }
  }
}
</style>
