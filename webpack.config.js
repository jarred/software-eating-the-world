module.exports = {
  entry: "./js/main.js",
  output: {
    path: __dirname,
    filename: "js/app.js"
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: 'style!css!sass' }
    ]
  }
};
