/*
 * @Description: 
 * @Autor: chenyilong369
 * @Date: 2021-09-21 21:21:42
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-09-24 23:44:16
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
  Object.keys(params).forEach((key, index) => {
    let tmp = '';
    if (index) {
      tmp = ` and ${key}=${params[key]}`;
    } else tmp = ` ${key}=${params[key]}`;
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

export function connectUpdate(params: {[index: string]: any}) {
  if(!params) return '';
  let sql = '';
  Object.keys(params).forEach((key, index) => {
    let tmp = ``;
    if(index === 0) {
      tmp = `, ${key}=${params[key]}`;
    } else {
      tmp = ` ${key}=${params[key]}`
    }
    sql += tmp;
  });
  return sql;
}
