<template>
  <div class="aside-widget item-box">
    <div class="widget-title">
      <i class="iconfont icon-fenlei"></i>
      <span>分类</span>
    </div>
    <div class="widget-content">
      <el-tree
        :data="categoryListWithBlogCount.list"
        :props="defaultProps"
        @node-click="handleNodeClick"
        default-expand-all
        icon-class="el-icon-arrow-right"
      >
        <span slot-scope="{ data }">
          <span> {{ data.name }}</span>
          <span v-if="data.articleCount > 0">
            (&nbsp;{{ data.articleCount }}&nbsp;)</span
          >
        </span>
      </el-tree>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "BLogClassification",
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "name",
        isLeaf: "isLeaf",
      },
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
  },
  computed: {
    ...mapState("App", ["categoryListWithBlogCount"]),
  },
  beforeMount() {
    this.$store.dispatch("App/getCategoryListWithBlogCount");
  },
};
</script>

<style lang="scss" scoped>
</style> 
 