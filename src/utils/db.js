import { axios, DEV, _commonData, mock } from './axios';
import * as user from './user';
import { sport as setting } from './setting';

/**
*   @database: { 微信开发 }
*   @desc:     { 用户登录信息查询 } 
    const { card_no, user_name } = params;
*/
export const getViewCbpcUserList = params =>
  axios({
    url: '/41/bdcb547de9.json',
    params,
  });

/**
 *   @database: { 微信开发 }
 *   @desc:     { 部门列表 }
 */
export const getCbpcDeptList = () =>
  axios({
    url: '/242/6a4d61905e.json',
  });

/**
*   @database: { 微信开发 }
*   @desc:     { 填写疫情记录 } 
    const { dept_name, recorder, abnormal, rec_time, remark, uid } = params;
*/
export const addCbpcNcovLog = params =>
  axios({
    url: '/243/23f99ecc18.json',
    params,
  });

/**
 *   @database: { 微信开发 }
 *   @desc:     { 填报情况 }
 */
export const getCbpcNcovLog = () =>
  axios({
    url: '/244/fa093f7d05.json',
  });
