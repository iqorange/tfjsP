// webpack开发模式下的配置
// webpack打包合并配置文件
const webpackMerge = require('webpack-merge')
// 引入webpack基础配置
const baseWebpackConfig = require('./webpack.config.base')
// 加入定制的开发模式的配置文件
const webpackConfig = webpackMerge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'eval-source-map',
    stats: {children: false}
})

// 输出配置
module.exports = webpackConfig