import { SelectLang, useModel } from '@umijs/max';
import React from 'react';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { TopRight } from '@drbt-design/pro-components';
import SelectTheme from './SelectTheme';
import ExportCenter from './ExportCenter';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const className = useEmotionCss(() => {
    return {
      display: 'flex',
      height: '48px',
      marginLeft: 'auto',
      overflow: 'hidden',
      gap: 8,
    };
  });
  const actionClassName = useEmotionCss(({ token }) => {
    return {
      display: 'flex',
      float: 'right',
      height: '48px',
      marginLeft: 'auto',
      overflow: 'hidden',
      cursor: 'pointer',
      padding: '0 12px',
      borderRadius: token.borderRadius,
      '&:hover': {
        backgroundColor: token.colorBgTextHover,
      },
    };
  });
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  return (
    <div className={className}>
      <ExportCenter />
      <TopRight />
      <SelectTheme />
      <SelectLang className={actionClassName} />
    </div>
  );
};
export default GlobalHeaderRight;
