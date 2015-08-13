var webpack = require("webpack");
var path = require("path");

var plugins = [
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
  })
];

if (process.env.COMPRESS) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  );
}

module.exports = {

  entry: ["./src/DateTimeField.js"],

  output: {
    path: path.join(__dirname, "/dist/"),
    filename: "react-bootstrap-datetimepicker.js"
    ,library: "ReactBootstrapDatetimepicker",
    libraryTarget: "commonjs2"
  },

  resolve: {
    extensions: ["", ".js"]
  },

  externals: {
    "react": true,
    "react/addons": true,
    "react-bootstrap": true,
    "moment": "moment"
  },

  module: {
    loaders: [
      { test: /\.js?$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
  ,plugins: plugins

};
