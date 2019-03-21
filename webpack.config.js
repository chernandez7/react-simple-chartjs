const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "simple-chart.min.js",
    library: "SimpleChart",
    libraryTarget: "umd"
  }
};
