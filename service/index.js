const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const {
  connect,
  initSchemas
} = require('./mongoose/index.js');

// 初始化路由
let router = new Router();
// 装载所有子路由
const list = require('./app/list.js');
router.use('/list', list.routes(), list.allowedMethods());

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

(async () => {
  await connect()
  initSchemas()
})()

app.use(async ctx => {
  ctx.body = 'Hello World';
})

app.listen(6001);
