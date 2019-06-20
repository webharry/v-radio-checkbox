const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    output: {//打包出口文件
        path: path.resolve(__dirname, "../dist"),//绝对路径
        filename: "[name].js",
    },
    resolve: {
        extensions: ['*', '.js', '.vue'],//解析扩展，使用户在import时不用加文件后缀名
        alias: { //别名，解析文件时已别名加载
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {//根据规则处理各种不同的模块
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // 将 JS 字符串生成为 style 节点
                    "css-loader", // 将 CSS 转化成 CommonJS 模块
                    "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
}