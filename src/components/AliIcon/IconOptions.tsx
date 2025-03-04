import Icon, * as icons from '@ant-design/icons';
import React from 'react';
import oldOptions from './OldIconOptions';

// console.log('icons', Object.keys(icons));

// 里面有一些是方法,要筛选一遍,否则页面会报错
const iconList = Object.keys(icons).filter(
  (item) => typeof icons[item] === 'object' && item !== 'default' && item !== 'IconProvider',
);
type OptionType = {
  label: string | React.ReactNode;
  value: any;
};
const IconOptions: OptionType[] = [];

iconList.map((item) => {
  IconOptions.push({
    value: item,
    label: (
      <div>
        <Icon component={icons[item]} style={{ marginRight: '8px' }} />
        <strong>{item}</strong>
      </div>
    ),
  });
});
// 旧图标添加 上线时可删除
IconOptions.push(...oldOptions);

export default IconOptions;
