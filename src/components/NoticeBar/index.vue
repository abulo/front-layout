<template>
  <div class="flex items-center overflow-hidden w-full">
    <!-- 通知内容区域 -->
    <div class="flex-1 h-full" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
      <div class="relative h-full">
        <Transition :name="transitionName" mode="out-in">
          <div class="absolute flex items-center justify-center w-full h-full" :key="currentIndex" v-if="hasContent">
            <template v-if="useItems">
              <slot name="item" :item="currentItemData" v-if="slots.item" />
              <div v-else>{{ currentItemData }}</div>
            </template>
            <template v-else>
              <component :is="currentSlotItem" />
            </template>
          </div>
        </Transition>
      </div>
    </div>
    <!-- 控制按钮 -->
    <div class="control h-full flex items-center justify-center cursor-pointer bg-[none]">
      <div @click="scrollStep(-1)">
        <slot name="left">
          <IconifyIconOnline icon="ep:arrow-left-bold" />
        </slot>
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

defineOptions({
  name: "NoticeBar"
});

interface Props {
  stepInterval?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  autoScroll?: boolean;
  transitionDuration?: number;
  items?: any[];
}

const props = withDefaults(defineProps<Props>(), {
  stepInterval: 3000,
  direction: "left",
  pauseOnHover: true,
  autoScroll: true,
  transitionDuration: 500,
  items: () => []
});

const slots = useSlots();
const scrollTimer = ref<number | null>(null);
const isHovering = ref(false);
const currentIndex = ref(0);
const isTransitioning = ref(false);
const scrollDirection = ref<"left" | "right">(props.direction);

// 新增计算属性
const useItems = computed(() => props.items.length > 0);
const currentItemData = computed(() => props.items[currentIndex.value]);
const currentSlotItem = computed(() => slots.default?.()[currentIndex.value]);
const hasContent = computed(() => (useItems.value ? props.items.length > 0 : !!slots.default?.()));

const transitionName = computed(() => (scrollDirection.value === "left" ? "slide-left" : "slide-right"));

const scrollStep = (direction: number) => {
  if (!hasContent.value || isTransitioning.value) return;

  const contentLength = useItems.value ? props.items.length : slots.default?.().length || 0;
  if (contentLength <= 1) return;

  scrollDirection.value = direction > 0 ? "right" : "left";
  isTransitioning.value = true;
  stopAutoScroll();

  currentIndex.value = (currentIndex.value + direction + contentLength) % contentLength;

  setTimeout(() => {
    isTransitioning.value = false;
    startAutoScroll();
  }, props.transitionDuration);
};

// 保持原有的自动滚动逻辑
const startAutoScroll = () => {
  if (!props.autoScroll || isHovering.value || !hasContent.value || props.items.length <= 1) return;
  stopAutoScroll();
  scrollTimer.value = window.setTimeout(() => scrollStep(props.direction === "left" ? -1 : 1), props.stepInterval);
};

const stopAutoScroll = () => {
  scrollTimer.value && clearTimeout(scrollTimer.value);
  scrollTimer.value = null;
};

const handleMouseEnter = () => props.pauseOnHover && (isHovering.value = true) && stopAutoScroll();
const handleMouseLeave = () => props.pauseOnHover && (isHovering.value = false) && startAutoScroll();

onMounted(startAutoScroll);
onBeforeUnmount(stopAutoScroll);
</script>

<style lang="scss" scoped>
/* 保持原有的样式不变 */
.control {
  background: none;
  border: none;
}

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
