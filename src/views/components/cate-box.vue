<template>
  <div class="cat-box">
    <div class="container mx-auto pt-[1rem] md:pt-[2rem] pl-[0.5rem] pr-[0.5rem] md:pl-[0rem] md:pr-[0rem]">
      <Swiper :items="items">
        <template #item="{ item }">
          <div class="cat-box-item rounded-lg h-[75px] lg:h-[120px] relative text-center overflow-hidden bg-cover bg-no-repeat bg-center z-0 cursor-pointer" :style="{ backgroundImage: `url(${bg})` }">
            <router-link :to="{ path: '/' }">
              <div class="cat-box-content w-full h-full flex items-center justify-center flex-col opacity-[1]">
                <span class="badge badge-bg inline-block p-[0.35rem_0.65rem] text-[0.85rem] font-[400] leading-[1] text-center whitespace-nowrap align-baseline rounded-[0.25rem]"> 60+ </span>
                <span class="text-[#fff]! text-[1rem]! font-[600] tracking-[1]">{{ item.title }}</span>
              </div>
            </router-link>
          </div>
        </template>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import Swiper from "@/components/Swiper/index.vue";
import bg from "@/assets/bg.png";
defineOptions({
  name: "CateBox"
});

const items = [
  { id: 1, title: "Item 1" },
  { id: 2, title: "Item 2" },
  { id: 3, title: "Item 3" },
  { id: 4, title: "Item 4" },
  { id: 5, title: "Item 5" },
  { id: 6, title: "Item 6" },
  { id: 7, title: "Item 7" },
  { id: 8, title: "Item 8" },
  { id: 9, title: "Item 9" }
  // ...更多项目
];
</script>

<style lang="scss" scoped>
.cat-box {
  .cat-box-item {
    transition: all 0.3s;

    &:hover {
      background-position: top right;

      .cat-box-content {
        opacity: 0.65;
      }
    }

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      display: block;
      width: 100%;
      height: 100%;
      content: "";
      background: rgb(0 0 0 / 50%);
    }

    .cat-box-content {
      transition: all 0.3s;

      .badge {
        color: rgb(255 255 255 / 100%) !important;
      }

      .badge-bg {
        background-color: rgb(0 166 244 / 75%) !important;
      }
    }
  }
}
</style>
