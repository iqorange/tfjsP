// const koa = require('koa')
// const path = require('path')

// import ES6 with webpack
import koa from 'koa'
import path from "path"
import helmet from 'koa-helmet'
import statics from 'koa-static'
import router from './routes/routes'

const app = new koa()

// const helmet = require('koa-helmet')
// const statics = require('koa-static')
// const router = require('./routes/routes')

// 构建安全的请求头
app.use(helmet());
// 加载静态资源
app.use(statics(path.join(__dirname, '../public')))

app.use(router())

app.listen(3000)