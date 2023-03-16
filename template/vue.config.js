const { defineConfig } = require("@vue/cli-service");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    // 配置webpack
    resolve: {
      extensions: [".ts", ".tsx", ".scss", ".vue"], // 后缀名省略配置
      alias: {
        // "@common": "/src/common",
      },
    },
  },

  chainWebpack: (config) => {
    // MF微服务模块
    config.plugin("module-federation-plugin").use(ModuleFederationPlugin, [
      {
        name: "MF_console", // 模块名称(!!!!命名规范 这里会覆盖全局变量【注意！！】)
        filename: "remoteEntry.js",
        exposes: {
          // 对外暴露的组件
          "./IndexComponent": "./src/core/exposes/Index/index.vue",
        },
      },
    ]);
  },
  // css: {
  //   requireModuleExtension: true,
  // },
});
