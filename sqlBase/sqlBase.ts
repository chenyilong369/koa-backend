/*
 * @Description: 基础 sql 语句
 * @Autor: chenyilong369
 * @Date: 2021-09-21 20:51:06
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-09-23 23:19:08
 */

import { getPromisePool } from './dbPromise';
import { connectWhere, insertObj, limitSub } from './sqlUtil';

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

  select(params?: {[index: string]: any}, controlNumber?: LimitSql) {
    let sql = `select * from ${this.tableName}`;
    sql += connectWhere(params);
    sql += limitSub(controlNumber);
    return sql;
  }

  delete(Id: string) {
    let sql = `dele`
  }

  insert(params?: {[index: string]: any}) {
    let sql = `insert into ${this.tableName} ${insertObj(params)}`
    return sql;
  }
}
