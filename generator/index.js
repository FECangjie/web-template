// # generator/index.js
module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    // # 扩展pkg#scripts
    scripts: {
      start: "npm run serve",
      serve: "vue-cli-service serve",
      build: "vue-cli-service build",
      lint: "vue-cli-service lint",
    },
    // # 扩展pkg#dependencies
    dependencies: {
      "core-js": "^3.8.3",
      "element-plus": "^2.3.0",
      vue: "^3.2.13",
      "vue-router": "^4.0.3",
      vuex: "^4.0.0",
    },
    // # 扩展pkg#devDependencies
    devDependencies: {
      "@typescript-eslint/eslint-plugin": "^5.4.0",
      "@typescript-eslint/parser": "^5.4.0",
      "@vue/cli-plugin-babel": "~5.0.0",
      "@vue/cli-plugin-eslint": "~5.0.0",
      "@vue/cli-plugin-router": "~5.0.0",
      "@vue/cli-plugin-typescript": "~5.0.0",
      "@vue/cli-plugin-vuex": "~5.0.0",
      "@vue/cli-service": "~5.0.0",
      "@vue/eslint-config-typescript": "^9.1.0",
      eslint: "^7.32.0",
      "eslint-config-prettier": "^8.3.0",
      "eslint-plugin-prettier": "^4.0.0",
      "eslint-plugin-vue": "^8.0.3",
      prettier: "^2.4.1",
      sass: "^1.32.7",
      "sass-loader": "^12.0.0",
      typescript: "~4.5.5",
    },
  });
  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render("../template");


  // 命令行配置 options
  if (options.module === "module1") {
    // options.module 可以访问上面问题数组的第一个对象的值，默认为: 'module0'
    console.log(`Your choice is ${options.module}`);
  }

  if (options.moduleName === "myModule") {
    // options.moduleName 可以访问到用户从控制台输入的文字
    console.log(`Your input is ${options.moduleName}`);
  }
};
