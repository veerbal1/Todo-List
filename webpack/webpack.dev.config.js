const webpack = require("webpack");
const { merge } = require("webpack-merge");
const webPackBaseConfig = require("./webpack.base.config");

const developmentConfig = () => {
  return merge([
    {
      mode: "development",
      devServer: {
        host: "localhost",
        port: 9000,
      },
      plugins: [
        new webpack.DefinePlugin({
          isDevelopment: true,
          "process.env": {
            NODE_ENV: JSON.stringify("development"),
          },
        }),
      ],
    },
  ]);
};

module.exports = () => merge(webPackBaseConfig, developmentConfig());
