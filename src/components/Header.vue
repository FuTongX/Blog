<template>
  <header class="header">
    <div id="nav">
      <span id="blog_name"
        ><router-link to="/home">{{ userinfo.blogName }}</router-link></span
      >
      <div id="menus">
        <div id="search-button">
          <a @click="centerDialogVisible = true"
            ><i class="iconfont icon-search"></i>搜索</a
          >
        </div>
        <ul class="navbar-nav hidden-sm-and-down">
          <li>
            <router-link to="/home"
              ><i class="iconfont icon-shouyefill"></i>主页</router-link
            >
          </li>
          <li>
            <router-link to="/demo"
              ><i class="iconfont icon-demo-"></i>Demo</router-link
            >
          </li>
          <li>
            <router-link to="/tags"
              ><i class="iconfont icon-24gf-tags"></i>标签</router-link
            >
          </li>
          <li>
            <router-link to="/timeline"
              ><i class="iconfont icon-timeline-fill"></i>时间轴</router-link
            >
          </li>
          <li>
            <router-link to="/classify"
              ><i class="iconfont icon-fenlei"></i>分类</router-link
            >
          </li>
          <li>
            <router-link to="/about"
              ><i class="iconfont icon-aixin"></i>关于</router-link
            >
          </li>
        </ul>
        <div class="toggle-menu hidden-md-and-up">
          <a @click="showDrawer" class="iconfont icon-bars"></a>
        </div>
      </div>
    </div>
    <div class="content">
      <h1 v-if="!isArticle" class="title">{{ userinfo.blogName }}</h1>
      <h1 v-else class="title">{{ article.title }}</h1>
      <div v-if="isArticle" class="detail-info">
        <div class="meta-firstline">
          <span
            ><i class="el-icon-s-claim"></i><span>发表于</span
            ><time>{{ article.createdAt | TimeFormat }}</time>
            <span class="post-meta-separator">|</span>
            <i class="el-icon-refresh"></i><span>更新于</span
            ><time>{{ article.updatedAt | TimeFormat }}</time></span
          >
        </div>
        <div class="meta-secondline">
          <span
            ><i class="el-icon-tickets"></i><span> 字数总计 </span
            ><span>{{ article.wordCount }}</span>
            <span class="post-meta-separator">|</span>
          </span>
          <span
            ><i class="el-icon-view"></i><span> 阅读量 </span
            ><span>{{ article.views }}</span></span
          >
        </div>
      </div>
    </div>
    <el-dialog
      title="搜索文章"
      :visible.sync="centerDialogVisible"
      :width="dialogWidth"
      :fullscreen="dialogFullScreen"
      center
    >
      <div class="input">
        <el-autocomplete
          v-model="state"
          clearable
          placeholder="搜索文章"
          @select="handleSelect"
        ></el-autocomplete>
      </div>
    </el-dialog>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BlogHeader",
  data() {
    return {
      centerDialogVisible: false,
      state: "",
      dialogWidth: "60%",
      dialogFullScreen: false,
      windowWidth: document.documentElement.clientWidth, //屏幕宽度

      isArticle: false,
      article: {
        title: "",
        createdAt: "",
        updatedAt: "",
        categoryName: "",
        views: 0,
        time: "",
        wordCount: 0,
      },
    };
  },
  beforeMount() {
    this.$bus.$on("articleInfo", (data) => {
      this.article = data.article;
      this.isArticle = data.isArticle;
    });
  },

  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = document.documentElement.clientWidth;
    });
  },
  methods: {
    handleSelect(item) {
      console.log(item);
    },
    showDrawer() {
      this.$bus.$emit("showDrawer", true);
    },
  },
  watch: {
    windowWidth: {
      immediate: true,
      handler(val) {
        if (val < 768) {
          this.dialogFullScreen = true;
        } else {
          this.dialogFullScreen = false;
        }
      },
    },
  },
  computed: {
    ...mapState("App", ["userinfo"]),
  },
};
</script>

<style lang="scss" scoped>
//下划线特效
@mixin underLine() {
  & {
    position: relative;
  }
  &::before {
    content: "";
    height: 2px;
    width: 0%;
    bottom: -5px;
    background-color: #80c8f8;
    position: absolute;
    transition: width 0.3s;
  }
  &:hover::before {
    width: 100%;
  }
}

/* 移动端 */
.header {
  #nav {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    justify-content: space-between;

    #blog_name {
      font-weight: bold;
      cursor: pointer;
      font-size: 1.12rem;
      flex-flow: 3;
    }
    #menus {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      flex-flow: 7;
      font-size: 0.84rem;

      #search-button {
        flex-grow: 1;
        margin-right: 0.45rem;
        cursor: pointer;
        @include underLine();
      }

      .navbar-nav {
        display: flex;
        flex-grow: 9;
        li {
          margin-left: 10px;
          position: relative;
          i {
            margin: 0 5px;
          }
          @include underLine();
        }
      }

      .toggle-menu {
        display: flex;
        margin-right: 0.1vw;
        a {
          font-size: 1.15rem;
          cursor: pointer;
          display: block;
        }
        @include underLine();
      }
    }
  }

  .title {
    position: absolute;
    font-size: 2rem;
    font-weight: bold;
    left: 50%;
    bottom: 55%;
    transform: translateX(-50%);
  }

  .detail-info {
    position: absolute;
    font-size: 0.8rem;
    width: 500px;
    height: 50px;
    left: 50%;
    bottom: 40%;
    transform: translateX(-50%);
    .span {
      padding: 0 10px;
    }
    .post-meta-separator {
      padding: 5px;
    }
    .meta-firstline {
      text-align: center;
    }
    .meta-secondline {
      margin-top: 5px;
      text-align: center;
    }
  }
}

.input {
  .el-autocomplete {
    width: 100%;
  }
}
::v-deep .el-input__inner {
  border-radius: 20px;
}
::v-deep .el-dialog__title {
  color: #49b1f5;
}
</style>>

 
 

 