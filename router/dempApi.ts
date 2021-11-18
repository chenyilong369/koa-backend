/*
 * @Description: 
 * @Autor: chenyilong369
 * @Date: 2021-09-21 10:08:30
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-09-25 17:51:29
 */

import RouterSample from '../modules/routerSample';
import SqlBase from '../sqlBase/sqlBase';

const documentRouter = new RouterSample();

const userData = new SqlBase('user', 'id');

documentRouter.get('/book', (ctx) => {
  // console.log(222)
  // const { request, response } = ctx;
  return { name: 111 }
})

documentRouter.get('/book2', (ctx) => {
  // console.log(222)
  // const { request, response } = ctx;
  return { name: 111 }
})

documentRouter.get('/book3', (ctx) => {
  // console.log(222)
  // const { request, response } = ctx;
  return { name: 333 }
})

documentRouter.get('/user', async(ctx) => {
  const res = await userData.selectCount()
  return res;
})

export default documentRouter.Router;


