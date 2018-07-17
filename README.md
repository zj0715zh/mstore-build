# 分期商城前后端分离构建系统
> mstore-build

### git仓库地址：https://github.com/zj0715zh/mstore-build

## Build Setup

``` bash
# 第一步安装依赖
npm install

如果依赖安装失败，请按照以下步骤操作：
> 删除package-lock.json文件
> 去官网下载node-8.1.4版本，并安装，下载地址 https://nodejs.org/dist/v8.1.4/
> 执行 npm i,个别警告可忽略

# 第二步启动本地服务器，默认端口为8181
npm run dev

# 第三步页面开发完毕之后执行构建，构建后的文件会放在dist目录下
npm run build
```
## 特别注意
> config目录下的index.js中的htmlRoot为页面产出路径，为后端仓库的视图目录

## 本地数据接口联调
本地数据统一以JSON格式放在项目根目录的data文件夹中，二级文件夹对应每个页面，比如我们要进行本地数据联调，可以按照以下步骤：
> 在data文件下新建一个对应页面的文件夹，再在新建的文件夹中新建一个json文件，比如：/data/index/getBanner.json
> 启动本地服务 npm run dev
> axios请求本地接口 比如：/data/index/getBanner.json

## 远程数据调试
远程数据调试主要通过配置proproxyTable来进行代理转发，具体实现可直接看config目录下的index.js

## EXPRESS路由转发，实现本地与线上无差别访问
> 目前是在dev-server.js中直接配置，以后可以剥离出来

## 接口请求转发
> 将线上的接口地址直接转发为本地的数据，方便调试

# 云服务器部署
第一步：将仓库clone到云服务器
第二步：安装依赖（npm i）
第三步：构建页面和静态文件（node build/ali-build.js）
第四步：安装pm2，具体安装步骤可以百度
第五步：pm2 start build/ali-server.js(另一种方法：pm2 start pm2.json，这种方法可以省去第三步)
第六步：查看运行的项目列表（pm2 ls）

## 线上访问地址
说明（服务器：阿里云ECS，服务进程管理监控：PM2，页面数据请求通过proxyTable转发到express服务层，express返回本地json数据）
http://47.89.249.180:8181/ 多页架构的商城系统

## 单页和多页混合模式的后台系统
说明（同上）
#git仓库地址：git@github.com:zj0715zh/cms-build.git
#线上访问地址 http://47.89.249.180:8384/




