/*
 * @Description:
 * @Autor: chenyilong369
 * @Date: 2021-09-21 20:54:57
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-09-25 11:27:05
 */
import mysql from 'mysql2';
import { getConfig, configKeys } from '../config';

let promisePool: any;
let pool: mysql.Pool;

export function initPool() {
	const options = {
		host: getConfig(configKeys.DB_HOST),
		user: getConfig(configKeys.DB_USER),
		password: getConfig(configKeys.DB_PASSWORD),
		database: getConfig(configKeys.DB_DATABASE),
		charset: 'utf8',
	};
	pool = mysql.createPool(options);
	promisePool = pool.promise();
}

export function getPromisePool() {
	if(!promisePool) throw Error('数据库初始化异常')
	return promisePool;
}

export function getPool() {
	if(!pool) throw Error('数据库初始化异常')
	return pool;
}
