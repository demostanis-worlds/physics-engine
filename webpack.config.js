const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

function p(f) {
  return path.join(__dirname, f);
}

module.exports = {
  mode: "development",
  entry: p("src/index.js"),
  output: {
    path: p("dist"),
    filename: "[hash].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require("webpack-html-template"),
      title: "Physics engine"
    })
  ],
  devServer: {
    contentBase: p("dist")
  }
}
