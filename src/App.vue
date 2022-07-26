<template>
  <el-container>
    <el-header :style="elHeaderStyle">
      <Header></Header>
      <HeaderDrawer></HeaderDrawer>
      <a @click="scrollUp" class="arrow-down" v-show="mainShow"
        ><i class="iconfont icon-jiantouxia"></i
      ></a>
      <div v-show="mainShow" id="subtitle" class="subtitle"></div>
    </el-header>
    <el-main id="target">
      <el-row :gutter="0">
        <el-col :xs="{ span: 24, offset: 0 }" :md="{ span: 12, offset: 3 }">
          <router-view></router-view>
        </el-col>
        <el-col class="aside" :md="{ span: 5, offset: 1 }">
          <Aside></Aside>
        </el-col>
      </el-row>
    </el-main>
    <Footer></Footer>
  </el-container>
</template>

<script>
import Header from "@components/Header";
import Aside from "@components/Aside/Aside.vue";
import Footer from "@components/Footer.vue";
import HeaderDrawer from "@components/HeaderDrawer";
import theaterJS from "theaterjs";
import { getWisdomList } from "@/api/app";
export default {
  name: "App",
  components: {
    Header,
    Aside,
    Footer,
    HeaderDrawer,
  },
  methods: {
    scrollUp() {
      document.getElementById("target").scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  data() {
    return {
      elHeaderStyle: {
        backgroundImage: "url(" + require("./assets/imgs/bg1.jpg") + ")",
        height: "100vh",
        backgroundAttachment: "fixed",
      },
      mainShow: true,
      drawer: false,
      wisdom: [
        {
          msg: "Knowledge is power",
          time: 500,
        },
        {
          msg: "知识就是力量",
          time: 500,
        },
      ],
    };
  },
  beforeCreate() {
    this.$store.dispatch("App/getCategoryListWithBlogCount");
    this.$store.dispatch("App/getTagListWithBLogNumber");
    this.$store.dispatch("App/getStatistics");
    this.$store.dispatch("App/getUserInfo");
    // this.$store.dispatch("App/getWisdomList");
  },
  beforeMount() {
    this.$bus.$on("updateElHeader", (data) => {
      this.elHeaderStyle.height = data.height;
      this.elHeaderStyle.backgroundImage = data.path;
      this.elHeaderStyle.backgroundAttachment = data.backgroundAttachment;
      this.mainShow = data.mainShow;
    });
  },
  async mounted() {
    let res = await getWisdomList();
    if (res) {
      if (res.meta.status == 200) {
        let theater = theaterJS();
        theater
          .on("type:start, erase:start", function () {
            // add a class to actor's dom element when he starts typing/erasing
            var actor = theater.getCurrentActor();
            actor.$element.classList.add("is-typing");
          })
          .on("type:end, erase:end", function () {
            // and then remove it when he's done
            var actor = theater.getCurrentActor();
            actor.$element.classList.remove("is-typing");
          });
        theater.addActor("subtitle");
        for (let i = 0; i < res.data.list.length; i++) {
          theater.addScene(
            `subtitle:${res.data.list[i].msg}`,
            res.data.list[i].time
          );
        }
        theater.addScene(theater.replay);
      }
    }
  },
};
</script>

<style lang="scss">
html {
  font-size: 26.66666vw;
  body {
    font-size: 0.16rem;
  }
}

.el-header {
  height: 100vh;
  padding: 0 !important;
  color: white;
  font-size: 0.14rem;
  background-color: #49b1f5;

  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;
}

.arrow-down {
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: center;
  i {
    position: absolute;
    transform: scale(1.4);
    animation-name: arrow-anim;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
}

.subtitle {
  position: absolute;
  width: 100%;
  height: 100px;
  font-size: 1.2rem;
  left: 50%;
  bottom: 36%;
  text-align: center;
  transform: translateX(-50%);
}

@keyframes arrow-anim {
  0% {
    bottom: 0;
    color: #fff;
  }

  100% {
    bottom: 20px;
    color: rgb(110, 110, 110);
  }
}

//每个盒子公共样式
.item-box {
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 4px 4px 2px 1px rgba(0, 0, 0, 0.1), -2px 0 2px rgba(0, 0, 0, 0.1);
  transition: box-shadow;
  transition-duration: 0.5s;
  margin-bottom: 20px;
  &:hover {
    box-shadow: 5px 5px 4px 2px rgba(0, 0, 0, 0.2),
      -2px 0 2px rgba(0, 0, 0, 0.2);
  }
}

//侧边栏块公共样式
.aside-widget {
  position: relative;
  overflow: hidden;
  padding: 10px 20px;

  .widget-title {
    font-size: 16px;
    margin-bottom: 15px;
    i {
      margin-right: 5px;
    }
  }
  .widget-content {
    font-size: 14px;
    color: #1f2d3d;
    margin-bottom: 10px;
  }
}

//公共的内容盒子
.content-box {
  padding: 80px 40px;
}

/* 大于768px时候固定大小 */
@media (min-width: 768px) {
  .el-header {
    height: 100vh !important;
  }
}
</style>
