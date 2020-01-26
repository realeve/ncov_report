import * as lib from './lib';

// 题目
export interface IPaper {
  title: string;
  data: string | string[];
  subTitle?: string | string[];
  type?: string;
  cascade?: number;
  [key: string]: any;
}

let paper: IPaper[] = [
  {
    title: '所在部门',
    type: 'select',
    data: `办公室
    企划信息部
    计划财务部
    钞纸管理部
    印钞管理部
    安全保卫部
    设备管理部
    物资管理部
    技术中心
    基建与行政事务部
    人力资源部
    企业文化部
    纪检监察内审部
    群工部
    离退休工作部
    印钞数管部
    胶凹制作部
    印码制作部
    检封制作部
    钞纸制作部
    钞纸成品制作部
    造币制作部
    能源环保部
    市场开发部
    采购管理部
    长城公司
    金鼎公司
    物业公司
    成钞医院
    中钞金服`,
  },
  {
    title: '异常人员数量(人次)',
    type: 'input',
    data: '0',
  },
  {
    type: 'textarea',
    title: '备注(若有异常，请填写详细信息)',
    data: '无',
  },
];

export let paperData = lib.handlePaper(paper);

export default paperData;
