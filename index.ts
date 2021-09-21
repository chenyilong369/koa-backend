/*
 * @Description:
 * @Autor: chenyilong369
 * @Date: 2021-09-20 11:40:17
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-09-21 15:58:07
 */

import Koa, { Context } from 'koa';
import Logger from './modules/logger';
import bodyParser from 'koa-bodyparser';
import loggerMiddleware from './middleware/logger';
import { errorObj } from './modules/common';
import { configKeys, getConfig } from './config';
import apiRoutes from './router/api';

const PORT = getConfig(configKeys.PORT);

Logger.info('后台服务启动');
const app = new Koa();

app.use(
	bodyParser({
		jsonLimit: '25mb',
	})
);

app.use(loggerMiddleware);

apiRoutes(app);

// app.use(demoApi.routes())

app.use((ctx: Context) => {
	const req = ctx.request;
	const res = ctx.response;
	Logger.warn(`没有匹配到请求：${req.originalUrl}`);
	res.status = 404;
	res.body = errorObj('PathError', `没有找到对应资源：${req.originalUrl}`);
});

app.on('error', (err, ctx) => {
	const res = ctx.response;
	Logger.error(`服务启动失败：${JSON.stringify(err)}`);
	res.status = err.status || 500;
	res.body = errorObj('NodeSysError', `内部错误：${err}`);
});

app.listen(PORT, () => {
	Logger.info(`服务启动成功：http://localhost:${PORT}`);
});
