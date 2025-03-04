import { getCurrentLocal } from '@/utils/common';
import { CloudDownloadOutlined } from '@ant-design/icons';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { getAuthToken } from '@drbt-design/pro-pc';
import { useIntl } from '@umijs/max';
import { Tooltip } from 'antd';
import React from 'react';

const ExportCenter: React.FC = () => {
  const { formatMessage } = useIntl();

  const actionClassName = useEmotionCss(({ token }) => {
    return {
      display: 'flex',
      height: '48px',
      marginLeft: 'auto',
      overflow: 'hidden',
      alignItems: 'center',
      padding: '0 8px',
      cursor: 'pointer',
      borderRadius: token.borderRadius,
      '&:hover': {
        backgroundColor: token.colorBgTextHover,
      },
    };
  });
  return (
    <Tooltip
      placement="bottom"
      title={formatMessage({ id: 'component.globalHeader.export.center' })}
    >
      <div
        className={actionClassName}
        onClick={() => {
          let locale = getCurrentLocal();
          const portalUrl = window.globalConfig.loginUrl.split('login')[0];
          let token = getAuthToken();
          let href_url = `${portalUrl}exportCenter?token=${token}&umi_locale=${locale}`;
          window.open(href_url, '_blank');
        }}
      >
        <CloudDownloadOutlined
          style={{
            fontSize: 20,
          }}
        />
      </div>
    </Tooltip>
  );
};

export default ExportCenter;
