import { SkinFilled } from '@ant-design/icons';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { useIntl, useModel } from '@umijs/max';
import { Spin } from 'antd';
import type { MenuInfo } from 'rc-menu/lib/interface';
import React, { useCallback, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { defaultThemesColor, defaultThemesKey } from '../../utils/themes';
import HeaderDropdown from '../HeaderDropdown';

const themeKey = defaultThemesKey();

const SelectTheme: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const { formatMessage } = useIntl();
  const [themeId, setThemeId] = useState<string>(themeKey);
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
  const onMenuClick = useCallback(
    (event: MenuInfo) => {
      const { key } = event;
      setThemeId(key);
      flushSync(() => {
        setInitialState((s: any) => {
          s.settings.colorPrimary = defaultThemesColor();
          return { ...s, themekey: key, settings: s?.settings };
        });
        localStorage.setItem('theme_key', key);
      });
    },
    [setInitialState],
  );

  const loading = (
    <span className={actionClassName}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );
  useEffect(() => {
    if (initialState?.themekey) {
      setThemeId(initialState?.themekey);
    } else {
      setThemeId('baseblue');
    }
  }, [initialState?.themekey]);

  if (!initialState) {
    return loading;
  }

  const menuItems = [
    { key: 'baseblue', label: formatMessage({ id: 'app.setting.themecolor.baseblue' }) },
    { key: 'basered', label: formatMessage({ id: 'app.setting.themecolor.basered' }) },
    { key: 'baseblack', label: formatMessage({ id: 'app.setting.themecolor.baseblack' }) },
    { key: 'daybreak', label: formatMessage({ id: 'app.setting.themecolor.daybreak' }) },
    { key: 'green', label: formatMessage({ id: 'app.setting.themecolor.green' }) },
    { key: 'sunset', label: formatMessage({ id: 'app.setting.themecolor.sunset' }) },
  ];
  return (
    <HeaderDropdown
      menu={{
        selectedKeys: [themeId],
        onClick: onMenuClick,
        items: menuItems,
      }}
    >
      <span className={actionClassName}>
        <SkinFilled />
      </span>
    </HeaderDropdown>
  );
};

export default SelectTheme;
