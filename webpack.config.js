var path = require('path');
//自动注入js脚本
var htmlWP = require('html-webpack-plugin');

//nodejs语法，运行在Node环境中
module.exports = {
    //入口文件，打包app.js，打包后的文件输出到dist目录中，起名为build.js
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build.js'
    },

    // 插件配置，这里让构建好的js自动插入到index.html中的body元素
    plugins: [
        new htmlWP({
            template: './src/index.html', //src中的源文件
            filename: 'index.html', //dist中打包生成的新文件
            inject: 'body', //注入脚本的位置
        })
    ],

    resolve:{alias:{'vue':'vue/dist/vue.js'}},
    //配置不同类型文件模块的加载,使用第三方插件
    module: {
        rules: [
            //配置css文件模块
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },

            //配置less文件
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader' //倒序执行
                ]
            },

            //配置模板文件（html)
            {
                test: /\.(tpl|html|template)$/,
                use: [
                    'html-loader'
                ]
            },

            //配置图片文件模块
            {
                test: /\.(png|jpg|gif|svg|ttf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240 //如果文件小于10kb，那么打包到js中，否则还是url形式引入
                        }
                    },
                    'image-webpack-loader'
                ]
            },

            //配合解析es6为es5
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015'],
                            plugins: ['transform-runtime']
                        }
                    }
                ],
                exclude: /node_modules/
            },

            //添加对vue模块打包的支持
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            }

        ]
    }


}