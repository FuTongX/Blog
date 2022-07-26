<template>
  <div class="item-box content-box">
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in timeLineList.list"
        :key="index"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
      >
        <div>
          <div class="blog-node" v-if="activity.nodeType == 'blog'">
            <el-image
              style="width: 80px; height: 80px"
              :src="activity.cover"
              fit="fit"
            ></el-image>
            <div class="content">
              <div class="time">
                <i class="iconfont icon-calendar-fill"></i>
                <span>{{ activity.createdAt | TimeFormat }}</span>
              </div>
              <h2 @click="toArticle(activity.id)">{{ activity.content }}</h2>
            </div>
          </div>
          <div class="title-node" v-else-if="activity.nodeType == 'title'">
            {{ activity.content }}
          </div>
          <div class="time-node" v-else-if="activity.nodeType == 'time'">
            {{ activity.content }}
          </div>
        </div>
      </el-timeline-item>
    </el-timeline>
    <el-pagination
      background
      layout="prev, pager, next"
      :current-page="timeLineList.curpage"
      :page-size="timeLineList.pagesize"
      :total="timeLineList.pagesize * timeLineList.totalpage"
      hide-on-single-page
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import { mapState } from "vuex";
import headerMixin from "../mixin/header";
export default {
  name: "BlogTimeLine",
  mixins: [headerMixin],
  data() {
    return {};
  },
  beforeCreate() {
    this.$store.dispatch("App/getTimeLineList", { pagesize: 6, curpage: 1 });
  },
  computed: {
    ...mapState("App", ["timeLineList"]),
  },
  methods: {
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.$store.dispatch("App/getTimeLineList", {
        pagesize: 6,
        curpage: val,
      });
    },
    toArticle(id) {
      this.$router.push({
        path: "/article",
        query: {
          id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-node {
  display: flex;
  .el-image {
    margin-right: 20px;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .time {
      margin-bottom: 10px;
      font-size: 0.4rem;
      color: #858585;
    }
  }
}

.title-node {
  font-size: 1.4rem;
  color: #5e5c5b;
}

.time-node {
  font-size: 1.1rem;
  color: #4c4948;
}

.el-pagination {
  text-align: center;
  margin-top: 30px;
}
</style> 
 