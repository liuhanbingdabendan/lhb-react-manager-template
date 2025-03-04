import { EllipsisOutlined } from '@ant-design/icons';
import type { ProColumns } from '@drbt-design/pro-table';
import { Button } from 'antd';
import React from 'react';
import { DrbtTable, PageContainer } from '@drbt-design/pro-components';

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};
type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: string;
  createdAt: number;
  memo: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 100; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: valueEnum[Math.floor(Math.random() * 10) % 4],
    createdAt: Date.now() - Math.floor(Math.random() * 100000),
    memo: i % 2 === 1 ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴' : '简短备注文案',
  });
}
const columns: ProColumns<TableListItem>[] = [
  {
    title: '应用名称',
    width: 80,
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '容器数量',
    width: 120,
    dataIndex: 'containers',
    align: 'right',
    sorter: (a, b) => a.containers - b.containers,
  },
  {
    title: '状态',
    width: 80,
    dataIndex: 'status',
    initialValue: 'all',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      close: { text: '关闭', status: 'Default' },
      running: { text: '运行中', status: 'Processing' },
      online: { text: '已上线', status: 'Success' },
      error: { text: '异常', status: 'Error' },
    },
  },
  {
    title: '创建时间',
    tooltip: '这是一段描述',
    width: 140,
    key: 'since1',
    hideInSearch: true,
    dataIndex: 'createdAt',
    valueType: 'date',
    sorter: (a, b) => a.createdAt - b.createdAt,
  },
  {
    title: '创建时间',
    tooltip: '这是一段描述',
    width: 140,
    key: 'since2',
    hideInSearch: true,
    dataIndex: 'createdAt',
    valueType: 'date',
    sorter: (a, b) => a.createdAt - b.createdAt,
  },
  {
    title: '创建时间',
    tooltip: '这是一段描述',
    width: 140,
    key: 'since3',
    hideInSearch: true,
    dataIndex: 'createdAt',
    valueType: 'date',
    sorter: (a, b) => a.createdAt - b.createdAt,
  },
  {
    title: '创建时间',
    tooltip: '这是一段描述',
    width: 140,
    key: 'since4',
    hideInSearch: true,
    dataIndex: 'createdAt',
    valueType: 'date',
    sorter: (a, b) => a.createdAt - b.createdAt,
  },
  {
    title: '操作',
    key: 'option',
    width: 120,
    fixed: 'right',
    valueType: 'option',
    render: () => [
      <a key="link">链路</a>,
      <a key="warn">报警</a>,
      <a key="more">
        <EllipsisOutlined />
      </a>,
    ],
  },
];
const DrbtTableDemo: React.FC = () => {
  return (
    <PageContainer
      header={{
        title: null,
        breadcrumb: {},
      }}
    >
      <DrbtTable<TableListItem>
        columns={columns}
        request={(params, sorter, filter) => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          console.log(params, sorter, filter);
          return Promise.resolve({
            data: tableListDataSource,
            success: true,
            page: 1,
            total: 100,
          });
        }}
        rowKey="key"
        headerTitle="表格标题"
        toolBarRender={() => [
          <Button key="out">导出数据</Button>,
          <Button type="primary" key="primary">
            创建应用
          </Button>,
        ]}
      />
    </PageContainer>
  );
};

export default DrbtTableDemo;
