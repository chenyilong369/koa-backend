/*
 * @Description: 
 * @Autor: chenyilong369
 * @Date: 2021-09-25 08:30:00
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-09-25 10:56:03
 */
import SqlBase from '../sqlBase'

export default class UserData extends SqlBase {
  constructor() {
    super();
    this.tableName = 'user';
    this.primaryKey = 'username';
  }
}
