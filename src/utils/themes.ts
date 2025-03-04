/**
 * 默认主题
 */
export const defaultThemesKey = () => {
  return localStorage.getItem('theme_key') || 'baseblue';
};

/**
 * 默认主题颜色
 */
export const defaultThemesColor = () => {
  let defaultColor;
  let key = defaultThemesKey();
  switch (key) {
    case 'baseblack':
      defaultColor = '#000';
      break;
    case 'basered':
      defaultColor = '#EF5362';
      break;
    case 'green': //O
      defaultColor = '#046a38';
      break;
    case 'daybreak': //v
      defaultColor = '#455fe1';
      break;
    case 'sunset': //D
      defaultColor = '#ff7800';
      break;
    case 'baseblue':
    default:
      defaultColor = '#299EE3';
      break;
  }
  return defaultColor;
};

/**
 * 默认主题颜色透明
 */
export const defaultThemesTransparentColor = (value: any) => {
  let defaultColor;
  let transValue = value;
  let key = defaultThemesKey();
  switch (key) {
    case 'baseblack':
      defaultColor = 'rgba(0, 0, 0, ${transValue})';
      break;
    case 'basered':
      defaultColor = `rgba(239, 83, 98, ${transValue})`;
      break;
    case 'green': //O
      defaultColor = `rgba(4, 106, 56, ${transValue})`;
      break;
    case 'daybreak': //v
      defaultColor = `rgba(69, 95, 225, ${transValue})`;
      break;
    case 'sunset': //D
      defaultColor = `rgba(255, 120, 0, ${transValue})`;
      break;
    case 'baseblue':
    default:
      defaultColor = `rgba(41, 158, 227, ${transValue})`;
      break;
  }
  return defaultColor;
};
