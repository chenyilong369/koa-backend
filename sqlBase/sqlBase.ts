/*
 * @Description: 基础 sql 语句
 * @Autor: chenyilong369
 * @Date: 2021-09-21 20:51:06
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-09-24 23:46:25
 */

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
  static getPool() {
    return getPromisePool();
  }

  tableName: string;
  primaryKey: string;

  async query(sql: string) {
    let promisePoolResult = await SqlBase.getPool().query(sql);
    return promisePoolResult;
  }

  async getDbData(sql: string) {
    try {
      const cnt = await this.query(sql);
      return cnt;
    } catch (e) {
      return e;
    }
  }

  async select(params?: {[index: string]: any}, controlNumber?: LimitSql) {
    let sql = `select * from ${this.tableName}`;
    sql += connectWhere(params);
    sql += limitSub(controlNumber);
    const ans = await this.getDbData(sql);
    return ans;
  }

  async delete(params?: {[index: string]: any}) {
    let sql = `delete from ${this.tableName}`;
    sql += connectWhere(params);
    const ans = await this.getDbData(sql);
    return ans;
  }

  async insert(params?: {[index: string]: any}) {
    let sql = `insert into ${this.tableName} ${insertObj(params)}`
    const ans = await this.getDbData(sql);
    return ans;
  }

  async update(params: {[index: string]: any}, controlUpdate: {[index: string]: any}) {
    let sql = `update ${this.tableName} set`;
    sql += connectUpdate(params);
    sql += connectWhere(controlUpdate);
    const ans = await this.getDbData(sql);
    return ans;
  }
}
