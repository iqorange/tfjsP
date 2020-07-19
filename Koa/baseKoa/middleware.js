const Koa = require("koa")
const app = new Koa()

// 洋葱模型中间件执行模式
const middleware = function async(ctx, next){
    console.log('this is a middleware~')
    console.log(ctx.request.path)
    // next()
}

const middleware1 = function async(ctx, next){
    console.log('this is a middleware1~')
    console.log(ctx.request.path)
    next()
    console.log('this is a middleware1 finished~')
}

const middleware2 = function async(ctx, next){
    console.log('this is a middleware2~')
    console.log(ctx.request.path)
    next()
    console.log('this is a middleware2 finished~')
}

app.use(middleware1)
app.use(middleware2)
app.use(middleware)

app.listen(3000)