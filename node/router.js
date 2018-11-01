import Koa from 'koa';
import Router from 'koa-router';
import mybusboy from './mybusboy';


const app = new Koa();
const router = new Router();

router.use('/busboy', mybusboy);

app.use(router.routes()).use(router.allowedMethods());

app.listen(3333);