/*
 * @Description: 
 * @Autor: chenyilong369
 * @Date: 2021-09-21 10:08:30
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-09-21 15:34:51
 */

import RouterSample from '../modules/routerSample';

const documentRouter = new RouterSample();

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

export default documentRouter.Router;


