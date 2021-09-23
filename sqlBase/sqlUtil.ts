/*
 * @Description: 
 * @Autor: chenyilong369
 * @Date: 2021-09-21 21:21:42
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-09-23 23:17:43
 */

import { LimitSql } from './sqlBase';

/**
 * @description: 拼接 where 子句
 * @param {object} params
 * @return {*}
 * @author: chenyilong369
 */
export function connectWhere(params: {[index: string]: any}) {
  if(!params) return '';
  let message = ' where';
  Object.keys(params).forEach(key => {
    const tmp = ` ${key}=${params[key]}`;
    message += tmp;
  });
  return message;
}

/**
 * @description: 拼接限制语句
 * @param {LimitSql} controlNumber
 * @return {*}
 * @author: chenyilong369
 */
export function limitSub(controlNumber: LimitSql) {
  if(controlNumber) {
    return ` limit ${controlNumber.limit},${controlNumber.offset ? controlNumber.offset : 0}`
  }
  return '';
}

/**
 * @description: 拼接insert语句
 * @param {object} params
 * @return {*}
 * @author: chenyilong369
 */
export function insertObj(params: {[index: string]: any}): any {
  let paramKey = '(';
  let value = '(';
  if(params) {
    Object.keys(params).forEach((key, index) => {
      if(index !== 0) {
        paramKey += ','
        value += ',';
      }
      paramKey += key
      value += params[key];
    })
  }
  paramKey += ')';
  value += ')';
  const sql = paramKey + ' values' + value;
  return sql;
}
