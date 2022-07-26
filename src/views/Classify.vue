<template>
  <div class="item-box content-box">
    <h1 class="title">分类</h1>
    <el-tree
      :data="categoryListWithBlogCount.list"
      :props="defaultProps"
      @node-click="handleNodeClick"
      default-expand-all
      icon-class="iconfont icon-fenlei1"
    >
      <span slot-scope="{ data }">
        <span> {{ data.name }}</span>
        <span v-if="data.articleCount > 0">
          (&nbsp;{{ data.articleCount }}&nbsp;)</span
        >
      </span>
    </el-tree>
  </div>
</template>
 
<script>
import { mapState } from "vuex";
import headerMixin from "../mixin/header";
export default {
  name: "BlogClassify",
  mixins: [headerMixin],
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
.title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 10px;
  color: #4c4948;
}
::v-deep .el-tree-node__expand-icon {
  color: #49b1f5;
}
</style> 
 