const webpack = require("webpack");
const { merge } = require("webpack-merge");

//Plugins
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const webPackBaseConfig = require("./webpack.base.config");

const preoductionConfig = () => {
  return merge([
    {
      mode: "production",
      optimization: {
        minimize: true,
        runtimeChunk: "single",
        minimizer: [new TerserPlugin()],
      },
      plugins: [
        new MiniCssExtractPlugin(),
        new CssMinimizerWebpackPlugin(),
        new webpack.DefinePlugin({
          isDevelopment: false,
          "process.env": {
            NODE_ENV: JSON.stringify("production"),
          },
        }),
        new CompressionPlugin(),
      ],
    },
  ]);
};

module.exports = () => merge(webPackBaseConfig, preoductionConfig());
