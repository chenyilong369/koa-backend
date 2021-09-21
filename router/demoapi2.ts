/*
 * @Description: 
 * @Autor: chenyilong369
 * @Date: 2021-09-21 15:49:36
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-09-21 15:50:37
 */
import RouterSample from '../modules/routerSample';

const demoapi2 = new RouterSample();

demoapi2.get('/def', (ctx) => {
  return {def: 'def'}
})

export default demoapi2.Router;