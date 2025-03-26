<script lang="ts">
import { defineComponent } from "vue";
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
// import { onMounted } from "vue";
// import { useDark, deviceDetection } from "@pureadmin/utils";

// const { isDark, toggleDark } = useDark();

// const isMobile = deviceDetection();
// onMounted(() => {
//   console.log(isDark.value ? "dark" : "light");
// });

export default defineComponent({
  name: "app",
  components: {
    [ElConfigProvider.name]: ElConfigProvider
  },
  computed: {
    currentLocale() {
      return zhCn;
    }
  }
});
</script>

<template>
  <el-config-provider :locale="currentLocale">
    <router-view />
  </el-config-provider>
  <!-- <el-button @click="toggleDark"> {{ `当前网页处于 ${isDark ? "dark" : "light"} 主题，点击切换主题` }} {{ isMobile ? "（移动端不支持切换）" : "" }} </el-button> -->
</template>
