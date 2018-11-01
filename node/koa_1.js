require("babel-polyfill");
const Koa = require('koa');
const app = new Koa();

// // x-response-time

// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   ctx.set('X-Response-Time', `${ms}ms`);
// });

// // logger

app.use(async (ctx, next) => {
  console.log('origin');
  console.log(ctx.request.path);
  console.log('url');
  console.log(ctx.request.hostname);
});


app.listen(3333);