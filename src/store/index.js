import Vuex from "vuex";
import Vue from "vue";
import Home from "./home";
import App from "./app";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Home,
    App,
  },
});
