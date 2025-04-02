<template>
  <header class="bg-white text-[#4d4d4d] absolute left-0 top-0 right-0 z-80" :class="headerClass">
    <div class="container mx-auto pl-[0.5rem] pr-[0.5rem]">
      <div class="navbar flex items-center h-[60px] relative">
        <div class="logo-wrapper relative">
          <router-link :to="{ path: '/' }"> <img :src="logo" class="h-[60px] min-w-[100px] w-[auto]" /></router-link>
        </div>
        <div class="sep h-full w-[1px] mr-[20px] ml-[20px] hidden md:flex" />
        <nav class="main-nav hidden lg:block">
          <ul class="nav-list">
            <li class="menu-item relative inline-block">
              <router-link :to="{ path: '/' }" class="flex items-center">
                <IconifyIconOnline icon="fa-solid:home" class="flex font-[900] leading-[60px]" />
                <div class="mr-[4px] ml-[4px] leading-[60px] h-[60px] block list-disc">首页</div>
                <IconifyIconOnline icon="fa-solid:angle-down" class="flex font-[900] leading-[60px]" />
              </router-link>
              <ul class="sub-menu absolute left-[50%] top-[100%] list-none opacity-0 invisible w-[auto] p-[0.5rem] m-[-1px_0_0_0] rounded-[0.3rem] bg-white z-80">
                <li class="menu-item relative block p-0"><router-link :to="{ path: '/' }">测试测试</router-link></li>
                <li class="menu-item relative block p-0"><router-link :to="{ path: '/' }">测+++++++试</router-link></li>
                <li class="menu-item relative block p-0"><router-link :to="{ path: '/' }">测试</router-link></li>
                <li class="menu-item relative block p-0"><router-link :to="{ path: '/' }">测试</router-link></li>
                <li class="menu-item relative block p-0"><router-link :to="{ path: '/' }">测试</router-link></li>
                <li class="menu-item relative block p-0"><router-link :to="{ path: '/' }">测试</router-link></li>
                <li class="menu-item relative block p-0"><router-link :to="{ path: '/' }">测试</router-link></li>
              </ul>
            </li>
          </ul>
        </nav>
        <div class="actions flex grow-1 justify-end items-center whitespace-nowrap">
          <span class="action-btn toggle-color relative">
            <IconifyIconOnline :icon="isDark ? 'fa-solid:moon' : 'fa-solid:sun'" class="font-[900] leading-[60px]" @click="toggleTheme" />
          </span>
          <span class="action-btn toggle-search" @click="toggleSearch"><IconifyIconOnline icon="fa-solid:search" class="font-[900] leading-[60px]" /></span>
          <!-- <span class="action-btn toggle-notify"><IconifyIconOnline :icon="isNotifyLoading ? 'svg-spinners:8-dots-rotate' : 'fa-solid:bell'" class="font-[900] leading-[60px]" /></span> -->
          <span class="action-btn toggle-notify"><IconifyIconOnline icon="fa-solid:bell" class="font-[900] leading-[60px]" /></span>
          <span class="action-btn login-btn flex items-center" @click="toggleLogin">
            <IconifyIconOnline icon="fa-solid:user" class="font-[900] leading-[60px] flex mr-[0.25rem]" />
            <span class="flex">登录</span>
          </span>
        </div>
        <div :class="isOpenSearch ? 'navbar-search show' : 'navbar-search'" ref="searchBox"><Search /></div>
      </div>
    </div>
  </header>
  <Popup v-model="loginVisible" :width="320"> sss </Popup>
  <div class="header-gap" :class="routeName === 'Index' ? 'h-0' : 'h-[60px]'" />
</template>

<script setup lang="ts">
import { ref, onMounted, h, computed, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";
import Search from "@/components/Search/index.vue";
import Popup from "@/components/Popup/index.vue";
import logo from "@/assets/logo.png";

defineOptions({
  name: "LayHeader"
});

const route = useRoute();
const routeName = route.name;
const isDark = ref(false);
const isOpenSearch = ref(false);
const searchBox = ref(null);
const loginVisible = ref(false);

const toggleLogin = () => {
  loginVisible.value = true;
};
// 切换搜索框状态
const toggleSearch = () => {
  isOpenSearch.value = true;
};

// 关闭搜索框
const closeSearch = () => {
  isOpenSearch.value = false;
};

// 点击外部关闭搜索框
const handleClickOutside = event => {
  if (searchBox.value && !searchBox.value.contains(event.target)) {
    closeSearch();
  }
};

const toggleTheme = () => {
  isDark.value = !isDark.value;
  document.documentElement.setAttribute("data-theme", isDark.value ? "dark" : "light");
};
const applyTheme = () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  isDark.value = prefersDark;
  document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
};

const props = defineProps<{
  scrollStatus: "top" | "scrolling" | "sticky-up" | "sticky-down";
}>();

const headerClass = computed(() => {
  const baseClass = "site-header";
  switch (props.scrollStatus) {
    case "top":
      return baseClass;
    case "scrolling":
      return `${baseClass} navbar-now`;
    case "sticky-up":
      return `${baseClass} navbar-sticky`;
    case "sticky-down":
      return `${baseClass} navbar-now`;
    default:
      return baseClass;
  }
});

onMounted(() => {
  applyTheme();
  document.addEventListener("mousedown", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("mousedown", handleClickOutside);
});
</script>

<style lang="scss" scoped>
.site-header.navbar-sticky {
  position: fixed !important;
}

.site-header:not(.navbar-sticky) {
  color: #fff !important;
  background-color: transparent !important;
  box-shadow: none !important;
}

.site-header.navbar-now {
  transform: translateY(-80px);
  transition:
    transform 0.3s,
    background-color 0.3s ease-out;
}

.site-header:not(.navbar-sticky) .navbar {
  .actions .action-btn,
  .nav-list > .menu-item > a {
    color: #fff !important;
  }
}

.site-header {
  position: absolute;
  box-shadow: 0 0 30px rgb(0 0 0 / 7%);
  transition: background-color 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  transition:
    background-color 0.3s cubic-bezier(0.77, 0, 0.175, 1),
    box-shadow 0.3s cubic-bezier(0.77, 0, 0.175, 1),
    transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  transition:
    background-color 0.3s cubic-bezier(0.77, 0, 0.175, 1),
    box-shadow 0.3s cubic-bezier(0.77, 0, 0.175, 1),
    transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);

  .navbar {
    .nav-list {
      padding: 0;
      margin: 0;
      white-space: nowrap;

      a {
        color: #4d4d4d;

        &:hover {
          color: rgb(77 77 77 / 85%);
        }
      }

      .menu-item {
        &:hover > .sub-menu {
          visibility: visible;
          pointer-events: auto;
          opacity: 1;
          transform: translate(-50%, 0) scale(1);
          transition: all 0.25s ease-in-out;
        }
      }

      > .menu-item {
        > a {
          margin: 0 10px;
          font-size: 1rem;
          line-height: 60px;
        }

        &.current-menu-item > a {
          color: #2163e8;
        }
      }

      .sub-menu {
        padding: 0.5rem;
        box-shadow: 0 0 30px rgb(0 0 0 / 7%);
        transform: translate(-50%, -10px) scale(0.97);
        transition: all 0.1s ease-in-out;

        &::before {
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

        .menu-item {
          display: block;
          padding: 0;

          > a {
            display: flex;
            align-items: center;
            padding: 10px 20px;
            font-size: initial;
            transition: transform 0.3s cubic-bezier(0.77, 0, 0.175, 1);

            &:hover {
              opacity: 1;
            }
          }
        }

        .sub-menu {
          top: 0;
          left: 100%;
          margin: 0;
          transform: translate(0, 0) scale(1) !important;

          &::before {
            display: none;
          }
        }
      }
    }

    .actions {
      .action-btn {
        // display: inline-block;
        padding: 0.25rem;
        font-family: none;
        font-size: 1rem;
        line-height: 1.5;
        vertical-align: middle;
        color: #4d4d4d;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
      }

      .login-btn {
        padding: 0.2rem 0.75rem;
        font-size: 0.875rem;
        color: #fff;
        background-color: rgb(3 121 255 / 65%);
        border-radius: 20px;
      }

      > span {
        margin-left: 0.5rem;

        &:first-child {
          margin-left: 0;
        }
      }
    }

    .navbar-search {
      position: absolute;
      inset: 0;
      z-index: 1;
      display: flex;
      visibility: hidden;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      opacity: 0;
      transform: translateY(-50%);
      transition: all 0.2s ease-in-out;
    }

    .navbar-search.show {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
  }
}

[data-theme="dark"] {
  .site-header {
    color: #a1a1a8;
    background-color: #000;
  }

  .navbar {
    .nav-list {
      a {
        color: #a1a1a8;
      }
    }

    .actions .action-btn {
      color: #a1a1a8;

      &.login-btn {
        color: #a1a1a8;
        background-color: #222529;
      }
    }

    .nav-list .sub-menu {
      background-color: #0f0f10;

      &::before {
        border-bottom-color: #0f0f10;
      }
    }
  }
}
</style>
