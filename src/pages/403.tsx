import { history, useIntl } from '@umijs/max';
import { Button, Result } from 'antd';
import React from 'react';

const UnauthorizedPage: React.FC = () => {
  const { formatMessage } = useIntl();
  return (
    <Result
      status="403"
      title="403"
      subTitle={formatMessage({ id: 'app.settings.403.tip' })}
      extra={
        <Button type="primary" onClick={() => history.push('/')}>
          {formatMessage({ id: 'app.settings.404.back-home' })}
        </Button>
      }
    />
  );
};

export default UnauthorizedPage;
