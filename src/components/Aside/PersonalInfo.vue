<template>
  <div class="item-box card-info">
    <div class="card-info-avatar">
      <!-- <img src="@imgs/avatear.png" alt="" /> -->
      <el-avatar
        :size="110"
        :src="userinfo.avatar"
      ></el-avatar>
      <div class="name">{{ userinfo.nickName }}</div>
      <div class="desription">{{ userinfo.motto }}</div>
    </div>
    <div class="card-info-data">
      <ul>
        <li>
          <a href="">
            <span class="info-title">文章</span>
            <span>{{ articleCount }}</span>
          </a>
        </li>
        <li>
          <a href="">
            <span class="info-title">标签</span>
            <span>{{ tagCount }}</span>
          </a>
        </li>
        <li>
          <a href="">
            <span class="info-title">分类</span>
            <span>{{ categoryCount }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="card-info-button">
      <a :href="userinfo.github" target="_blank"
        ><i class="iconfont icon-github-fill"></i>Follow Me</a
      >
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BlogPersonalInfo",
  computed: {
    ...mapState("App", [
      "articleCount",
      "categoryCount",
      "tagCount",
      "userinfo",
    ]),
  },
};
</script>

<style lang="scss" scoped>
.card-info {
  padding: 20px;
  .name {
    font-size: 25px;
    margin-bottom: 10px;
  }
  .desription {
    font-size: 17px;
    text-align: center;
  }
  .card-info-data {
    ul {
      display: flex;
      justify-content: space-between;
      span {
        display: block;
        text-align: center;
        margin-bottom: 10px;
        &.info-title {
          font-size: 17px;
        }
      }
    }
  }
  .card-info-button {
    width: 100%;
    font-size: 0.8rem;
    background-color: #49b1f5;
    padding: 10px 0;
    text-align: center;
    color: white;
  }
}

.card-info-avatar {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  .el-avatar {
    margin-bottom: 15px;
    transition: All 0.8s ease-in-out;
  }
  &:hover .el-avatar {
    transform: rotate(360deg);
  }
}
</style>>

 