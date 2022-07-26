import {
  getTagListWithArticleNumber,
  getCategoryListWithArticleNumber,
  getTimeLineList,
  // getArticleCount,
  getStatistics,
  getWisdomList,
  getUserInfo,
} from "@/api/app";

const actions = {
  async getCategoryListWithBlogCount(context) {
    let { data, meta } = await getCategoryListWithArticleNumber();
    if (meta.status === 200) {
      context.commit("CATEGORYLISTWITHBLOGCOUNT", data);
    } else {
      console.log(meta.msg);
    }
  },

  async getTagListWithBLogNumber(context) {
    let { data, meta } = await getTagListWithArticleNumber();
    if (meta.status === 200) {
      context.commit("TAGLISTWITHBLOGCOUNT", data);
    } else {
      console.log(meta.msg);
    }
  },

  async getWisdomList(context) {
    let { data, meta } = await getWisdomList();
    if (meta.status === 200) {
      context.commit("WISDOMLIST", data.list);
    } else {
      console.log(meta.msg);
    }
  },
  // async getArticleCount(context) {
  //   let { data, meta } = await getArticleCount();
  //   if (meta.status === 200) {
  //     context.commit("ARTICLECOUNT", data.count);
  //   } else {
  //     console.log(meta.msg);
  //   }
  // },

  async getTimeLineList(context, params) {
    let { data, meta } = await getTimeLineList(params.pagesize, params.curpage);
    if (meta.status === 200) {
      context.commit("TIMELINELIST", data);
    } else {
      console.log(meta.msg);
    }
  },

  async getStatistics(context) {
    let { data, meta } = await getStatistics();
    if (meta.status === 200) {
      context.commit("STATISTICS", data);
    } else {
      console.log(meta.msg);
    }
  },

  async getUserInfo(context) {
    let { data, meta } = await getUserInfo();
    if (meta.status === 200) {
      context.commit("USERINFO", data);
    } else {
      console.log(meta.msg);
    }
  },
};
const mutations = {
  CATEGORYLISTWITHBLOGCOUNT(state, value) {
    state.categoryListWithBlogCount = value;
  },
  TAGLISTWITHBLOGCOUNT(state, value) {
    state.tagListWithBlogCount = value;
  },
  ARTICLECOUNT(state, value) {
    state.articleCount = value;
  },
  TIMELINELIST(state, value) {
    state.timeLineList = value;
  },
  STATISTICS(state, value) {
    state.articleCount = value.articleCount;
    state.tagCount = value.tagCount;
    state.categoryCount = value.categoryCount;
  },
  WISDOMLIST(state, value) {
    state.wisdomList = value;
  },
  USERINFO(state, value) {
    state.userinfo = value;
  },
};
const state = {
  categoryListWithBlogCount: [],
  tagListWithBlogCount: [],
  articleCount: 0,
  categoryCount: 0,
  tagCount: 0,
  timeLineList: {},
  wisdomList: [],
  userinfo: {},
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
