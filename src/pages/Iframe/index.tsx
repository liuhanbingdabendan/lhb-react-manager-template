/* eslint-disable no-plusplus */
import type { AuthInfo } from '@/services/init';
import { exchangeToken, getUrlParams } from '@/services/init/auth';
import {
  convertObj,
  getAuthorityInfo,
  getAuthToken,
  getCurrentLocal,
  getMenuIdByPath,
  sessionReadObject,
} from '@/utils/common';
import { KeepAliveContext, useLocation } from '@umijs/max';
import React, { useEffect, useState } from 'react';

const Iframe: React.FC = () => {
  const location = useLocation();
  const { updateTab } = React.useContext(KeepAliveContext);
  const [src, setSrc] = useState('');

  const app_feature_id = getMenuIdByPath(location.pathname);
  const getMenuInfo = () => {
    const apiRoute = sessionReadObject('LevelMenu');
    for (let i = 0; i < apiRoute.length; i++) {
      if (apiRoute[i].path === location.pathname) {
        return apiRoute[i];
      }
    }
  };
  // 不是第三方配置的有linkurl的带上交换后的token
  const getOtherSrc = async (info: any) => {
    let locale = getCurrentLocal();
    const tokenRes = await exchangeToken({ app_id: info.link_app });
    if (tokenRes.code === 200) {
      let href;
      if (app_feature_id) {
        href = `${info.link_url}?token=${encodeURIComponent(
          tokenRes.data.token,
        )}&iframe=yes&app_feature_id=${app_feature_id}&umi_locale=${locale}`;
      } else {
        href = `${info.link_url}?token=${encodeURIComponent(
          tokenRes.data.token,
        )}&iframe=yes&umi_locale=${locale}`;
      }
      setSrc(href);
    }
  };
  useEffect(() => {
    let locale = getCurrentLocal();
    const menuInfo = getMenuInfo();
    // 多页签处理方法示例
    updateTab(location.pathname, {
      name: menuInfo.title,
    });
    if (menuInfo.third_party_able) {
      // 第三方配置链接
      getUrlParams(menuInfo.third_party_id).then((res) => {
        setSrc(`${menuInfo.link_url}?${convertObj(res.data)}`);
      });
      // 有链接自身应用的
    } else if (menuInfo.link_app) {
      const authInfo = getAuthorityInfo() as AuthInfo;
      const token = getAuthToken();
      // 和主体appid一致则不交换令牌
      if (authInfo.ud.appId === menuInfo.link_app) {
        if (app_feature_id) {
          setSrc(
            `${menuInfo.link_url}?token=${token}&iframe=yes&app_feature_id=${app_feature_id}&umi_locale=${locale}`,
          );
        } else {
          setSrc(`${menuInfo.link_url}?token=${token}&iframe=yes&umi_locale=${locale}`);
        }
      } else {
        getOtherSrc(menuInfo);
      }
    } else {
      // 不带参数
      setSrc(`${menuInfo.link_url}`);
    }
    return () => {
      setSrc('');
    };
  }, []);

  // 在新窗口打开详情页 不带菜单
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const jump = (obj: any) => {
    window.open(`/other/InitiationProcessDetails?proc_inst_id=${obj.proc_inst_id}`, '_blank');
  };
  const getIframeMessage = (msg: any) => {
    if (msg.data.type === 'oa') {
      window.open(`${msg.data.path}?${convertObj(msg.data.query)}`, '_blank');
    }
  };
  useEffect(() => {
    window.addEventListener('message', getIframeMessage);
  }, []);
  let tzstr = window.localStorage.getItem('time_zone_key');
  let tenstr = window.localStorage.getItem('tenant_zone_key');
  let iframetz = tzstr || tenstr || 'Asia/Shanghai';

  return (
    <div>
      {src && (
        <iframe
          style={{
            width: '100%',
            height: 'calc(100vh - 180px)',
          }}
          frameBorder="0"
          src={`${src}&tz=${iframetz}&`}
        />
      )}
    </div>
  );
};

export default Iframe;
