import React, { useState, useEffect } from 'react';
import { Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
import styles from './index.less';
import { connect } from 'dva';
import FormComponent from '@/components/FormComponent';
import router from 'umi/router';
import * as userLib from '@/utils/user';
import * as db from '@/utils/db.js';

function NewPage({ paper: initData, dispatch }: any) {
  const [state, setState] = useState<string[]>([]);

  const updateState = logInfo => {
    dispatch({
      type: 'common/setStore',
      payload: {
        logInfo,
      },
    });
  };
  useEffect(() => {
    let res = userLib.loadLoginfo();
    if (res.uid) {
      // 跳转至题目页面
      router.push('/paper');
      updateState(res);
    }
  }, []);

  const onChange = (v: string[]) => {
    userLib.setPaperData(v);
    dispatch({
      type: 'common/setStore',
      payload: {
        pay: v,
      },
    });
    setState(v);
  };

  const [loading, setLoading] = useState(false);
  const [showErr, setShowErr] = useState(initData.length === 0 ? {} : { msg: '' });

  const onSubmmit = async () => {
    if (loading) {
      // 不重复提交
      return;
    }
    setLoading(true);

    db.getViewCbpcUserList({ card_no: state[1], user_name: state[0] }).then(res => {
      setLoading(false);
      if (res.rows === 0) {
        Toast.fail('登录失败');
        return;
      }
      userLib.saveLoginfo(res.data[0]);
      updateState(res.data[0]);
      router.push('/paper');
    });
  };

  return (
    <div>
      <div className={styles.content}>
        <WingBlank>
          <h3>疫情上报</h3>
          <p>为严格落实公司此次防疫工作，各部门负责人于16:00之前及时将本部门情况上报。 </p>
        </WingBlank>
        <div style={{ paddingLeft: 20, marginTop: 30 }}>登录</div>

        <WhiteSpace size="lg" />

        <FormComponent
          showKey={false}
          data={[
            {
              type: 'input',
              title: '姓名',
              data: '',
            },
            {
              type: 'input',
              title: '卡号',
              data: '',
            },
          ]}
          onChange={onChange}
          state={state}
          showErr={showErr}
        />

        <WhiteSpace size="lg" />
      </div>
      <WingBlank>
        <Button type="primary" onClick={onSubmmit} loading={loading} disabled={loading}>
          登录
        </Button>
      </WingBlank>
    </div>
  );
}

export default connect(({ common }: any) => ({ ...common }))(NewPage);
