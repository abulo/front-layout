<template>
  <main>
    <div class="home-search-box">
      <div class="search-bg text-center relative z-0 bg-type-img jarallax pt-[60px]" data-jarallax="" data-speed="0.2">
        <div class="search-bg-overlay absolute top-0 left-0 z-1 h-[100%] w-[100%]" />
        <img class="jarallax-img lazy" :data-src="bg" :src="bg" alt="搜索本站精品资源" />
        <div class="container search-warp max-w-[100%] lg:max-w-[50%] pt-[40px] pb-[40px] lg:pt-[120px] lg:pb-[120px] mx-auto pl-[0.5rem] pr-[0.5rem] md:pl-[0rem] md:pr-[0rem]">
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
      <div class="container mx-auto pt-[1rem] md:pt-[2rem] pl-[0.5rem] pr-[0.5rem] md:pl-[0rem] md:pr-[0rem]">
        <div class="home-notice-container flex flex-row items-center overflow-hidden pt-2 pb-2 rounded-[0.25rem]">
          <div class="flex flex-row items-center justify-center home-notice-volume text-white rounded-[0.25rem] p-[0.2rem_0.3rem] mr-[0.25rem] ml-[0.25rem]">
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
    <div class="home-cat-box">
      <div class="container mx-auto pt-[1rem] md:pt-[2rem] pl-[0.5rem] pr-[0.5rem] md:pl-[0rem] md:pr-[0rem]">
        <Swiper :items="items">
          <template #item="{ item }">
            <div
              class="cat-box-item rounded-lg h-[75px] lg:h-[120px] relative text-center overflow-hidden bg-cover bg-no-repeat bg-center z-0 cursor-pointer"
              :style="{ backgroundImage: `url(${bg})` }">
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
    <div class="home-division">
      <div class="container mx-auto pt-[1rem] md:pt-[2rem] pl-[0.5rem] pr-[0.5rem] md:pl-[0rem] md:pr-[0rem] grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        <div class="division-item relative flex items-center bg-(--layout-division-bg) p-[0.5rem] rounded-[0.35rem] h-full max-md:flex-col max-md:text-center" v-for="(item, index) in 8">
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
    <div class="home-last-post">
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
      <div class="container mx-auto pt-[1rem] md:pt-[2rem] pl-[0.5rem] pr-[0.5rem] md:pl-[0rem] md:pr-[0rem] grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
        <div class="post-item relative overflow-hidden rounded-[0.3rem] bg-(--layout-post-bg)" v-for="(item, index) in 10">
          <div class="post-tips absolute top-0 left-0 z-1 m-2">
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
          <div class="post-wrapper p-[10px]">
            <div class="post-cat flex items-center mb-[2px] md:mb-[4px]">
              <a href="https://ripro.rizhuti.com/uncategorized">未分类</a>
              <a href="https://ripro.rizhuti.com/mediasc">音视频素材</a>
            </div>
            <div class="post-title text-[0.95rem] font-[600] m-[0] overflow-hidden text-ellipsis break-all hidden md:block line-clamp-1">
              <a target="" href="https://ripro.rizhuti.com/11666.html" title="文字内容简码组件展示">文字内容简码组件展示</a>
            </div>
            <div class="post-desc m-[0] overflow-hidden text-ellipsis break-all mt-[2px] leading-[1.25] md:mt-[4px] text-[#a1a1a8] whitespace-normal text-[12px] font-[500] line-clamp-1">
              文字内容简码组件展示 付费内容展示 评论可见内容展示 登录可见内容展示 按钮展示...
            </div>
            <div class="post-meta flex flex-row items-center justify-between text-[#a1a1a8] text-[0.75rem] mt-[8px]">
              <div class="flex items-center">
                <IconifyIconOnline icon="fa-solid:clock" />
                <div class="pl-[0.25rem]">10月前</div>
              </div>
              <div class="hidden md:flex items-center">
                <IconifyIconOnline icon="fa-solid:heart" />
                <div class="pl-[0.25rem]">14</div>
              </div>
              <div class="hidden md:flex items-center">
                <IconifyIconOnline icon="fa-solid:star" />
                <div class="pl-[0.25rem]">14</div>
              </div>
              <div class="flex items-center">
                <IconifyIconOnline icon="fa-solid:eye" />
                <div class="pl-[0.25rem]">14</div>
              </div>
              <div class="flex items-center">
                <IconifyIconOnline icon="fa-solid:coins" />
                <div class="pl-[0.25rem]">14</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[1000px]">dd</div>
  </main>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { jarallax } from "jarallax";
import Search from "@/components/Search/index.vue";
import NoticeBar from "@/components/NoticeBar/index.vue";
import Swiper from "@/components/Swiper/index.vue";
import bg from "@/assets/bg.png";
import post from "@/assets/post.jpg";
defineOptions({
  name: "Index"
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
  // font-size: 0.857rem;
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
    font-weight: 500;
    line-height: 1;
    white-space: nowrap;
  }
}

.home-cat-box {
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

.home-last-post {
  .post-item {
    transition: all 0.3s;

    .post-tips {
      .post-tip-dark {
        background-color: rgba(var(--layout-dark-rgb), 0.75) !important;
      }

      .post-tip-warning {
        background-color: rgba(var(--layout-warning-rgb), 0.75) !important;
      }

      > div {
        margin-right: 5px;
      }
    }
  }

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

  .post-entry {
    &::before {
      display: block;
      padding-top: 66.6666666667%;
      content: "";
    }

    .post-entry-img {
      transition: all 0.3s ease-in-out;
    }
  }

  .post-wrapper {
    .post-cat {
      > a {
        display: flex;
        align-items: center;
        margin-right: 5px;
        font-size: 0.75rem;
        color: #a1a1a8;

        &:first-child::before {
          background-color: rgb(33 99 232 / 75%);
        }

        &:last-child::before {
          background-color: rgb(247 195 46 / 75%);
        }

        &::before {
          display: block;
          width: 6px;
          height: 6px;
          margin-right: 5px;
          content: "";
          border-radius: 50%;
        }
      }
    }

    .post-meta {
      // display: flex;
      // align-items: center;
      // color: #a1a1a8;
      // font-size: 0.75rem;
      // margin-top: 8px;
      // white-space: nowrap;
      // letter-spacing: -0.2px;
      // > span {
      //   > svg {
      //     display: inline-block;
      //     font-weight: 400;
      //     margin-right: 0.25rem !important;
      //   }
      // }
    }
    // .post-meta {
    //   > div {
    //   // > div {
    //   //   display: flex;
    //   //   flex: 1;
    //   //   align-items: center;
    //   //   // margin-right: 2px;
    //   //   justify-content: center;
    //   //   &:first-child {
    //   //     justify-content: flex-start;
    //   //   }
    //   //   &:last-child {
    //   //     // flex: unset;
    //   //     text-align: right;
    //   //     margin-right: 0;
    //   //     justify-content: flex-end;
    //   //   }
    //   // }
    // }
  }
}
</style>
