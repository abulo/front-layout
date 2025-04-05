<template>
  <div class="notice-box text-[0.875rem]">
    <div class="container mx-auto pt-[1rem] md:pt-[2rem] pl-[0.5rem] pr-[0.5rem] md:pl-[0rem] md:pr-[0rem]">
      <div class="notice-box-container flex flex-row items-center overflow-hidden pt-2 pb-2 rounded-[0.25rem]">
        <div class="flex flex-row items-center justify-center notice-box-volume text-white rounded-[0.25rem] p-[0.2rem_0.3rem] mr-[0.25rem] ml-[0.25rem]">
          <IconifyIconOnline icon="fa-solid:volume-up" />
          <div class="pl-[0.25rem]">网站动态</div>
        </div>
        <div class="flex-1 items-end p-[0.2rem_0.3rem]">
          <NoticeBar
            :stepInterval="2000"
            direction="left"
            :transitionDuration="200"
            :items="[
              { id: 1, text: '177****2331 开通了黄金会员' },
              { id: 2, text: '188****4455 购买了年费套餐' }
            ]">
            <template #item="{ item }">
              <div class="notice-item" :key="item.id">{{ item.id }} - {{ item.text }}</div>
            </template>
          </NoticeBar>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NoticeBar from "@/components/NoticeBar/index.vue";
defineOptions({
  name: "NoticeBox"
});
</script>

<style lang="scss" scoped>
.notice-box-container {
  font-weight: 400;
  line-height: 1;
  background-color: rgba(var(--layout-notice-box-bg-rgb), 0.1) !important;

  .notice-box-volume {
    background-color: rgba(var(--layout-notice-box-bg-rgb), 1) !important;
  }

  .notice-item {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 100%;
    font-weight: 500;
    line-height: 1;
    white-space: nowrap;
  }
}
</style>
