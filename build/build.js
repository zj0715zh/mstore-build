require('shelljs/global')//地址 https://github.com/shelljs/shelljs
env.NODE_ENV = 'production'
var path = require('path')
var config = require('../config')
var ora = require('ora')
var fs = require('fs')
var cmd = require('node-cmd')
var childProcess = require('child_process')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
var modulePath = path.join(config.build.assetsRoot, config.build.assetsModuleDirectory)
rm('-rf', assetsPath)
rm('-rf', modulePath)
// cmd.run('rm -rf '+modulePath+'/*')
mkdir('-p', assetsPath)
mkdir('-p', modulePath)
cp('-R', 'static/*', assetsPath)

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
  // setTimeout(()=>{
  //   cmd.get('cp -r '+modulePath+'/*.ftl '+config.build.htmlRoot,function(err, data, stderr){
  //     if(err){
  //       console.log(err)
  //       return;
  //     }
  //     console.log('文件本地部署完成')
  //     childProcess.execFile(path.resolve(__dirname, '../config/deploy.bat'),{cwd:config.build.javaRoot},function(e, stdout, stderr) {
  //         if(e){
  //           console.log(e);
  //           return;
  //         }
  //   　　　console.log(stdout);
  //         console.log('git远程仓库push完成')
  //     });
  //   })
  // },2000)
})
