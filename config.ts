/*
 * @Description: 
 * @Autor: chenyilong369
 * @Date: 2021-09-20 15:19:51
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-09-20 15:19:52
 */
export enum configKeys{
  PORT='port',
  DB_HOST="DB_HOST",
  DB_USER="DB_USER",
  DB_DATABASE="DB_DATABASE",
  DB_PASSWORD="DB_PASSWORD",
}

const projectConfigs: {[key: string]: any} = {
  port: 8080
}

export function getConfig(key: configKeys | string): any {
  return projectConfigs[key];
}

export function setConfig(key: configKeys | string, value: any): any {
  projectConfigs[key] = value;
}

