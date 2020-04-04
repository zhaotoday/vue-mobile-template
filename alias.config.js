// preferences -> Settings -> Language & Framework -> JavaScript -> Webpack，选择build文件夹->webpack.base.conf.js

const resolve = dir => require("path").join(__dirname, dir);

module.exports = {
  resolve: {
    alias: {
      "@": resolve("./")
    }
  }
};
