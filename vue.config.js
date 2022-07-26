const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/blog": {
        target: "http://127.0.0.1:4000",
        // changeOrigin:true
      },
      "/apiSohu": {
        target: "http://pv.sohu.com/", // localhost=>target
        changeOrigin: true,
        pathRewrite: {
          "/apiSohu": "/",
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve("src"),
        "@views": path.resolve("src/views"),
        "@components": path.resolve("src/components"),
        "@imgs": path.resolve("src/assets/imgs"),
        "@utils": path.resolve("src/utils"),
      },
    },
  },
});
