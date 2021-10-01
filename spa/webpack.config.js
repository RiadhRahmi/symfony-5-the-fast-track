const Encore = require("@symfony/webpack-encore");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

Encore.setOutputPath("public/")
  .setPublicPath("/")
  .cleanupOutputBeforeBuild()
  .addEntry("app", "./src/app.js")
  .enablePreactPreset()
  .enableSassLoader()
  .enableSingleRuntimeChunk()
  .addPlugin(
    new HtmlWebpackPlugin({
      template: "src/index.ejs",
      alwaysWriteToDisk: true,
    })
  )
  .addPlugin(
    new webpack.DefinePlugin({
      ENV_API_ENDPOINT: JSON.stringify("http://127.0.0.1:8000/"),
    })
  );

module.exports = Encore.getWebpackConfig();
