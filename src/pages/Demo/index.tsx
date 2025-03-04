import type { BtnAuthProps } from '@/utils/common';
import { getSortSord } from '@/utils/common';
import { queryPageAuthRes } from '@/utils/common';
import { ActionType, DrbtTable } from '@drbt-design/pro-components';
import { PageContainer } from '@drbt-design/pro-components';
import { Button, Skeleton, Tag, theme } from 'antd';
import type { SortOrder } from 'antd/es/table/interface';
import React, { useEffect, useRef, useState } from 'react';
import { queryAccountList } from './service';

const { useToken } = theme;

const Demo: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const [buttonAuth, setButtonAuth] = useState<BtnAuthProps>({});
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [updateVisible, setUpdateVisible] = useState<boolean>(false);

  const { token } = useToken();
  console.log('token', token);

  const queryPageAuth = async () => {
    const auths = await queryPageAuthRes(location.pathname.replace(/\//g, ''));
    setButtonAuth(auths);
    setPageLoading(false);
  };
  useEffect(() => {
    queryPageAuth();
  }, []);
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      hideInSearch: true,
      hideInTable: true,
    },
    {
      title: '账户',
      dataIndex: 'account',
      width: 100,
      hideInSearch: true,
    },
    {
      title: '姓名',
      dataIndex: 'full_name',
      width: 100,
      ellipsis: true,
    },
    {
      title: '手机号',
      dataIndex: 'mobile_phone',
      hideInSearch: true,
      width: 100,
      ellipsis: true,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      width: 120,
      ellipsis: true,
      hideInSearch: true,
    },
    {
      title: '认证姓名',
      dataIndex: 'oauth_name',
      hideInSearch: true,
      width: 100,
      ellipsis: true,
    },
    {
      title: '认证手机号',
      dataIndex: 'oauth_phone',
      hideInSearch: true,
      width: 100,
      ellipsis: true,
    },
    {
      title: '启用状态',
      dataIndex: 'state',
      valueType: 'select',
      width: 100,
      ellipsis: true,
      valueEnum: {
        true: {
          text: '启用',
          status: 'Processing',
        },
        false: { text: '停用', status: 'Warning' },
      },
    },
    {
      title: '账户状态',
      dataIndex: 'disabled_login_mark',
      hideInSearch: true,
      width: 100,
      ellipsis: true,
      render: (_, record) => {
        if (record.disabled_login_mark === 1) {
          return (
            <Tag color="green" style={{ cursor: 'pointer' }}>
              {'正常'}
            </Tag>
          );
        }
        if (record.disabled_login_mark === 0) {
          return (
            <Tag color="magenta" style={{ cursor: 'pointer' }}>
              {'锁定'}
            </Tag>
          );
        }
        return <span>{'从未登录'}</span>;
      },
    },
    {
      title: '创建人',
      dataIndex: 'create_account_name',
      hideInSearch: true,
      width: 100,
      ellipsis: true,
    },
    {
      title: '创建时间',
      dataIndex: 'create_date',
      valueType: 'dateTime',
      // hideInSearch: true,
      sorter: true,
      width: 120,
      ellipsis: true,
    },
    {
      title: '修改人',
      dataIndex: 'modify_account_name',
      hideInSearch: true,
      width: 100,
      ellipsis: true,
    },
    {
      title: '修改时间',
      dataIndex: 'modify_date',
      valueType: 'dateTime',
      hideInSearch: true,
      sorter: true,
      width: 120,
      ellipsis: true,
    },
    {
      title: '操作',
      valueType: 'option',
      width: 180,
      fixed: 'right',
      render: () => [
        buttonAuth.edit && (
          <a
            key="modify"
            onClick={() => {
              setUpdateVisible(true);
            }}
          >
            {`编辑`}
          </a>
        ),
      ],
    },
  ];
  // 控制栏自定义
  const toolBarInit = () => {
    return [
      buttonAuth.add && (
        <Button
          type="primary"
          onClick={() => {
            setUpdateVisible(true);
          }}
        >
          {'新增'}
        </Button>
      ),
    ];
  };
  const queryUserData = async (
    params: Record<string, any> & {
      pageSize?: number | undefined;
      current?: number | undefined;
      keyword?: string | undefined;
    },
    sort: Record<string, SortOrder>,
  ) => {
    const sordinfo = getSortSord(sort);
    const { sidx, sord } = sordinfo;
    const { current, pageSize, state, full_name } = params;
    const data = await queryAccountList({
      filter: {
        key_word: full_name || '',
        state,
      },
      page_num: current,
      page_size: pageSize,
      sidx,
      sord,
    });
    return {
      data: data.data.rows,
      page: data.data.page_num,
      success: true,
      total: data.data.total,
    };
  };
  return (
    <PageContainer
      header={{
        title: null,
        breadcrumb: {},
      }}
    >
      <Skeleton loading={pageLoading} active>
        <DrbtTable<any>
          rowKey="id"
          columns={columns}
          actionRef={actionRef}
          request={(params, sort) => queryUserData(params, sort)}
          toolBarRender={() => toolBarInit()}
        />
      </Skeleton>
    </PageContainer>
  );
};

export default Demo;
