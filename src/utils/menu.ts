import React from 'react';
import type { MenuDataItem } from '@drbt-design/pro-components';
import * as allIcons from '@ant-design/icons';
import { getIntl } from '@umijs/max';
import { oldToNew } from '@/components/AliIcon/oldToNew';
import type { MessageDescriptor } from '@umijs/route-utils/dist/types';

// formatMessage过滤
export const customFormateMsg = (msg: MessageDescriptor) => {
  // 必须在函数里用以下语句
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const { formatMessage, messages } = getIntl();
  const ismsg = msg.id in messages;
  if (ismsg) {
    return formatMessage({ id: msg.id });
  }
  return msg.defaultMessage || '';
};

export const menuLoop = (menuList: any[]): any[] =>
  menuList.map((item) => {
    const localItem = {
      icon: item.icon,
      code: item.code,
      name: item.private_able ? item.title : `${item.code}`,
      path: item.private_able ? `/${item.code}` : item.href,
      component: item.component ? item.component : '@/pages/Iframe/index',
      key: item.id,
      title: item.title,
      private_able: item.private_able,
      link_url: item.link_url,
      link_app: item.link_app,
      third_party_able: item.third_party_able,
      third_party_id: item.third_party_id,
      headerRender: item.headerRender,
      footerRender: item.footerRender,
      menuRender: item.menuRender,
      children: item.routes && item.routes.length ? menuLoop(item.routes) : [],
    };
    return localItem;
  });

// FIX从接口获取菜单时icon为string类型
export const fixMenuItemIcon = (menus: MenuDataItem[]): MenuDataItem[] => {
  menus.forEach((item) => {
    const { icon, children } = item;
    if (typeof icon === 'string') {
      const fixIconName = icon.slice(0, 1).toLocaleUpperCase() + icon.slice(1);
      if (fixIconName in allIcons) {
        item.icon = React.createElement(allIcons[fixIconName]);
      } else if (icon in allIcons) {
        item.icon = React.createElement(allIcons[icon]);
      } else if (oldToNew[icon]) {
        const icoon = oldToNew[icon];
        item.icon = React.createElement(allIcons[icoon]);
      } else {
        item.icon = React.createElement(allIcons['SmileOutlined']);
      }
    }
    // eslint-disable-next-line no-param-reassign,@typescript-eslint/no-unused-expressions
    children && children.length > 0 ? (item.children = fixMenuItemIcon(children)) : null;
  });
  return menus;
};

export const filterByMenuData = (data: MenuDataItem[], keyWord: string): MenuDataItem[] => {
  return data
    .map((item) => {
      if (
        (item.name &&
          customFormateMsg({ id: item.locale as string, defaultMessage: item.title }).includes(
            keyWord,
          )) ||
        filterByMenuData(item.children || [], keyWord).length > 0
      ) {
        return {
          ...item,
          children: filterByMenuData(item.children || [], keyWord),
        };
      }
      return undefined;
    })
    .filter((item) => item) as MenuDataItem[];
};
