const path = require("path"); // Path: webpack.config.js

// Compare this snippet from src\App.js:
module.exports = {
  entry: "./src/index.js", // entry point of the app ( src/index.js )
  output: {
    path: path.resolve(__dirname, "dist"), // path to the output folder ( ./dist )
    filename: "bundle.js",
  },
  // resolve the following extensions in order
  resolve: {
    fallback: {
      stream: require.resolve("stream-browserify"), // resolve node stream module
      querystring: require.resolve("querystring-es3"), // resolve node querystring module
      util: require.resolve("util/"), // resolve node util module
      path: require.resolve("path-browserify"), // resolve node path module
      os: require.resolve("os-browserify/browser"), // resolve node os module
      vm: require.resolve("vm-browserify"), // resolve node vm module
      http: require.resolve("stream-http"), // resolve node http module
      fs: false, //Disable the fs module
      https: require.resolve("https-browserify"), // resolve node https module
      constants: require.resolve("constants-browserify"), // resolve node constants module
      assert: require.resolve("assert/"), // resolve node assert module
    },
  },
};
