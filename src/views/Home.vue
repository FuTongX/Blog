<template>
  <div>
    <el-row>
      <el-col :md="24" class="bigbox item-box">
        <Swiper :data="carouselList.articles"></Swiper>
      </el-col>
      <el-col>
        <el-row>
          <el-col
            v-for="item in blogList.articles"
            :key="item.id"
            :xs="24"
            :sm="{ span: 12, offset: 0 }"
            class="box"
          >
            <Item :data="item"></Item>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-col>
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page="blogList.curpage"
        :page-size="blogList.pagesize"
        :total="blogList.pagesize * blogList.totalpage"
        hide-on-single-page
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </el-col>
  </div>
</template>

<script>
import Swiper from "@components/Swiper";
import Item from "@components/Item";
import { mapState } from "vuex";
export default {
  name: "BlogHome",
  components: {
    Swiper,
    Item,
  },
  data() {
    return {};
  },
  beforeCreate() {
    this.$store.dispatch("Home/getBlogList");
    this.$store.dispatch("Home/getCarouselList");
  },
  beforeMount() {
    const path = "url(" + require("../assets/imgs/bg1.jpg") + ")";
    let data = {};
    data.path = path;
    data.height = "100vh !important";
    data.backgroundAttachment = "fixed";
    data.mainShow = true;
    this.$bus.$emit("updateElHeader", data);
    this.$bus.$emit("articleInfo", { isArticle: false });
  },
  mounted() {},
  computed: {
    ...mapState("Home", ["blogList", "carouselList"]),
  },
  methods: {
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.$store.dispatch("Home/getBlogList", val);
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  box-sizing: border-box;
  display: flex;
  &:nth-child(2n) {
    justify-content: flex-end;
  }
}

.bigbox {
  position: relative;
  height: 200px;
  overflow: hidden;
  margin-bottom: 20px;
}
.el-pagination {
  display: flex !important;
  justify-content: center;
  margin-bottom: 20px;
}
</style>