// File -> Settings -> Languages & Frameworks -> JavaScript -> Webpack
// 选择 build 文件夹 -> alias.conf.js

const resolve = dir => require("path").join(__dirname, dir);

module.exports = {
  resolve: {
    alias: {
      "@": resolve("./")
    }
  }
};
