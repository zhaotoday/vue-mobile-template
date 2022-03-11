const TransformPages = require("uni-read-pages");
const { webpack } = new TransformPages();

module.exports = {
  transpileDependencies: ["uview-ui"],
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        ROUTES: webpack.DefinePlugin.runtimeValue(() => {
          const tfPages = new TransformPages({
            includes: ["path", "name", "aliasPath"],
          });
          return JSON.stringify(tfPages.routes);
        }, true),
      }),
    ],
  },
};
