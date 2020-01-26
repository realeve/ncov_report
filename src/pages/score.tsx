import React, { useState, useEffect } from 'react';
import { WhiteSpace, WingBlank, List } from 'antd-mobile';
import styles from './index.less';
import * as db from '@/utils/db.js';
import * as lib from '@/utils/lib';
const Item = List.Item;

export default function ScorePage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    db.getCbpcNcovLog().then(res => {
      setData(res.data);
    });
  }, []);
  return (
    <div className={styles.content}>
      <h3 style={{ textAlign: 'center' }}>成钞公司疫情记录</h3>
      <p style={{ textAlign: 'center' }}>{lib.ymdate()}</p>
      <WhiteSpace size="lg" />
      <List>
        <Item extra={<span style={{ fontWeight: 'bold' }}>异常人数</span>}>
          <span style={{ fontWeight: 'bold' }}>部门</span>
        </Item>
        {data.map(item => (
          <Item extra={item.num} key={item.dept_name}>
            {item.dept_name}
          </Item>
        ))}
      </List>
      <WhiteSpace size="lg" />
      <WingBlank> 截止时间：{lib.now()} </WingBlank>
    </div>
  );
}
