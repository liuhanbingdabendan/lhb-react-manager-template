import { PageContainer } from '@drbt-design/pro-components';
import { KeepAliveContext, useIntl } from '@umijs/max';
import { Card, theme } from 'antd';
import React, { useEffect } from 'react';

const Welcome: React.FC = () => {
  const { token } = theme.useToken();
  const { formatMessage } = useIntl();
  const { updateTab } = React.useContext(KeepAliveContext);
  useEffect(() => {
    updateTab(location.pathname, {
      name: formatMessage({ id: 'menu.welcome' }),
      closable: false,
    });
  }, []);
  return (
    <PageContainer
      header={{
        title: null,
        breadcrumb: {},
      }}
    >
      <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={{
          backgroundImage:
            'radial-gradient(circle at 97% 10%, #EBF2FF 0%, #F5F8FF 28%, #EBF1FF 124%)',
        }}
      >
        <div
          style={{
            backgroundPosition: '100% -30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '274px auto',
            backgroundImage:
              "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
          }}
        >
          <div
            style={{
              fontSize: '14px',
              color: token.colorTextHeading,
            }}
          >
            欢迎使用
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
