const combineRoutes = require('koa-combine-routers')
const aroutes = require('./oneRouter')
const broutes = require('./twoRouter')

module.exports = combineRoutes(
    aroutes,
    broutes
)