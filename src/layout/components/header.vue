<template>
  <div class="container h-full">
    <div class="navbar relative h-[60px] flex items-center">
      <div class="logo relative">
        <router-link :to="{ path: '/' }"> <img :src="logo" class="h-[60px] min-w-[100px] w-[auto]" /></router-link>
      </div>
      <div class="sep h-full w-[1px] mr-[20px] ml-[20px]" />
      <nav class="main-menu hidden lg:block xl:block 2xl:block">
        <ul class="nav-list whitespace-nowrap m-0 p-0">
          <li class="menu-item relative inline-block">
            <router-link class="text-white text-[16px] font-[500] mr-[10px] ml-[10px] flex items-center" :to="{ path: '/' }">
              <IconifyIconOnline icon="fa-solid:home" class="font-[900] leading-[60px]" />
              <div class="mr-[4px] ml-[4px] leading-[60px] h-[60px] block list-disc">首页</div>
              <IconifyIconOnline icon="fa-solid:angle-down" class="font-[900] leading-[60px]" />
            </router-link>
            <ul class="sub-menu absolute left-[50%] top-[100%] opacity-0 list-none invisible w-[auto] p-[0.5rem] pt-[1px] pb-0 pr-0 pl-0 rounded-[0.3rem] bg-white z-100">
              <li class="menu-item relative block p-0"><router-link class="flex items-center pt-[10px] pb-[10px] pl-[20px] pr-[20px]" :to="{ path: '/' }">首页风格1</router-link></li>
              <li class="menu-item relative block p-0"><router-link class="flex items-center pt-[10px] pb-[10px] pl-[20px] pr-[20px]" :to="{ path: '/' }">首页风格1</router-link></li>
              <li class="menu-item relative block p-0"><router-link class="flex items-center pt-[10px] pb-[10px] pl-[20px] pr-[20px]" :to="{ path: '/' }">首页风格1</router-link></li>
              <li class="menu-item relative block p-0"><router-link class="flex items-center pt-[10px] pb-[10px] pl-[20px] pr-[20px]" :to="{ path: '/' }">首页风格1</router-link></li>
              <li class="menu-item relative block p-0"><router-link class="flex items-center pt-[10px] pb-[10px] pl-[20px] pr-[20px]" :to="{ path: '/' }">首页风格1</router-link></li>
              <li class="menu-item relative block p-0"><router-link class="flex items-center pt-[10px] pb-[10px] pl-[20px] pr-[20px]" :to="{ path: '/' }">首页风格1</router-link></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="actions flex items-center grow justify-end whitespace-nowrap text-white">
        <span class="action-btn relative inline-block p-[0.25rem] cursor-pointer text-center align-middle text-white">
          <IconifyIconOnline :icon="isDark ? 'fa-solid:moon' : 'fa-solid:sun'" class="font-[900] leading-[60px]" @click="toggle" />
        </span>
        <span class="action-btn relative inline-block p-[0.25rem] cursor-pointer text-center align-middle text-white">
          <IconifyIconOnline icon="fa-solid:search" class="font-[900] leading-[60px]" @click="searchVisible = true" />
        </span>
        <span class="action-btn relative inline-block p-[0.25rem] cursor-pointer text-center align-middle text-white">
          <IconifyIconOnline :icon="isNotifyLoading ? 'svg-spinners:8-dots-rotate' : 'fa-solid:bell'" class="font-[900] leading-[60px]" />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useGlobal } from "@pureadmin/utils";
import { useAppStoreHook } from "@/store/modules/app";
import logo from "@/assets/logo.png";
defineOptions({
  name: "LayHeader"
});
// 定义全局变量
const { $storage } = useGlobal<GlobalPropertiesApi>();
// 定义是否暗黑模式
const isDark = ref(false);
// 定义加载中
const isNotifyLoading = ref(false);
// 定义搜索框是否显示
const searchVisible = ref(true);

const input = ref("");
const select = ref("");

// 切换主题
const toggle = () => {
  setGlobal();
  initTheme();
};

const setGlobal = () => {
  const html = document.documentElement;
  if (html.classList.contains("dark")) {
    isDark.value = true;
  }
  useAppStoreHook().setDarkMode(!isDark.value);
  useAppStoreHook().setTheme(!isDark.value ? "dark" : "light");
};

const initTheme = () => {
  if ($storage?.layout?.darkMode) {
    document.documentElement.classList.add("dark");
    useAppStoreHook().setDarkMode(true);
    useAppStoreHook().setTheme("dark");
    isDark.value = true;
  } else {
    document.documentElement.classList.remove("dark");
    useAppStoreHook().setDarkMode(false);
    useAppStoreHook().setTheme("light");
    isDark.value = false;
  }
};

onMounted(() => {
  initTheme();
  // setGlobal();
});
</script>

<style lang="scss" scoped>
.navbar {
  .nav-list {
    .sub-menu {
      box-shadow: 0 0 30px rgb(0 0 0 / 7%);
      transform: translate(-50%, -10px) scale(0.97);
      transition: all 0.1s ease-in-out;

      a {
        font-size: inherit;
        transform: transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);
      }
    }

    .sub-menu::before {
      position: absolute;
      top: -19px;
      left: 50%;
      margin-left: -10px;
      content: "";
      border-color: transparent;
      border-style: solid;
      border-width: 10px;
      border-bottom-color: #fff;
    }

    .menu-item:hover {
      > .sub-menu {
        visibility: visible;
        pointer-events: auto;
        opacity: 1;
        transform: translate(-50%, 0) scale(1);
        transition: all 0.25s ease-in-out;
      }
    }
  }

  .actions {
    .action-btn {
      font-family: none;
      font-size: 1rem;
      line-height: 1.5;
      transition: all 0.3s ease-in-out;
    }
  }

  .navbar-search {
    transform: translateY(-50%);
    transition: all 0.2s ease-in-out;

    .search-form {
      box-shadow: 0 0 0 5px rgb(0 0 0 / 10%);
      transition: all 0.3s ease-in-out;
      // .search-fields {
      // }
    }
  }

  .navbar-search-show {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
}
// .sub-menu {
//   position: absolute;
//   left: 50%;
//   top: 100%;
//   opacity: 1;
//   transform: translate(-50%, -10px) scale(0.97);
//   list-style-type: none;
//   // visibility: hidden;
//   width: auto;
//   padding: 0.5rem;
//   margin: -1px 0 0 0;
//   border-radius: 0.3rem;
//   box-shadow: 0 0 30px rgba(0, 0, 0, 0.07);
//   background-color: #fff;
//   transition: all 0.1s ease-in-out;
//   z-index: 80;
//   &:before {
//     content: "";
//     position: absolute;
//     top: -19px;
//     left: 50%;
//     margin-left: -10px;
//     border-width: 10px;
//     border-style: solid;
//     border-color: transparent;
//     border-bottom-color: #fff;
//   }
//   .menu-item {
//     display: block;
//     padding: 0;
//   }
//   > a {
//     font-size: initial;
//     align-items: center;
//     display: flex;
//     padding: 10px 20px;
//     transition: -webkit-transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);
//     transition: transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);
//   }
//   > a:hover {
//     opacity: 1;
//   }
// }
</style>
