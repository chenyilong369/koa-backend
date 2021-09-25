/*
 * @Description: 
 * @Autor: chenyilong369
 * @Date: 2021-09-20 15:19:51
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-09-25 10:53:18
 */
export enum configKeys{
  PORT='port',
  DB_HOST="DB_HOST",
  DB_USER="DB_USER",
  DB_DATABASE="DB_DATABASE",
  DB_PASSWORD="DB_PASSWORD",
}

const projectConfigs: {[key: string]: any} = {
  port: 8080,
  DB_HOST: '127.0.0.1',
  DB_USER: 'interfaceTest',
  DB_PASSWORD: 'cg9837cg9837',
  DB_DATABASE: 'interfacetest',
}

export function getConfig(key: configKeys | string): any {
  return projectConfigs[key];
}

export function setConfig(key: configKeys | string, value: any): any {
  projectConfigs[key] = value;
}

