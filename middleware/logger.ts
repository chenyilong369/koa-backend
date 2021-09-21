/*
 * @Description: 中间件
 * @Autor: chenyilong369
 * @Date: 2021-09-20 17:19:49
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-09-20 23:04:55
 */
import { Next } from 'koa';
import { Context } from 'vm';
import Logger from '../modules/logger';

export default function loggerMiddleware(ctx: Context, next: Next) {
  const req = ctx.request;
  let message = `检测到接口请求：${req.method} ${req.url}`;
  if(Object.keys(req.query).length > 0) message += `| query:${JSON.stringify(req.query)}`;
  if(Object.keys(req.body).length > 0) message += `| body:${JSON.stringify(req.body)}`;
  Logger.info(message);
  next();
}
