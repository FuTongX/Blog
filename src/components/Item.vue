<template>
  <div @click="toArticle" class="item item-box">
    <div class="post-cover">
      <a>
        <el-image
          style="width: 100%; height: 200px"
          :src="data.cover"
          fit="cover"
        ></el-image>
      </a>
    </div>
    <div class="post-info">
      <h3 class="article-title">
        <a href="">{{ data.title }}</a>
      </h3>
      <div class="post-meta-date">
        <i class="iconfont icon-calendar-fill"></i>
        <span>发表于</span
        ><time datetime="" title="">{{ data.createdAt | TimeFormat }}</time>
      </div>
      <div class="post-meta-date">
        <i class="iconfont icon-24gf-tags"></i>
        <span>{{ data.category.name }}</span> |
        <i class="el-icon-view"></i>
        <span>阅读量{{ data.views }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogItem",
  props: ["data"],
  methods: {
    toArticle() {
      this.$router.push({
        path: "/article",
        query: {
          id: this.data.id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  width: 98%;
  overflow: hidden;
}
@media screen and (max-width: 768px) {
  .item {
    width: 100%;
  }
}

.post-cover {
  text-align: center;
  height: 200px;
  overflow: hidden;
  .el-image {
    transition: all 0.7s;
    &:hover {
      transform: scale(1.1);
    }
  }
}

.post-info {
  padding: 10px 25px 10px;
  background-color: #fff;
  .article-title {
    font-size: 18px;
    color: #1f2d3d;
    margin-bottom: 5px;
  }
  .post-meta-date {
    font-size: 14px;
    color: #858585;
    margin-bottom: 5px;
  }
}
</style>