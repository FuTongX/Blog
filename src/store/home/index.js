import { GetList, GetCarouseList } from "@/api/home";

const actions = {
  //获取博客列表
  async getBlogList(context, param) {
    let { data, meta } = await GetList(null, param);
    if (meta.status === 200) {
      context.commit("BLOGLIST", data);
    } else {
      console.log(meta.msg);
    }
  },

  //获取轮播图列表
  async getCarouselList(context) {
    let { data, meta } = await GetCarouseList();
    if (meta.status === 200) {
      context.commit("CAROUSELIST", data);
    } else {
      console.log(meta.msg);
    }
  },
};
const mutations = {
  BLOGLIST(state, value) {
    state.blogList = value;
  },
  CAROUSELIST(state, value) {
    state.carouselList = value;
  },
};

const getters = {};
const state = {
  blogList: [],
  carouselList: [],
};
export default {
  namespaced: true, //开启命名空间
  state,
  mutations,
  actions,
  getters,
};
