<template>
  <div class="relative w-full overflow-hidden px-0">
    <div
      ref="container"
      class="flex transition-transform duration-300 ease-in-out"
      :style="{ transition: '0.25s', transform: `translateX(-${currentOffset}px)` }"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @mousedown="handleMouseDown"
      @mousemove="handleMouseMove"
      @mouseup="handleMouseUp"
      @mouseleave="handleMouseUp">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="flex-shrink-0"
        :class="{
          'mr-2 sm:mr-2 md:mr-4 lg:mr-6': index !== items.length - 1
        }"
        :style="{ width: `${itemWidth}px` }">
        <slot name="item" :item="item" :index="index" />
      </div>
    </div>

    <!-- Navigation buttons -->
    <button
      v-if="showNavigation"
      @click="prev"
      class="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow-md z-10 hover:bg-opacity-100 transition-all hidden md:block"
      :class="{ 'opacity-50 cursor-not-allowed': currentOffset <= 0 }"
      :disabled="currentOffset <= 0">
      <IconifyIconOnline icon="ep:arrow-left-bold" />
    </button>
    <button
      v-if="showNavigation"
      @click="next"
      class="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow-md z-10 hover:bg-opacity-100 transition-all hidden md:block"
      :class="{ 'opacity-50 cursor-not-allowed': currentOffset >= maxOffset }"
      :disabled="currentOffset >= maxOffset">
      <IconifyIconOnline icon="ep:arrow-right-bold" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";

defineOptions({
  name: "Swiper"
});
interface Props {
  items: any[];
  showNavigation?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showNavigation: true
});

const container = ref<HTMLElement | null>(null);
const currentOffset = ref(0);
const itemWidth = ref(0);
const containerWidth = ref(0);
const startX = ref(0);
const moveX = ref(0);
const isDragging = ref(false);
const breakpoint = ref("");
const resizeObserver = ref<ResizeObserver | null>(null);

// TailwindCSS breakpoints
const breakpoints = {
  sm: 640, // 1 item
  md: 768, // 2 items
  lg: 1024, // 3 items
  xl: 1280, // 4 items
  "2xl": 1536 // 5 items
};

// Items to show based on breakpoint
const visibleItemsCount = computed(() => {
  switch (breakpoint.value) {
    case "sm":
      return 2;
    case "md":
      return 3;
    case "lg":
      return 4;
    case "xl":
      return 5;
    case "2xl":
      return 6;
    default:
      return 2;
  }
});

// Detect current breakpoint
const detectBreakpoint = () => {
  const width = containerWidth.value;
  if (width >= breakpoints["2xl"]) {
    breakpoint.value = "2xl";
  } else if (width >= breakpoints["xl"]) {
    breakpoint.value = "xl";
  } else if (width >= breakpoints["lg"]) {
    breakpoint.value = "lg";
  } else if (width >= breakpoints["md"]) {
    breakpoint.value = "md";
  } else {
    breakpoint.value = "sm";
  }
};

// Calculate total content width including gaps
const totalContentWidth = computed(() => {
  const itemCount = props.items.length;
  let gapWidth = 0;

  switch (breakpoint.value) {
    case "sm":
      gapWidth = (itemCount - 1) * 8;
      break; // mr-2 = 8px
    case "md":
      gapWidth = (itemCount - 1) * 16;
      break; // mr-4 = 16px
    case "lg":
    case "xl":
    case "2xl":
      gapWidth = (itemCount - 1) * 24;
      break; // mr-6 = 24px
    default:
      gapWidth = (itemCount - 1) * 8;
  }

  return itemCount * itemWidth.value + gapWidth;
});

// Maximum allowed offset
const maxOffset = computed(() => {
  return Math.max(totalContentWidth.value - containerWidth.value, 0);
});

// Calculate gap size based on breakpoint
const getGapSize = () => {
  switch (breakpoint.value) {
    case "sm":
      return 8;
    case "md":
      return 16;
    case "lg":
    case "xl":
    case "2xl":
      return 24;
    default:
      return 8;
  }
};

// Update container and item sizes
const updateSizes = async () => {
  if (!container.value) return;

  // Wait for the next tick to ensure DOM is updated
  await nextTick();

  // Get the actual container width
  containerWidth.value = container.value.offsetWidth;
  detectBreakpoint();

  const gapSize = getGapSize();

  // Calculate item width considering gaps
  itemWidth.value = (containerWidth.value - (visibleItemsCount.value - 1) * gapSize) / visibleItemsCount.value;

  // Ensure current offset doesn't exceed max
  if (currentOffset.value > maxOffset.value) {
    currentOffset.value = maxOffset.value;
  }

  // Snap to the nearest item
  snapToNearestItem();
};

// Snap to the nearest item based on current offset
const snapToNearestItem = () => {
  const gapSize = getGapSize();
  const itemSize = itemWidth.value + gapSize;
  const snappedOffset = Math.round(currentOffset.value / itemSize) * itemSize;
  currentOffset.value = Math.min(Math.max(snappedOffset, 0), maxOffset.value);
};

// Go to previous slide
const prev = () => {
  const visibleItemCount = visibleItemsCount.value;
  const gapSize = getGapSize();
  const moveBy = (itemWidth.value + gapSize) * visibleItemCount;
  currentOffset.value = Math.max(currentOffset.value - moveBy, 0);
};

// Go to next slide
const next = () => {
  const visibleItemCount = visibleItemsCount.value;
  const gapSize = getGapSize();
  const moveBy = (itemWidth.value + gapSize) * visibleItemCount;
  currentOffset.value = Math.min(currentOffset.value + moveBy, maxOffset.value);
};

// Touch event handlers
const handleTouchStart = (e: TouchEvent) => {
  isDragging.value = true;
  startX.value = e.touches[0].clientX;
};

const handleTouchMove = (e: TouchEvent) => {
  if (!isDragging.value) return;
  moveX.value = e.touches[0].clientX - startX.value;
  currentOffset.value = Math.min(Math.max(currentOffset.value - moveX.value, 0), maxOffset.value);
  startX.value = e.touches[0].clientX;
};

const handleTouchEnd = () => {
  if (!isDragging.value) return;

  if (moveX.value > 50) {
    prev();
  } else if (moveX.value < -50) {
    next();
  } else {
    snapToNearestItem();
  }

  isDragging.value = false;
  startX.value = 0;
  moveX.value = 0;
};

// Mouse event handlers
const handleMouseDown = (e: MouseEvent) => {
  isDragging.value = true;
  startX.value = e.clientX;
};

const handleMouseMove = (e: MouseEvent) => {
  if (!isDragging.value) return;
  moveX.value = e.clientX - startX.value;
  currentOffset.value = Math.min(Math.max(currentOffset.value - moveX.value, 0), maxOffset.value);
  startX.value = e.clientX;
};

const handleMouseUp = () => {
  if (!isDragging.value) return;

  if (moveX.value > 50) {
    prev();
  } else if (moveX.value < -50) {
    next();
  } else {
    snapToNearestItem();
  }

  isDragging.value = false;
  startX.value = 0;
  moveX.value = 0;
};

// Lifecycle hooks
onMounted(() => {
  // Use ResizeObserver for more precise resize detection
  resizeObserver.value = new ResizeObserver(async () => {
    await updateSizes();
  });

  if (container.value) {
    resizeObserver.value.observe(container.value);
  }

  // Initial setup
  updateSizes();
});

onUnmounted(() => {
  if (resizeObserver.value && container.value) {
    resizeObserver.value.unobserve(container.value);
  }
});
</script>
