import VueRouter from "vue-router";
import Vue from "vue";
import Home from "@views/Home";
import Tags from "@views/Tags";
import TimeLine from "@views/TimeLine";
import Demo from "@views/Demo";
import Classify from "@views/Classify";
import About from "@views/About";
import Article from "@views/Article";
Vue.use(VueRouter);

//重写push|replace
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve || reject) {
    return originPush.call(this, location, resolve, reject);
  }
  return originPush.call(this, location).catch(() => {});
};

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve || reject) {
    return originReplace.call(this, location, resolve, reject);
  }
  return originReplace.call(this, location).catch(() => {});
};

export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      meta: {
        backgroundImg: "bg1",
      },
    },
    {
      path: "/tags",
      component: Tags,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/classify",
      component: Classify,
    },
    {
      path: "/demo",
      component: Demo,
    },
    {
      path: "/timeline",
      component: TimeLine,
    },
    {
        path:"/article",
        component:Article
    },
    {
      path: "*",
      redirect: "/home",
    },
  ],
});
