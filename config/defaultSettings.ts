import { ProLayoutProps } from '@drbt-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 经典蓝
  colorPrimary: '#299EE3',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '鼓点中台-XXX应用',
  pwa: false,
  logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAwCAYAAABnjuimAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHFSURBVFiF1ZldlsIgDIUTzywMV9a4MrqzzMNAhwKFkPJT74vHGpKvN4BYAQaLmQ0zW2Y2o2upFAB62dVMiZiZOC+zmg0ADhdLWu9qwcVYtAownosSmdmQUhdjzZsCChfnusq6Vmc1GrKn6BsgvUxPSO2iKcn2hhzhJHUDHATZF3AApOVR29HjAR1kj8VDwwA7QVqe9K3zSBd/ovfmRq43Iu7xxZy7uTixbrQ8OQm1jOXWqaIEpY656sA9IRWuJsC5fC+Z34k+iFgEBYCPMrfJwSLA3923ZEJElMQFeT307l43qC/csxmKttNl6hS0CMP1A/hRq7n1gpaHsXvl87e4sOCuYhlx8v8a2XknqR8GakQCMP/bypbGcWXq+Tg8Ubdrz1wzpQHxQnROX4454mvWDxDFoKVgH6fdR+9o4/M8NxdxAEHHXqDfmLU6isfuVlWzv5MoclKykE0MOuo3u02KNZhz5WqvRzXW5coC+pYL8pSnhUvSAmy54UwphEzcLB4uLu5qPwY3ntRdvk0QKjmdjZHUSV71+LwB0MvMBtTsJDQVMoB9PqQDffY/JY2w6yG9vgIS4NJVWs2VVQRLq3mK4htP+n4Bc2Ya42i+/4UAAAAASUVORK5CYII=',
  iconfontUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
};

export default Settings;
