<template>
  <div class="search-form w-[100%] m-[1rem_auto] rounded-[0.3rem]">
    <div class="search-container flex items-center text-center w-[100%]">
      <div class="search-fields text-[1rem] relative overflow-hidden flex flex-1 flex-row">
        <input
          type="text"
          class="relative block leading-[1.5] pt-[0.5rem] pb-[0.5rem] pl-[1rem] pr-[0rem] w-[100%] border-0 m-0 outline-0"
          placeholder="输入关键词 回车..."
          autocomplete="off"
          value="" />
        <button type="submit" class="right-0 top-0 border-none! leading-[1.5] p-[0_1rem] opacity-[0.65] cursor-pointer"><IconifyIconOnline icon="fa-solid:search" /></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "Search"
});
</script>

<style lang="scss" scoped></style>
