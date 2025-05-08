<template>
  <div v-if="modelValue" class="layer bottom-0 left-0 right-0 top-0 z-50 fixed">
    <div class="header-popup fixed flex items-center justify-center left-0 top-0 h-full w-full z-[999] overflow-x-hidden overflow-y-auto opacity-[1] visible">
      <div class="header-popup-body" :style="contentStyle">
        <div class="header-popup-close"><span class="svg-close" @click="closePopup" /></div>
        <div class="header-popup-content"><slot /></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";

defineOptions({
  name: "Popup"
});

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false, // 这里设置默认值为 false
    required: false // 因为有了默认值，可以不需要 required
  },
  width: {
    type: Number,
    default: 400,
    required: false
  }
});

const contentStyle = computed(() => {
  return {
    width: `${props.width}px`
  };
});

const emit = defineEmits(["update:modelValue"]);

// 关闭弹窗
const closePopup = () => {
  emit("update:modelValue", false);
};

// 当弹窗显示时，禁止页面滚动
watch(
  () => props.modelValue,
  newVal => {
    if (newVal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
);
</script>

<style lang="scss" scoped>
.layer {
  background: rgb(0 0 0 / 70%);
  backdrop-filter: blur(5px);

  .header-popup {
    .header-popup-body {
      position: relative;
      visibility: visible;
      padding-top: 2rem;
      padding-bottom: 2rem;
      pointer-events: auto;
      opacity: 1;
      transform: translateX(0) translateY(-40px) scale(0.98);
      transform: translateX(0) translateY(0) scale(1);
      transition: all 0.2s ease-in-out;

      .header-popup-content {
        position: relative;
        padding: 1.25rem;
        overflow: hidden;
        background: #fff;
        border-radius: 6px;
        border-radius: 0.5rem;
      }

      .header-popup-close {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 99;
        width: 100%;
        text-align: center;
        transform: translateY(25%);

        .svg-close {
          display: inline-block;
          width: 28px;
          height: 28px;
          vertical-align: middle;
          cursor: pointer;
          background-image: url("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHN0eWxlLz48L2RlZnM+PHBhdGggZD0iTTUxMiAwQzIyOS4yIDAgMCAyMjkuMTk5OTk5IDAgNTEyYzAgMjgyLjggMjI5LjIgNTEyIDUxMiA1MTIgMjgyLjgwMDAwMSAwIDUxMi0yMjkuMiA1MTItNTEyQzEwMjQgMjI5LjE5OTk5OSA3OTQuODAwMDAxIDAgNTEyIDB6bTIxMy40NjA1MjIgNzI1Ljk3NTY1OWMtNi4wNzcyNDkgNi4wNzcyNDgtMTQuMDY0NDg4IDkuMTE1ODcyLTIyLjA1MTcyNyA5LjExNTg3Mi03Ljk4NzI0MiAwLTE2LjA2MTI5OC0zLjAzODYyNC0yMi4xMzg1NDgtOS4yMDI2OUw1MTIgNTU2LjI3MTMyMyAzNDIuNzI5NzUyIDcyNS44ODg4NDFjLTYuMDc3MjQ4IDYuMTY0MDY2LTE0LjE1MTMwNiA5LjIwMjY5LTIyLjEzODU0NiA5LjIwMjY5LTcuOTg3MjQgMC0xNS45NzQ0NzktMy4wMzg2MjQtMjIuMDUxNzI3LTkuMTE1ODcyLTEyLjI0MTMxMy0xMi4xNTQ0OTYtMTIuMjQxMzEzLTMxLjk0ODk2LS4wODY4MTgtNDQuMTkwMjczTDQ2Ny44OTY1NDYgNTExLjk5NDIzIDI5OC40NTI2NjEgMzQyLjIwMzA3NGMtMTIuMTU0NDk1LTEyLjI0MTMxMi0xMi4xNTQ0OTUtMzIuMDM1Nzc2LjA4NjgxOC00NC4xOTAyNzEgMTIuMjQxMzEzLTEyLjE1NDQ5NSAzMi4wMzU3NzctMTIuMTU0NDk1IDQ0LjE5MDI3My4wODY4MTdMNTEyIDQ2Ny43MTcxNDFsMTY5LjI3MDI0Ny0xNjkuNzA0MzM4YzEyLjE1NDQ5NS0xMi4yNDEzMTMgMzEuOTQ4OTU5LTEyLjI0MTMxMyA0NC4xOTAyNzUtLjA4NjgxOCAxMi4yNDEzMTMgMTIuMTU0NDk1IDEyLjI0MTMxMyAzMS45NDg5NTkuMDg2ODE4IDQ0LjE5MDI3Mkw1NTYuMTAzNDU0IDUxMS45OTQyMyA3MjUuNTQ3MzQgNjgxLjc4NTM4NmMxMi4xNTQ0OTUgMTIuMjQxMzEzIDEyLjE1NDQ5NSAzMi4wMzU3NzctLjA4NjgxOCA0NC4xOTAyNzN6IiBmaWxsPSIjZmZmIi8+PC9zdmc+");
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          transition: all 0.2s ease-in-out;

          &:hover {
            transform: rotate(180deg);
          }
        }
      }
    }
  }
}

[data-theme="dark"] {
  .header-popup-content {
    background: #191b1d !important;
  }
}
</style>
