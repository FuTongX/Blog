<template>
  <div class="item-box content-box">
    <MarkdownItVue :content="content"></MarkdownItVue>
  </div>
</template>

<script>
import MarkdownItVue from "markdown-it-vue";
import headerMixin from "../mixin/header";
export default {
  name: "BlogDemo",
  mixins: [headerMixin],
  components: {
    MarkdownItVue,
  },

  data() {
    return {
      content: "# your markdown content",
    };
  },
};
</script>

<style>
</style>