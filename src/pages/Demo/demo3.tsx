import { PageContainer } from '@drbt-design/pro-components';
import { Button, Space, Input } from 'antd';
import React, { useState } from 'react';
import { signVerifyCode } from './service';

const { TextArea } = Input;

const TestSignToken: React.FC = () => {
  const [paramStr, setParamStr] = useState<string>('');
  const testRequest = async () => {
    const res = await signVerifyCode(JSON.parse(paramStr));
    console.log(res);
  };
  return (
    <PageContainer
      header={{
        title: null,
        breadcrumb: {},
      }}
    >
      <TextArea
        placeholder="请求参数粘贴"
        allowClear
        autoSize={{ minRows: 6 }}
        value={paramStr}
        onChange={(e) => setParamStr(e.target.value)}
      />
      <Space style={{ marginTop: '20px' }}>
        <Button type="primary" danger onClick={() => setParamStr('')}>
          清除
        </Button>
        <Button type="dashed" onClick={testRequest}>
          testRequest
        </Button>
      </Space>
    </PageContainer>
  );
};

export default TestSignToken;
