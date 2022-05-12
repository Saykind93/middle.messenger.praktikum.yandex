
require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.static(__dirname + "/dist"));
app.listen(process.env.PORT || 3000, function () {
  console.log(
    `Мой сервер на порт номер: ${process.env.PORT || 3000}`,
    __dirname
  );
});


// // eslint-disable-next-line import/no-extraneous-dependencies
// const Webpack = require('webpack');
// // eslint-disable-next-line import/no-extraneous-dependencies
// const WebpackDevServer = require('webpack-dev-server');
// const webpackConfig = require('./webpack.config.js');

// const compiler = Webpack(webpackConfig);
// const devServerOptions = { ...webpackConfig.devServer, open: true };
// const server = new WebpackDevServer(devServerOptions, compiler);

// server.startCallback(() => {
//   console.log('Successfully started server on http://localhost:3000');
// });
