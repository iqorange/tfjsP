// webpack生产环境配置
const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base')

// 生产模式对js打包处理-TerserWebpackPlugin-压缩js代码
const TerserWeboackPlugin = require('terser-webpack-plugin')

const webpackConfig = webpackMerge(baseWebpackConfig, {
    mode: 'production',
    stats: {children: false, warnings: false},
    optimization: {
        minimizer: [
            new TerserWeboackPlugin({
                terserOptions: {
                    warnings: false,
                    compress: {
                        // 是否注释掉console
                        warnings: false,
                        drop_console: false,
                        dead_code: true,
                        drop_debugger: true
                    },
                    output: {
                        comments: false,
                        beautify: false
                    },
                    mangle: true,
                },
                parallel: true,
                sourceMap: false,
            })
        ],
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 3,
                    enforce: true
                }
            }
        }
    }
})

module.exports = webpackConfig

