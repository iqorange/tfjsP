// const koa = require('koa')
// const path = require('path')

// import ES6 with webpack
import koa from 'koa'
import path from "path"
import helmet from 'koa-helmet'
import statics from 'koa-static'
import router from './routes/routes'
import koaBody from 'koa-body'
import jsonutil from 'koa-json'
import cors from '@koa/cors'
// 整合koa中间件
import compose from 'koa-compose'
import compress from 'koa-compress'

const app = new koa()

const isDevMode = process.env.NODE_ENV === 'production' ? false : true

// const helmet = require('koa-helmet')
// const statics = require('koa-static')
// const router = require('./routes/routes')

// 更新npm包
// ncu -u

// 构建安全的请求头
// app.use(helmet());
// 加载静态资源
// app.use(statics(path.join(__dirname, '../public')))

// app.use(router())

// 整合koa中间件，中间传递数组，使用koa-compose 集成中间件
const middleware = compose([
    // 整理传递消息
    koaBody(),
    // 静态资源
    statics(path.join(__dirname, '../public')),
    // 跨域请求
    cors(),
    // 处理JSON数据，格式化JSON数据
    jsonutil({pretty: false, param: 'pretty'}),
    // 请求头优化
    helmet()
])

if(!isDevMode) {
    // 生产模式使用压缩
    app.use(compress())
}

app.use(middleware)
app.use(router())

app.listen(3000)