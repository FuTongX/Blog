import axios from "axios";

// import nprogress from "nprogress";
// import "nprogress/nprogress.css";

const axiosObj = axios.create({
  //配置对象
  baseURL: "/api/blog",
  timeout: 5000,
});

//请求拦截器
axiosObj.interceptors.request.use((config) => {
  // nprogress.start();
  return config;
});

axiosObj.interceptors.response.use(
  (res) => {
    // nprogress.done();
    //成功回调

    return res.data;
  },
  (error) => {
    //失败回调
    console.log(error);
  }
);

export default axiosObj;
