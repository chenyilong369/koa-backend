/*
 * @Description:
 * @Autor: chenyilong369
 * @Date: 2021-09-21 20:54:57
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-09-21 21:03:57
 */
import mysql from 'mysql2';
import { Pool } from 'mysql2/promise';
import { getConfig, configKeys } from '../config';

let promisePool: Pool;

function initPool() {
	const options = {
		host: getConfig(configKeys.DB_HOST),
		user: getConfig(configKeys.DB_USER),
		password: getConfig(configKeys.DB_PASSWORD),
		database: getConfig(configKeys.DB_DATABASE),
		charset: 'utf8',
	};
	const pool = mysql.createPool(options);
	return pool.promise();
}

export function getPromisePool() {
	if (!promisePool) {
		promisePool = initPool();
	}
	return promisePool;
}
