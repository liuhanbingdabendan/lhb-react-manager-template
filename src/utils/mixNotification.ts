import { notification } from 'antd';
import { useStyleRegister, Theme } from '@ant-design/cssinjs';
import classNames from 'classnames';

const theme = new Theme([() => ({})]);
export const MixNotificationContext = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [api, contextHolder] = notification.useNotification();
  notification.config({
    maxCount: 1,
    className: classNames('drbt-notification'),
  });
  useStyleRegister(
    {
      theme,
      token: { _tokenKey: 'drbt-notification' },
      path: ['layer'],
      layer: 'shared, layer',
    },
    () => ({
      '.drbt-notification': {
        padding: '16px !important',
        '.ant-notification-notice-icon': {
          fontSize: '16px !important',
          marginTop: '2px',
        },
        '.ant-notification-notice-message': {
          'margin-inline-start': '24px !important',
          color: '#323233 !important',
          fontSize: '14px !important',
        },
        '.ant-notification-notice-description': {
          'margin-inline-start': '24px !important',
          color: '#646566 !important',
          lineHeight: '20px !important',
        },
        '.ant-notification-notice-close': {
          top: '16px !important',
          'inset-inline-end': '16px !important',
        },
      },
    }),
  );

  return contextHolder;
};
