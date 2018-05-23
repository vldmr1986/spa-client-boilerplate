/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const handleResponses = function(app){
  app.get('/some/path', function(req, res) {
    res.json({ custom: 'response' });
  });
}

module.exports = {
  entry: ['./src/index.js', 'webpack-hot-middleware/client'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080,
    hot: true,
    historyApiFallback: true,
    before: handleResponses,
    allowedHosts: [
      'https://sandbox.dev.nvsrc.com',
      'subdomain.host.com',
      'subdomain2.host.com',
      'host2.com',
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            // This is a feature of `babel-loader` for Webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
            plugins: ['react-hot-loader/babel'],
          },
        },
        {
          loader: 'eslint-loader',
        },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};



