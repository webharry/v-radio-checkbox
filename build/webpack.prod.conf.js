const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf')

module.exports = merge(webpackBaseConfig, {
    entry: {
        radio: './src/components/radio/radio.vue',
        checkbox: './src/components/checkbox/checkbox.vue',
    },
    mode:'production',
    output: {
        filename:'[name].js',
        libraryTarget:'commonjs2'//导出库的类型遵循commonJS
    }
})