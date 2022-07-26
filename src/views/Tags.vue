<template>
  <div class="item-box content-box">
    <h1 class="title">标签</h1>
    <div class="tag-cloud">
      <a
        v-for="item in tagListWithBlogCount.list"
        :key="item.id"
        :style="getStyle(item.articleNumber)"
        >{{ item.name }}</a
      >
    </div>
  </div>
</template>

<script>
import headerMixin from "../mixin/header";
import getWordCloudStyle from "@utils/wordCloud";
import { mapState } from "vuex";
export default {
  name: "BlogTagsView",
  mixins: [headerMixin],
  data() {
    return {
      list: [],
    };
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
.title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 10px;
  color: #4c4948;
}
.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  a {
    padding: 5px;
  }
  font-size: 18px;
}
</style> 