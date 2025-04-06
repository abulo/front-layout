<template>
  <main>
    <SearchBox />
    <NoticeBox />
    <CateBox />
    <DivisionBox />
    <LastPost />
    <CmsPost />
    <TitlePost />
    <MediaPost />
    <CmsRowPost />
    <CmsRowOnlyPost />
    <CmsPptPost />

    <div class="h-[1000px]">dd</div>
    <el-backtop :right="5" :bottom="100" />
  </main>
</template>
<script setup lang="ts">
import SearchBox from "./components/search-box.vue";
import NoticeBox from "./components/notice-box.vue";
import CateBox from "./components/cate-box.vue";
import DivisionBox from "./components/division-box.vue";
import LastPost from "./components/post/last.vue";
import CmsPost from "./components/post/cms.vue";
import TitlePost from "./components/post/title.vue";
import MediaPost from "./components/post/media.vue";
import CmsRowPost from "./components/post/cms-row.vue";
import CmsRowOnlyPost from "./components/post/cms-row-only.vue";
import CmsPptPost from "./components/post/cms-ppt.vue";
defineOptions({
  name: "Index"
});
</script>

<style lang="scss" scoped></style>
