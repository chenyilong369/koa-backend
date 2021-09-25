/*
 * @Description:
 * @Autor: chenyilong369
 * @Date: 2021-09-21 10:07:03
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-09-25 17:36:09
 */
import demoApi from './dempApi';

const apis: { [index: string]: any } = {
	'/demo': demoApi,
};

function apiRoutes(app: { use: (arg0: any) => void }) {
	Object.keys(apis).forEach((item: string) => {
		apis[item].prefix(item);
		app.use(apis[item].routes());
	});
}

export default apiRoutes;
