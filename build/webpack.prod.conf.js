var path = require('path')
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanPlugin = require('clean-webpack-plugin')//webpack插件，用于清除目录文件
var glob = require('glob');
var env = config.build.env

var data = new Date();
var todayYear = data.getFullYear();
var todayMonth = data.getMonth();
var todayDay = data.getDate();
var todayHour = data.getHours();
var todayMin = data.getMinutes();
var dataHash = (new Date(todayYear,todayMonth,todayDay,todayHour,todayMin)).getTime();


var webpackConfig = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.build.productionSourceMap, extract: true })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].'+dataHash+'.js'),
    chunkFilename: utils.assetsPath('js/[id].'+dataHash+'.js')
  },
  vue: {
    loaders: utils.cssLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,//移出console.log
        pure_funcs: ['console.log']
      }
    }),
    new CleanPlugin(['../dist']), //清空生成目录
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin(utils.assetsPath('css/[name].'+dataHash+'.css')),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    })
  ]
})

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

module.exports = webpackConfig

function getEntry(globPath) {
  var entries = {},
    basename, tmp, pathname;
  if (typeof (globPath) != "object") {
    globPath = [globPath]
  }
  globPath.forEach((itemPath) => {
    glob.sync(itemPath).forEach(function (entry) {
      basename = path.basename(entry, path.extname(entry));
      if (entry.split('/').length > 4) {
        tmp = entry.split('/').splice(-3);
        pathname = tmp.splice(0, 1) + '/' + basename; // 正确输出js和html的路径
        entries[pathname] = entry;
      } else {
        entries[basename] = entry;
      }
    });
  });
  return entries;
}

// var pages = getEntry(['./src/module/*.html','./src/module/**/*.html']);//多模版模式
var pages = getEntry(['./src/pages/**/*.js']);//单模版模式

for (var pathname in pages) {
  // 配置生成的html文件，定义路径等
  var conf = {
    filename: pathname + '.ejs',
    // template: pages[pathname],   // 多模板模式
    template: './src/pages/index.html',   // 单模板模式
    inject: true,              // js插入位置
    chunksSortMode: 'dependency'
  };

  if (pathname in module.exports.entry) {
    conf.chunks = ['manifest', 'vendor', pathname];
    conf.hash = true;
  }

  module.exports.plugins.push(new HtmlWebpackPlugin(conf));
}
