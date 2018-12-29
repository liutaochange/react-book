const Koa = require('koa');
const app = new Koa();
const {
  connect,
  initSchemas
} = require('./mongoose/index.js');

;(async () => {
  await connect()
  initSchemas()
})()

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(6000);