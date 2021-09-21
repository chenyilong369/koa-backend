/*
 * @Description: 
 * @Autor: chenyilong369
 * @Date: 2021-09-21 10:07:03
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-09-21 15:50:59
 */
import demoapi2 from './demoapi2';
import demoApi from './dempApi'

const apis: {[index: string]: any} = {
  '/demo': demoApi,
  '/demo2': demoapi2,
}

function apiRoutes(app: { use: (arg0: any) => void; }) {
  Object.keys(apis).forEach((item: string) => {
    apis[item].prefix(item);
    app.use(apis[item].routes());
  })
}

export default apiRoutes;