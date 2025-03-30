// useScrollDetection.ts
import { ref, onMounted, onUnmounted } from "vue";

type ScrollStatus = "top" | "scrolling" | "sticky-up" | "sticky-down";
type ScrollDirection = "up" | "down" | null;

export function useScrollDetection(threshold: number = 10) {
  const scrollStatus = ref<ScrollStatus>("top");
  const lastScrollPosition = ref(0);
  const lastDirection = ref<ScrollDirection>(null);
  let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    // 检查是否在页面顶部
    if (currentScrollPosition <= 0) {
      scrollStatus.value = "top";
      lastScrollPosition.value = currentScrollPosition;
      lastDirection.value = null;
      return;
    }

    // 确定滚动方向
    if (Math.abs(currentScrollPosition - lastScrollPosition.value) > threshold) {
      if (currentScrollPosition > lastScrollPosition.value) {
        lastDirection.value = "down";
        scrollStatus.value = "sticky-down";
      } else {
        lastDirection.value = "up";
        scrollStatus.value = "sticky-up";
      }
    }

    // 设置滚动停止检测
    scrollTimeout = setTimeout(() => {
      if (currentScrollPosition > 0) {
        // 停止滚动时，根据最后的方向设置状态
        scrollStatus.value = lastDirection.value === "up" ? "sticky-up" : "sticky-down";
      }
    }, 100);

    lastScrollPosition.value = currentScrollPosition;
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
  });

  return {
    scrollStatus
  };
}
