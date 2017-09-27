# npm下载速度慢

- 请采用nrm切换镜像源的方式切换
- 下载 `npm install -g nrm`
- 查看列表 `nrm ls`
- 切换镜像源  `nrm use taobao`
- 测试速度  `nrm test taobao`


# TransformError 

- 是指这个包无法解析react-native中的代码，需要回退到以前的版本
- 步骤
 + 移除包 yarn remove babel-preset-react-native
 + 添加包 yarn add babel-preset-react-native@2.1.0

# React

- React=>React Native
- React: es5,es5+jsx( js+xml  ),es6+jsx

# Webpack

- [中文官网](https://doc.webpack-china.org/)
- [webpack学习资料](https://github.com/webpack-china/awesome-webpack-cn)
- 步骤 
 + 1. 安装webpack 全局->本地
 + 2. 创建webpack.config.js
 + 3. 入口 处理工具（loader plugin） 出口 

- 错误 步骤
 + 1. 创建webpack.config.js
 + 2. 下载包？？？？ css-loader
 + 3. 入口文件
 + 4. plugin

## 简单命令

- webpack -p 压缩js代码
- webpack --progress 查看进度
- webpack -color 给输出cmd内容添加颜色
- webpack -w 监视现有代码 然后自动打包
- wepback --config  设置其他配置文件路径

## loader (加载器)

- css-loader style-loader （样式加载器）
 + 下载 `yarn add css-loader style-loader`

- url-loader file-loader （图片加载器）
 + 下载 `yarn add url-loader file-loader`
 + url-loader是将图片转换成base64
 + file-loader是将图片移动到对应位置
- babel-loader babel-core (babel转换)es6语法转es5
 + 下载 `yarn add babel-core babel-loader`
 + babel-core是babel中的核心代码 babel-loader 是适用于webpack
 + babel  如果直接使用是无法将es6=》es5
 + es2015+ stage0（stage1(stage2(stage3)))= es6完全语法

## source-map(将原有压缩代码还原)

- devtool的值有很多详细请[参照](https://doc.webpack-china.org/configuration/devtool/)

- 通过在配置文件中添加`devtool` 给当前压缩后的代码添加sourcemap，在压缩后的文件中还会多出一个map文件

```
devtool:"source-map",
```
## plugin (插件)

### 压缩js

- 通过plugin压缩js和webpack -p 压缩方式一样

- 步骤
 + 1.引入webpack
 + 2.添加plugin
 ```
  plugins: [  
   new webpack.optimize.UglifyJsPlugin()
   ]
 ```
### 分离js

- 目的：减小js的体积
- 步骤:
 + 1.引入webpack
 + 2.修改入口
 ```
 entry:{
       "vender":["jquery"],
       "bundle":path.join(__dirname,"src","main.js")
   },
 ```
 + 3.添加plugin
 ```
  plugins: [
       //压缩js  webpack -p 的本质就是在使用webpack中的 UglifyJsPlugin
       //分离js
       //name 需要分离的名字
       //filename 分离的位置
       new webpack.optimize.CommonsChunkPlugin({
           name:'vender',
           filename:'vender.js'
       })
   ]
 ```
### 分离css

- 目的: 减小bundle.js 体积
- 步骤 
 + 1. 下载分离的插件 `yarn add extract-text-webpack-plugin`
 + 2. 引入包 `const ExtractTextPlugin = require("extract-text-webpack-plugin");`
 + 3. 入口css
 ```
   {
             test: /\.css$/,
             use: ExtractTextPlugin.extract({
                 fallback: "style-loader",
                 use:"css-loader"
             })
         },
 ```
 + 4. 出口css
 ```
  plugins: [ 
       //分离css
       new ExtractTextPlugin("styles.css"),
   ]
 ```

 ?
## Eslint

- eslint用来检测js（jsx）规范

### 步骤

- 1.下载 `yarn add eslint-loader eslint`
- 2. 在webpack中添加eslint-loader
```
			{
              //eslint
              test:/\.js$/,
              use:["eslint-loader"],
              exclude:/node_modules/
          },
```
- 3.添加eslint规则文件 `.eslintrc.js`
- 4. 在`.eslintrc.js` 文件中配置规则
```
{
  //防止检测路径过长
    "root":true,
    //不去检测未赋值的参数
    "globals":{
        "window":true,
        "document":true,
        "$":true,
        "jquery":true,
    },
    //eslint执行标准
    "parserOptions":{
        "ecmaVersion":6, //使用es6检测标准
        "sourceType":"module"    //引用方式 module script
    },
    //检查环境
    "env":{
        "browser":true //按照浏览器的方式检测
    },
    //设置规则
    "rules":{
        // 0忽略  1 警告 2错误
        "no-console":1,
        "no-debugger":2
    }
}
```


?	
