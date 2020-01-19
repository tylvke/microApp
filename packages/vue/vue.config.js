const packageName = require('./package.json').name;
const SingleSpaFileListPlugin = require('single-spa-filelist-webpack-plugin');

module.exports = {
    publicPath:'//localhost:8080',
    configureWebpack: {
      output: {
        library: `${packageName}`,
        libraryTarget: 'umd',
        jsonpFunction: `webpackJsonp_${packageName}`,
      },
      plugins:[
        new SingleSpaFileListPlugin({
          filename:`${packageName}_assets`
        })
      ]
    },
  }
