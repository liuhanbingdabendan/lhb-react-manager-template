import React from 'react';
import { Select } from 'antd';
import IconOptions from './IconOptions';

export interface iconSelectProps {
  placeholder?: string;
}
const IconSelect: React.FC<iconSelectProps> = ({ placeholder = '请选择图标' }) => {
  return (
    <Select
      options={IconOptions}
      placeholder={placeholder}
      showSearch
      allowClear
      style={{ width: '100%' }}
    />
  );
};

export default IconSelect;
