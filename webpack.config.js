const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    show: "./src/index.ts",
    add: "./src/controller/add.ts",
    update: "./src/controller/update.ts",
    delete: "./src/controller/delete.ts",
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
