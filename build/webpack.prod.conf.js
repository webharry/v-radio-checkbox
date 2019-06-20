const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf')

module.exports = merge(webpackBaseConfig, {
    entry: './src/index.js',
    mode:'production',
    output: {
        filename:'v-radio-checkbox.js',
        libraryTarget:'commonjs2'//导出库的类型遵循commonJS
    }
})