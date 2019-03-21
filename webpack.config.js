const path = require("path");

module.exports = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "simple-chart.min.js",
    library: "SimpleChart",
    libraryTarget: "umd"
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React"
    }
  }
};
