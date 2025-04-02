<template>
  <div class="notice-bar-container">
    <!-- 左侧控制按钮 -->
    <button class="control-btn left-btn" @click="scrollStep(-1)">
      <slot name="left-control">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" fill="currentColor" />
        </svg>
      </slot>
    </button>

    <!-- 通知内容区域 -->
    <div class="notice-content" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
      <div class="item-wrap">
        <Transition :name="transitionName" mode="out-in">
          <div class="current-item" :key="currentIndex">
            <component :is="slotItems[currentIndex]" v-if="hasContent" />
          </div>
        </Transition>
      </div>
    </div>

    <!-- 右侧控制按钮 -->
    <button class="control-btn right-btn" @click="scrollStep(1)">
      <slot name="right-control">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor" />
        </svg>
      </slot>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, useSlots } from "vue";

interface Props {
  stepInterval?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  autoScroll?: boolean;
  transitionDuration?: number;
}

const props = withDefaults(defineProps<Props>(), {
  stepInterval: 3000,
  direction: "left",
  pauseOnHover: true,
  autoScroll: true,
  transitionDuration: 500
});

const slots = useSlots();
const scrollTimer = ref<number | null>(null);
const isHovering = ref(false);
const currentIndex = ref(0);
const isTransitioning = ref(false);
const scrollDirection = ref<"left" | "right">(props.direction);

const slotItems = computed(() => (slots.default ? slots.default() : []));
const hasContent = computed(() => slotItems.value.length > 0);
const transitionName = computed(() => (scrollDirection.value === "left" ? "slide-left" : "slide-right"));

const scrollStep = (direction: number) => {
  if (!hasContent.value || slotItems.value.length <= 1 || isTransitioning.value) return;

  scrollDirection.value = direction > 0 ? "right" : "left";
  isTransitioning.value = true;
  stopAutoScroll();

  if (direction > 0) {
    currentIndex.value = (currentIndex.value + 1) % slotItems.value.length;
  } else {
    currentIndex.value = (currentIndex.value - 1 + slotItems.value.length) % slotItems.value.length;
  }

  setTimeout(() => {
    isTransitioning.value = false;
    startAutoScroll();
  }, props.transitionDuration);
};

const startAutoScroll = () => {
  if (!props.autoScroll || isHovering.value || !hasContent.value || slotItems.value.length <= 1) return;
  stopAutoScroll();
  scrollTimer.value = window.setTimeout(() => scrollStep(props.direction === "left" ? -1 : 1), props.stepInterval);
};

const stopAutoScroll = () => {
  if (scrollTimer.value) {
    clearTimeout(scrollTimer.value);
    scrollTimer.value = null;
  }
};

const handleMouseEnter = () => props.pauseOnHover && (isHovering.value = true) && stopAutoScroll();
const handleMouseLeave = () => props.pauseOnHover && (isHovering.value = false) && startAutoScroll();

onMounted(startAutoScroll);
onBeforeUnmount(stopAutoScroll);
</script>

<style lang="scss" scoped>
.notice-bar-container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  overflow: hidden;
  background-color: #f8f8f8;
  border-radius: 4px;
}

.notice-content {
  flex: 1;
  height: 100%;
  overflow: hidden;
}

.item-wrap {
  position: relative;
  height: 100%;
}

.current-item {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.control-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 15px;
  color: #666;
  cursor: pointer;
  background: none;
  border: none;
}

.control-btn:hover {
  background-color: #e8e8e8;
}

.control-btn svg {
  display: block;
}

.left-btn {
  border-right: 1px solid #e0e0e0;
}

.right-btn {
  border-left: 1px solid #e0e0e0;
}

/* 向左滑动效果 */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all v-bind('props.transitionDuration + "ms"') ease;
}

.slide-left-enter-from {
  transform: translateX(100%);
}

.slide-left-leave-to {
  transform: translateX(-100%);
}

/* 向右滑动效果 */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all v-bind('props.transitionDuration + "ms"') ease;
}

.slide-right-enter-from {
  transform: translateX(-100%);
}

.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
