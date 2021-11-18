/*
 * @Description: 基础 sql 语句
 * @Autor: chenyilong369
 * @Date: 2021-09-21 20:51:06
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-09-25 17:52:00
 */

import Logger from '../modules/logger';
import { getPromisePool } from './dbPromise';
import { connectUpdate, connectWhere, insertObj, limitSub } from './sqlUtil';

interface SqlBaseConstructor {
	tableName: string;
	primaryKey: string;
}

export interface LimitSql {
	offset?: number;
	limit: number;
}

export default class SqlBase {
	getPool() {
		return getPromisePool();
	}

	tableName: string;
	primaryKey: string;

	constructor(tableName: string, primaryKey: string) {
		this.tableName = tableName;
		this.primaryKey = tableName;
	}

	query(sql: string, params: any) {
		if (!sql) throw new Error('sql 参数不存在');
		Logger.sql(sql, params);
		return this.getPool()
			.query(sql, params)
			.catch((e: { message: any }) => {
				Logger.error(`数据库错误：${e.message}`);
			});
	}

	async select(params?: { [index: string]: any }, controlNumber?: LimitSql) {
		let sql = `select * from ${this.tableName}`;
		sql += connectWhere(params);
		sql += limitSub(controlNumber);
		const value = params ? Object.values(params) : {};
		const [ans] = await this.query(sql, value);
		return ans;
	}

	async delete(params?: { [index: string]: any }) {
		let sql = `delete from ${this.tableName}`;
		sql += connectWhere(params);
    const value = params ? Object.values(params) : {};
		const [ans] = await this.query(sql, value);
		return ans;
	}

	async insert(params?: { [index: string]: any }) {
		let sql = `insert into ${this.tableName} ${insertObj(params)}`;
		const value = params ? Object.values(params) : {};
		const [ans] = await this.query(sql, value);
		return ans;
	}

	async update(params: { [index: string]: any }, controlUpdate?: { [index: string]: any }) {
		let sql = `update ${this.tableName} set`;
		sql += connectUpdate(params);
		sql += connectWhere(controlUpdate);
		const value = params ? Object.values(params) : {};
		const [ans] = await this.query(sql, value);
		return ans;
	}

  async selectCount(params?: {[index: string]: any}) {
    let sql = `select count(*) from ${this.tableName}`;
		sql += connectWhere(params);
    const value = params ? Object.values(params) : {};
		const [ans] = await this.query(sql, value);
    return ans[0]['count(*)'];
  }
}
