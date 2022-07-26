export default {
  beforeMount() {
    const path = "url(" + require("../assets/imgs/header.jpg") + ")";
    let data = {};
    data.path = path;
    data.height = "50vh !important";
    data.backgroundAttachment = "scroll";
    data.mainShow = false;
    this.$bus.$emit("updateElHeader", data);
    this.$bus.$emit("articleInfo", { isArticle: false });
  },
};
