<template>
  <el-drawer
    size="300px"
    title="我是侧边栏"
    :visible.sync="drawer"
    :with-header="false"
    class="rightside"
  >
    <div class="card-info">
      <div class="card-info-avatar">
        <el-avatar :size="110" :src="userinfo.avatar"></el-avatar>
      </div>
      <div class="card-info-data">
        <ul>
          <li>
            <div>
              <span class="info-title">文章</span>
              <span>{{ articleCount }}</span>
            </div>
          </li>
          <li>
            <div>
              <span class="info-title">标签</span>
              <span>{{ tagCount }}</span>
            </div>
          </li>
          <li>
            <div>
              <span class="info-title">分类</span>
              <span>{{ categoryCount }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="card-nav">
        <ul>
          <li>
            <a @click="jump('/home')"
              ><i class="iconfont icon-shouyefill"></i>主页</a
            >
          </li>
          <li>
            <a @click="jump('/demo')"
              ><i class="iconfont icon-demo-"></i>Demo</a
            >
          </li>
          <li>
            <a @click="jump('/tags')"
              ><i class="iconfont icon-24gf-tags"></i>标签</a
            >
          </li>
          <li>
            <a @click="jump('/timeline')"
              ><i class="iconfont icon-timeline-fill"></i>时间轴</a
            >
          </li>
          <li>
            <a @click="jump('/classify')"
              ><i class="iconfont icon-fenlei"></i>分类</a
            >
          </li>
          <li>
            <a @click="jump('/about')"
              ><i class="iconfont icon-aixin"></i>关于</a
            >
          </li>
        </ul>
      </div>
    </div>
  </el-drawer>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BlogHeaderDrawer",
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    jump(path) {
      this.$router.push({
        path,
      });
      this.drawer = false;
    },
  },
  mounted() {
    this.$bus.$on("showDrawer", (data) => {
      this.drawer = data;
    });
  },
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
.rightside {
  color: black;
  .card-info {
    padding: 20px;
    .card-info-data {
      ul {
        display: flex;
        justify-content: space-around;
        span {
          display: block;
          text-align: center;
          margin-bottom: 10px;
          &.info-title {
            font-size: 14px;
          }
        }
      }
    }
    .card-info-avatar {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 15px;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-bottom: 15px;
      }
    }
    .card-nav {
      padding: 30px 20px;
      font-size: 16px;
      line-height: 4em;
      color: rgb(76, 73, 72);
      i {
        margin-right: 25px;
      }
    }
  }
}
</style> 
 