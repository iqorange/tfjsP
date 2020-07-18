const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

router.get('/', ctx => {
    console.log(ctx);
    console.log(ctx.request);
    ctx.body = 'Hello World~'
})

router.get('/api', ctx => {
    console.log(ctx);
    console.log(ctx.request);
    ctx.body = 'Hello Api~'
})

router.get('/async', async(ctx) => {
    let result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello async 2s later~');
        }, 2000);
    })
    ctx.body = result;
})

// 配置中间件
app.use(router.routes()).use(router.allowedMethods())// 拦截器

app.listen(3000)