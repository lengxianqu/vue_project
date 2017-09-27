//自动删除组件
const CleanWebpackPlugin = require('clean-webpack-plugin');
//自动生成html
const HtmlWebpackPlugin = require('html-webpack-plugin');
//引入分离css—plugin
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//引用webpack
const webpack=require('webpack');
//路径
const path=require('path');
module.exports={
    //入口
    entry:{
        "vender":["jquery"],
        "bundle":path.join(__dirname,"src","main.js")
    },
    //不拆js之前
    //entry:path.join(__dirname,"src","main.js"),

    //source  开发（需要）  测试（需要）  上线（不需要）
    //将压缩后的代码还原出来的工具
    devtool:"source-map",
    //loader
    module:{
      rules:[
          {
              //eslint
              test:/\.js$/,
              use:["eslint-loader"],
              exclude:/node_modules/
          },
          //分离css的入口
          {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use:"css-loader"
              })
          },
          // {
          //     //过滤条件
          //     test:/\.css$/,
          //     //css-loader 用来将样式添加到打包后的文件中去
          //     // style-loader 将打包后的css样式添加页面中head中
          //     use:["style-loader","css-loader","less-loader"]
          // },
          {
              //图片处理
              test:/\.(jpg|png|jpeg)$/,
              use:["url-loader?limit=100&name=[name].[ext]"],
          },
          {
              //es6处理
              test:/\.js$/,
              use:["babel-loader"],
              exclude:/node_modules/
          }
      ]
    },
    //出口
    output:{
        path:path.join(__dirname,"dist"),
        filename:'bundle.js'
    },
    //plugin
    plugins: [
        //压缩js  webpack -p 的本质就是在使用webpack中的 UglifyJsPlugin
       // new webpack.optimize.UglifyJsPlugin()
        //分离js
        //name 需要分离的名字
        //filename 分离的位置
        new webpack.optimize.CommonsChunkPlugin({
            name:'vender',
            filename:'vender.js'
        }),
        //分离css
        new ExtractTextPlugin("styles.css"),
        //自动生成html
        new HtmlWebpackPlugin({
            title:'标题', //title针对没有模板的情况下使用
            template:path.join(__dirname,'src','index.html'),
            minify:{
                //压缩html

                //删除空格
                collapseWhitespace:true,
                //移除注释
                removeComments:true
            }
        }),
        //自动删除文件
        new CleanWebpackPlugin(["dist"])
    ]
};