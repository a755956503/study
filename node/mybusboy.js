import Router from 'koa-router';

const router = new Router();

router.all('/', async (ctx) => {
  console.log(ctx._matchedRouteName);
  console.log('matchedRouter');
});

export default router.routes();