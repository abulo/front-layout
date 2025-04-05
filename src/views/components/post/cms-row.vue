<template>
  <div class="cms-post">
    <div class="container mx-auto pt-[1rem] md:pt-[2rem] pl-[0.5rem] pr-[0.5rem] md:pl-[0rem] md:pr-[0rem]">
      <div class="text-center mb-4">
        <div class="text-[1.5rem] font-[500]">CMS</div>
        <div class="mb-0 text-[rgba(89,93,105,0.75)]">当前热门分类文章展示</div>
      </div>
    </div>
    <div class="container mx-auto pt-[1rem] md:pt-[2rem] pl-[0.5rem] pr-[0.5rem] md:pl-[0rem] md:pr-[0rem] grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
      <div class="grid grid-cols-1 gap-2">
        <div class="post-item relative overflow-hidden rounded-[0.3rem] bg-(--layout-post-bg) flex flex-row wrap-break-word" v-for="(item, index) in 4" :key="index">
          <div class="post-cms-entry relative overflow-hidden w-full block rounded-[0.25rem] mr-[0.5rem]">
            <router-link
              :to="{ path: '/' }"
              class="post-entry-img rounded-[inherit] bg-[#e7e7e7] bg-cover bg-no-repeat bg-center flex items-center justify-center absolute top-0 left-0 w-full h-full"
              :style="{ backgroundImage: `url(${post})` }">
              <!-- 缩略图 -->
            </router-link>
          </div>
          <div class="post-wrapper-row-layer mr-[0.5rem]">
            <div class="post-cat flex items-center mb-[2px] md:mb-[4px] whitespace-nowrap">
              <a class="whitespace-nowrap text-[#a1a1a8]!" href="https://ripro.rizhuti.com/uncategorized">未分类</a>
              <a class="whitespace-nowrap text-[#a1a1a8]!" href="https://ripro.rizhuti.com/mediasc">音视频素材</a>
            </div>
            <div class="post-title text-[0.95rem] font-[600] m-[0] overflow-hidden text-ellipsis break-all block line-clamp-1 whitespace-nowrap">
              <a target="" href="https://ripro.rizhuti.com/11666.html" title="文字内容简码组件展示" class="text-[#595d69]">文字内容简码组件展示</a>
            </div>
            <div class="post-desc m-[0] overflow-hidden text-ellipsis break-all mt-[2px] leading-[1.25] md:mt-[4px] text-[#a1a1a8] whitespace-normal text-[12px] font-[500] line-clamp-1 hidden">
              文字内容简码组件展示 付费内容展示 评论可见内容展示 登录可见内容展示 按钮展示...
            </div>
            <div class="post-meta flex flex-row items-center text-[#a1a1a8] text-[0.75rem] mt-[8px]">
              <div class="flex items-center whitespace-nowrap">
                <IconifyIconOnline icon="fa-solid:clock" />
                <div class="pl-[0.25rem]">10月前</div>
              </div>
              <div class="hidden md:flex items-center whitespace-nowrap">
                <IconifyIconOnline icon="fa-solid:heart" />
                <div class="pl-[0.25rem]">14</div>
              </div>
              <div class="hidden md:flex items-center whitespace-nowrap">
                <IconifyIconOnline icon="fa-solid:star" />
                <div class="pl-[0.25rem]">14</div>
              </div>
              <div class="flex items-center whitespace-nowrap">
                <IconifyIconOnline icon="fa-solid:eye" />
                <div class="pl-[0.25rem]">14</div>
              </div>
              <div class="flex items-center whitespace-nowrap">
                <IconifyIconOnline icon="fa-solid:coins" />
                <div class="pl-[0.25rem]">14</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="post-item relative overflow-hidden rounded-[0.3rem] bg-(--layout-post-bg)">
        <div class="post-tips absolute top-0 left-0 z-1 m-2 whitespace-nowrap">
          <div class="post-tip-dark inline-block p-[0.35rem_0.65rem] text-[0.65rem] text-white leading-[1] text-center whitespace-nowrap align-baseline rounded-[0.25rem]">置顶</div>
          <div class="post-tip-warning inline-block p-[0.35rem_0.65rem] text-[0.65rem] text-white leading-[1] text-center whitespace-nowrap align-baseline rounded-[0.25rem]">置顶</div>
        </div>
        <div class="post-entry block relative overflow-hidden w-full">
          <router-link
            :to="{ path: '/' }"
            class="post-entry-img rounded-[inherit] bg-[#e7e7e7] bg-cover bg-no-repeat bg-center flex items-center justify-center absolute top-0 left-0 w-full h-full"
            :style="{ backgroundImage: `url(${post})` }">
            <!-- 缩略图 -->
          </router-link>
        </div>
        <div class="post-wrapper-layer p-[10px]">
          <div class="post-cat flex items-center mb-[2px] md:mb-[4px] whitespace-nowrap">
            <a class="whitespace-nowrap text-[#fff]!" href="https://ripro.rizhuti.com/uncategorized">未分类</a>
            <a class="whitespace-nowrap text-[#fff]!" href="https://ripro.rizhuti.com/mediasc">音视频素材</a>
          </div>
          <div class="post-title text-[0.95rem] font-[600] m-[0] overflow-hidden text-ellipsis break-all block line-clamp-1">
            <a target="" href="https://ripro.rizhuti.com/11666.html" title="文字内容简码组件展示" class="text-[#fff]">文字内容简码组件展示</a>
          </div>
          <div class="post-desc m-[0] overflow-hidden text-ellipsis break-all mt-[2px] leading-[1.25] md:mt-[4px] text-[#a1a1a8] whitespace-normal text-[12px] font-[500] line-clamp-1">
            文字内容简码组件展示 付费内容展示 评论可见内容展示 登录可见内容展示 按钮展示...
          </div>
          <div class="post-meta flex flex-row items-center justify-between text-[#a1a1a8] text-[0.75rem] mt-[8px]">
            <div class="flex items-center whitespace-nowrap">
              <IconifyIconOnline icon="fa-solid:clock" />
              <div class="pl-[0.25rem]">10月前</div>
            </div>
            <div class="hidden md:flex items-center whitespace-nowrap">
              <IconifyIconOnline icon="fa-solid:heart" />
              <div class="pl-[0.25rem]">14</div>
            </div>
            <div class="hidden md:flex items-center whitespace-nowrap">
              <IconifyIconOnline icon="fa-solid:star" />
              <div class="pl-[0.25rem]">14</div>
            </div>
            <div class="flex items-center whitespace-nowrap">
              <IconifyIconOnline icon="fa-solid:eye" />
              <div class="pl-[0.25rem]">14</div>
            </div>
            <div class="flex items-center whitespace-nowrap">
              <IconifyIconOnline icon="fa-solid:coins" />
              <div class="pl-[0.25rem]">14</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import post from "@/assets/post.jpg";
defineOptions({
  name: "CmsRowPost"
});
</script>

<style lang="scss" scoped>
@use "@/views/components/post/post.scss";
</style>
