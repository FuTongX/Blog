<template>
  <div class="item-box aside-widget">
    <div class="widget-title">
      <i class="iconfont icon-24gf-tags"></i>
      <span>标签</span>
    </div>
    <div class="widget-content">
      <div class="card-tag-cloud">
        <a
          v-for="item in tagListWithBlogCount.list"
          :key="item.id"
          :style="getStyle(item.articleNumber)"
          >{{ item.name }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import getWordCloudStyle from "@utils/wordCloud";
import { mapState } from "vuex";
export default {
  name: "BlogTag",
  data() {
    return {};
  },
  computed: {
    ...mapState("App", ["tagListWithBlogCount"]),
  },
  beforeCreate() {
    this.$store.dispatch("App/getTagListWithBLogNumber");
  },
  methods: {
    getStyle(f) {
      return getWordCloudStyle(Number(f));
    },
  },
};
</script>

<style lang="scss" scoped>
.card-tag-cloud {
  display: flex;
  flex-wrap: wrap;
  a {
    padding: 5px;
  }
}
</style>>
 