<template>
  <div class="flex items-center overflow-hidden w-full">
    <!-- 通知内容区域 -->
    <div class="flex-1 h-full" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
      <div class="relative h-full">
        <Transition :name="transitionName" mode="out-in">
          <div class="absolute flex items-center justify-center w-full h-full" :key="currentIndex">
            <component :is="slotItems[currentIndex]" v-if="hasContent" />
          </div>
        </Transition>
      </div>
    </div>
    <!-- 控制按钮 -->
    <div class="control h-full flex items-center justify-center cursor-pointer bg-[none]">
      <div @click="scrollStep(-1)">
        <slot name="left"> <IconifyIconOnline icon="ep:arrow-left-bold" /></slot>
      </div>
      <div @click="scrollStep(1)">
        <slot name="right">
          <IconifyIconOnline icon="ep:arrow-right-bold" />
        </slot>
      </div>
    </div>
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
.control {
  background: none;
  border: none;
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
