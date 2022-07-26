<template>
  <div class="item-box content-box">
    <MarkdownItVue :content="content"></MarkdownItVue>
    <NewLine></NewLine>
    <comment
      :commentNum="articleCommentList.length"
      :commentList="articleCommentList"
      @doSend="doSend"
      @doChidSend="doChildSend"
    ></comment>
  </div>
</template>

<script>
import MarkdownItVue from "markdown-it-vue";
import { GetBLog } from "../api/article";
import headerMixin from "../mixin/header";
import comment from "bright-comment";
import NewLine from "@components/NewLine";
import { getUserIp } from "@utils/ip";
import { createComment, getCommentList } from "@/api/app";

export default {
  name: "BlogArticle",
  mixins: [headerMixin],
  components: {
    MarkdownItVue,
    comment,
    NewLine,
  },
  async beforeCreate() {
    let id = this.$route.query.id;
    let res = await getUserIp();
    this.clientIp = res.cip;

    let { data, meta } = await GetBLog(id);
    if (meta.status == 200) {
      let articleObj = {
        article: {
          title: data.content.title,
          createdAt: data.content.createdAt,
          updatedAt: data.content.updatedAt,
          views: data.content.views,
          wordCount: data.content.content.length,
        },
        isArticle: true,
      };
      this.$bus.$emit("articleInfo", articleObj);
      this.content = data.content.content;
      let r = await getCommentList(this.articleId);
      if (r.meta.status == 200) {
        this.articleCommentList = r.data.list;
      }
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      articleId: this.$route.query.id,
      clientIp: "",
      content: "",
      articleCommentList: [],
      // commentList: [
      //   {
      //     id: 1,
      //     commentUser: {
      //       id: 11,
      //       nickName: "xxx1",
      //     },
      //     content: "xxxxxbaaba",
      //     createDate: "2011-1-1",
      //     childrenList: [
      //       {
      //         id: 111,
      //         targetUser: {
      //           id: 11,
      //           nickName: "xxx1",
      //         },
      //         commentUser: {
      //           id: 12,
      //           nickName: "yyy1",
      //         },
      //         content: "yyyyyybbaba",
      //         createDate: "2011-1-1",
      //       },
      //       {
      //         id: 112,
      //         targetUser: {
      //           id: 11,
      //           nickName: "xxx1",
      //         },
      //         commentUser: {
      //           id: 12,
      //           nickName: "yyy1",
      //         },
      //         content: "yyyyyybbaba",
      //         createDate: "2011-1-1",
      //       },
      //     ],
      //   },
      //   {
      //     id: 2,
      //     commentUser: {
      //       id: 12,
      //       nickName: "小明",
      //     },
      //     content: "xtasdfasfsdfs",
      //     createDate: "2011-1-1",
      //   },
      // ],
    };
  },
  methods: {
    async doSend(content) {
      let res = await await createComment({
        articleId: this.articleId,
        ip: this.clientIp,
        content,
      });
      if (res.meta.status == 201) {
        // this.$store.dispatch("App/getCommentList", this.articleId);
        let r = await getCommentList(this.articleId);
        if (r.meta.status == 200) {
          this.articleCommentList = r.data.list;
        }
      }
    },
    doChildSend(content, targetUserId, commentId) {
      //文章id , ip地址获取访问者id, 评论内容 +
      console.log(content, targetUserId, commentId);
    },
  },
};
</script>

<style lang="scss" scoped>
.comment {
  width: 100%;
}
</style> 
 