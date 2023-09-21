/*
 * @Author: cuiwujie
 * @Date: 2020-08-13
 * @LastEditors: cuiwujie
 * @LastEditTime: 2022-04-06 14:52:01
 * @Description: 属性值获取
 */
import { consumePeeked } from './utils';
const useTailValue = (autoTailwind) => {
  const getValue = (value) => {
    const cssObj = autoTailwind(value, 'getValue'); // 获取值
    try {
      if (consumePeeked(value, 'text-')) {
        // 字体大小 颜色
        return cssObj['fontSize'] || cssObj['color'] || '';
      }
      if (consumePeeked(value, 'font-')) {
        // 字重大小
        return cssObj['fontWeight'] || '';
      }
      if (consumePeeked(value, 'leading-')) {
        // 行高大小
        return cssObj['lineHeight'] || '';
      }
      if (consumePeeked(value, 'bg-')) {
        // 背景颜色
        return cssObj['backgroundColor'] || cssObj['opacity'] || '';
      }
      if (consumePeeked(value, 'colorlingra-')) {
        // 渐变颜色
        const configSize = cssObj?.[value] || [];
        return configSize;
      }
      if ([`regular`, `light`, `medium`, `din`, `semibold`].includes(value)) {
        // 字体
        return cssObj['fontFamily'] || '';
      }
      return '';
    } catch (e) {
      return '';
    }
  };
  return getValue;
};

export default useTailValue;
