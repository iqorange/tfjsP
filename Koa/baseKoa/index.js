const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const koaBody = require('koa-body')
const json = require('koa-json')
const app = new Koa()
const router = new Router()

// 前缀
router.prefix('/api')

router.get('/', ctx => {
    console.log(ctx);
    console.log(ctx.request);
    ctx.body = 'Hello World~'
})

router.get('/api', ctx => {
    // get params
    const params = ctx.request.query
    console.log(params);
    console.log(params.name, params.age);

    console.log(ctx);
    console.log(ctx.request);
    ctx.body = {
        name: params.name,
        age: params.age
    }
})

router.get('/async', async(ctx) => {
    let result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello async 2s later~');
        }, 2000);
    })
    ctx.body = result;
})

router.post('/post', async(ctx) => {
    // ES6把请求体中的内容全部放到body里去
    let {body} = ctx.request;
    console.log(body);
    console.log(ctx.request);
    ctx.body = {
        // 扩展运算符，把body展开来返回回去，避免循环嵌套
        ...body
    }
})

// 首先处理request过来的数据
app.use(koaBody())
// 处理跨域请求问题
app.use(cors())
// json format (http://localhost:3000/api/api?name=kb&age=15&pretty)
app.use(json({pretty: false, param: 'pretty'}))
// 配置中间件
app.use(router.routes()).use(router.allowedMethods())// 拦截器

app.listen(3000)