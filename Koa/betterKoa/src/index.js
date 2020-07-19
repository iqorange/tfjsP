const koa = require('koa')
const path = require('path')
const app = new koa()
const helmet = require('koa-helmet')
const statics = require('koa-static')

const router = require('./routes/routes')

// 构建安全的请求头
app.use(helmet());
// 加载静态资源
app.use(statics(path.join(__dirname, '../public')))

app.use(router())

app.listen(3000)