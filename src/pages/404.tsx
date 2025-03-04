import { history, useIntl } from '@umijs/max';
import { Button, Result } from 'antd';
import React from 'react';

const NoFoundPage: React.FC = () => {
  const { formatMessage } = useIntl();
  return (
    <Result
      status="404"
      title="404"
      subTitle={formatMessage({ id: 'app.settings.404.tip' })}
      extra={
        <Button type="primary" onClick={() => history.push('/')}>
          {formatMessage({ id: 'app.settings.404.back-home' })}
        </Button>
      }
    />
  );
};

export default NoFoundPage;
