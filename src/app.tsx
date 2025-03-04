/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/ban-types */
import Footer from '@/components/Footer';
import RightContent from '@/components/RightContent';
import { SearchOutlined } from '@ant-design/icons';
import type { Settings as LayoutSettings } from '@drbt-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
import { formatMessage } from '@umijs/max';
import { ConfigProvider, Input } from 'antd';
import dayjs from 'dayjs';
import moment from 'moment';
import defaultSettings from '../config/defaultSettings';
import routes from '../config/routes';
import { actionLogApi, cancelApi } from './log/service';
import Iframe from './pages/Iframe/index';
import { errorConfig } from './requestErrorConfig';
import type { AuthInfo } from './services/init';
import { queryMenuTree, query_tz_by_tenant_id } from './services/init/auth';
import {
  clearAuthAndLogout,
  getTreeKeys,
  getUserInfo,
  listToTree,
  meuntoArr,
  sessionReadObject,
  sessionSave,
  waitTime,
} from './utils/common';
import { customFormateMsg, filterByMenuData, fixMenuItemIcon, menuLoop } from './utils/menu';
import { MixNotificationContext } from './utils/mixNotification';
import { defaultThemesColor, defaultThemesKey } from './utils/themes';

let apiRoutes: any = [];
(window as any).app_id = 'xxx';

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  authInfo?: AuthInfo; // token解析
  loading?: boolean;
  keyWords?: string; // 菜单搜索
  authRoutes?: string[]; // 权限路由name
  authSessionKey?: string;
  themekey?: string;
}> {
  const authInfo = getUserInfo();
  const tzres = await query_tz_by_tenant_id(authInfo?.ud.tenantId);
  if (tzres.code === 200 && tzres.data) {
    localStorage.setItem('tenant_zone_key', tzres.data);
  }
  const authsession = sessionReadObject(
    `auth${authInfo?.id}${authInfo?.ud.tenantId}${authInfo?.ud.appId}`,
  );
  // theme init
  defaultSettings.colorPrimary = defaultThemesColor();
  return {
    authInfo,
    authRoutes: Array.isArray(authsession) ? authsession : [],
    authSessionKey: `auth${authInfo?.id}${authInfo?.ud.tenantId}${authInfo?.ud.appId}` || 'auth',
    settings: defaultSettings,
    themekey: defaultThemesKey(),
  };
}
// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  let theme_sider = {
    colorTextSubMenuSelected: '#ffffff',
    colorMenuBackground: '#ffffff', // menu 的背景颜色
    colorTextMenuTitle: '#000000', // sider 的标题字体颜色
    colorTextMenu: '#000000', // menuItem 的字体颜色
    colorTextMenuSecondary: '#000000', // menu 的二级字体颜色
    colorTextMenuSelected: '#fff', // menuItem 的选中字体颜色
    colorTextMenuItemHover: '#000000', // menuItem 的 hover 字体颜色
    colorBgMenuItemHover: '#fff', // menuItem 的 hover 背景颜色
    colorBgMenuItemSelected: defaultThemesColor(), // menuItem 的选中背景颜色
    colorBgMenuItemCollapsedHover: '#ffffff', // 收起 menuItem 的 hover 背景颜色
    colorBgMenuItemCollapsedSelected: '#ffffff', // 收起 menuItem 的选中背景颜色
    colorBgCollapsedButton: '#ffffff', // 展开收起按钮背景颜色
    paddingBlockLayoutMenu: 0,
    paddingInlineLayoutMenu: 0,
    colorTextButton: '#000000', //按钮文本颜色
    colorTextBgButton: defaultThemesColor(), //按钮背景颜色
  };
  return {
    footerRender: () => <Footer />,
    menu: {
      request: async (params, defaultMenuData) => {
        await waitTime(500);
        if (apiRoutes.length) {
          const loopMenu = menuLoop(apiRoutes);
          const authArr = getTreeKeys(apiRoutes, 'code');
          // 防止闪烁用session预存一下
          sessionSave(initialState?.authSessionKey as string, authArr);
          setInitialState((initialState) => {
            return {
              ...initialState,
              authRoutes: authArr,
            };
          });
          return loopMenu;
        }
        return defaultMenuData;
      },
    },
    menuDataRender: (menuData) => {
      const fixmeuns = initialState?.keyWords
        ? filterByMenuData(menuData, initialState.keyWords)
        : menuData;
      return fixMenuItemIcon(fixmeuns);
    },
    formatMessage: customFormateMsg,
    menuExtraRender: ({ collapsed }) =>
      !collapsed && (
        <Input
          className="menuSearch"
          defaultValue={initialState?.keyWords}
          // bordered={false}
          placeholder={formatMessage({ id: 'component.table.pre_placeholder' })}
          prefix={<SearchOutlined style={{ color: theme_sider.colorBgMenuItemSelected }} />}
          onChange={(e) => {
            setInitialState((initialState) => {
              return {
                ...initialState,
                keyWords: e.target.value,
              };
            });
          }}
        />
      ),
    rightContentRender: () => <RightContent />,
    waterMarkProps: {
      content: `${initialState?.authInfo?.name} ${moment(new Date()).format(
        'YYYY-MM-DD HH:mm:ss',
      )}`,
      fontColor: 'rgba(0,0,0,.05)',
    },
    onPageChange: () => {
      // 如果没有登录
      if (!initialState?.authInfo?.name) {
        clearAuthAndLogout();
      }
    },
    layoutBgImgList: [
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr',
        left: 85,
        bottom: 100,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr',
        bottom: -68,
        right: -45,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr',
        bottom: 0,
        left: 0,
        width: '331px',
      },
    ],
    // menuHeaderRender: undefined,
    // 自定义 403 页面
    // noAccessible: <div>noAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: theme_sider.colorTextBgButton,
            },
            components: {
              Button: {
                colorBorder: theme_sider.colorTextBgButton,
                colorText: theme_sider.colorTextButton,
              },
              // 这个设置是table缩小字体和间距设置，看需求是否保留
              Table: {
                fontSize: 12,
                paddingXS: 4,
              },
            },
          }}
        >
          <>{MixNotificationContext()}</>
          <div
            className={defaultThemesKey()}
            style={{ width: '100%', height: `calc(100% - 44px)` }}
          >
            {children}
          </div>
        </ConfigProvider>
      );
    },
    siderWidth: 230,
    token: {
      header: {
        colorBgHeader: '#ffffff',
      },
      pageContainer: {
        paddingBlockPageContainerContent: 0,
        paddingInlinePageContainerContent: 0,
        colorBgPageContainer: '#F4F6FB',
      },
      sider: theme_sider,
    },
    ...initialState?.settings,
    logo: (
      <div
        style={{
          background: defaultThemesColor(),
          width: 36,
          height: 36,
          borderRadius: 8,
          lineHeight: '28px',
          textAlign: 'center',
        }}
      >
        <img
          style={{ width: 16, height: 18, verticalAlign: 'middle' }}
          src={defaultSettings?.logo}
          alt="logo"
        />
      </div>
    ),
  };
};

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request = {
  baseURL: window.globalConfig.baseapi || '',
  ...errorConfig,
};

// 路由相关
const replactRoute = (firstRoutes: any) => {
  if (!firstRoutes) return;
  const levearr = sessionReadObject('LevelMenu');
  levearr.forEach((rr: { component: string; href: any; id: any; private_able: any; code: any }) => {
    if (rr.private_able) {
      firstRoutes.push({
        id: rr.id,
        path: `/${rr.code}`,
        element: <Iframe />,
        access: 'authFilter',
        name: rr.code,
        unaccessible: false,
        parentId: 'max-tabs',
        file: '@/pages/Iframe/index.tsx',
      });
    } else if (rr.component === '@/pages/Iframe/index') {
      firstRoutes.push({
        id: rr.id,
        path: rr.href,
        element: <Iframe />,
        access: 'authFilter',
        name: rr.code,
        unaccessible: false,
        parentId: 'max-tabs',
        file: '@/pages/Iframe/index.tsx',
      });
    }
  });
};

const leveRoutes = meuntoArr(routes);
const apiRouteAddConfig = () => {
  const leveApiRoutes = meuntoArr(apiRoutes);
  leveApiRoutes.forEach((aroute) => {
    leveRoutes.forEach((route) => {
      if (aroute.href === route.path) {
        aroute.headerRender = route.headerRender;
        aroute.footerRender = route.footerRender;
        aroute.menuRender = route.menuRender;
      }
    });
  });
  apiRoutes = listToTree(leveApiRoutes, '0');
};

export function patchClientRoutes({ routes }: any) {
  // 根据接口菜单遍历找到对应的iframe动态添加到原始路由里
  replactRoute(routes[routes.length - 1].children[0].children);
  apiRouteAddConfig();
}
export const render = async (oldRender: () => void) => {
  getUserInfo();
  const menuRes = await queryMenuTree();
  apiRoutes = menuRes.data;
  apiRoutes.unshift({
    code: 'welcome',
    component: './Welcome',
    href: '/welcome',
    icon: 'smile',
    id: '00001111',
    link_able: false,
    parent_id: '0',
    private_able: false,
    routes: [],
    sort_code: 0,
    title: '欢迎',
  });
  const newroute = JSON.parse(JSON.stringify(apiRoutes));
  const levearr = meuntoArr(newroute);
  levearr.forEach((item) => {
    if (item.private_able) {
      item.path = `/${item.code}`;
    } else {
      item.path = item.href;
    }
  });
  sessionSave('LevelMenu', levearr);
  oldRender();
};

// 记录页面数据
let startTime = 0;
let historyUrlPath = '';
export function onRouteChange({ location }: any) {
  let endTime;
  // 页面访问埋点
  if (startTime !== 0) {
    endTime = +new Date();
    let menuLangCode = 'menu' + historyUrlPath.replace(/\//g, '.');
    let menuLangName = formatMessage({ id: menuLangCode });
    let req = {
      page_path: historyUrlPath,
      page_name: menuLangName,
      start_time: dayjs(startTime).format('YYYY-MM-DD HH:mm:ss'),
      end_time: dayjs(endTime).format('YYYY-MM-DD HH:mm:ss'),
      expend_time: Math.round((endTime - startTime) / 1000),
    };
    // console.log('页面访问埋点',req );
    //发完埋点数据之后，重置startTime
    startTime = +new Date();
    historyUrlPath = location.pathname;
    let RandomRequestId = 'actionLogApi' + String((Math.random() * 1000000).toFixed(0));
    actionLogApi(req, { cancelable: true, requestId: RandomRequestId });
    setTimeout(() => {
      cancelApi(RandomRequestId);
    }, 3000);
  } else {
    startTime = +new Date();
    historyUrlPath = location.pathname;
  }
}
