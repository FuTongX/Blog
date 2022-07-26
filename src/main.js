import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./plugins/element";

import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/display.css";

import "./assets/font/iconfont.css";
import "./assets/css/normalize.css";

import "markdown-it-vue/dist/markdown-it-vue.css";
import moment from "moment";

Vue.config.productionTip = true;

Vue.filter("TimeFormat", function (value) {
  moment.locale("zh-cn");
  return moment(value).format("lll");
});

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  router,
  store,
}).$mount("#app");
