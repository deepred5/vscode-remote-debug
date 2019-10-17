const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  const str = 'hello world.'
  ctx.body = str;
});

router.get('/debug', async (ctx, next) => {
  ctx.body = {
    code: 0,
    message: 'debug'
  };
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8099, () => {
  console.log('server start at localhost:8099');
});