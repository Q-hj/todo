/*
 * @Date: 2022-08-12 10:24:23
 * @LastEditors: Mr.qin
 * @LastEditTime: 2022-08-12 10:50:09
 * @Description: api
 */
const api = {
	test(obj, ...keys) {
		return post('/web/test', query(obj, keys));
	},
};

export default api;

function query(obj, keys) {
	let params = {};
	for (const key of keys) {
		params[key] = obj[key];
	}
	return params;
}
