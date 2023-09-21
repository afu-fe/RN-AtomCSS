/*
 * @Author: cuiwujie
 * @Date: 2020-08-13
 * @LastEditors: cuiwujie
 * @LastEditTime: 2022-04-06 14:52:01
 * @Description:
 * 'border-solid': { borderStyle: 'solid' },
 * 'border-dashed': { 	borderStyle: 'dashed' },
 * 'border-dotted': { 	borderStyle: 'dotted' },
 * 'border-double': { 	borderStyle: 'double' },
 * 'border-none': { 	borderStyle: 'none' },
 */

import { parseAndConsumeDirection } from '../utils';

import { color } from './color';

type StyleObject = Record<string, any>;

function borderWidth(
  value: string,
  direction: 'All' | 'Left' | 'Right' | 'Top' | 'Bottom' | 'End' | 'Start',
  style: StyleObject,
): StyleObject {
  try {
    let v = value.replace(/^-/, '');
    const key = v === '' ? 1 : parseFloat(v);
    const prop = `border${direction === 'All' ? '' : direction}Width`;
    style[prop] = parseFloat(`${key}`);
  } catch (e) {
    // Handle errors here if needed
  }
  return style;
}

function directionArr(type: string): string[] {
  switch (type) {
    case 'Top':
      return ['TopLeft', 'TopRight'];
    case 'Bottom':
      return ['BottomLeft', 'BottomRight'];
    case 'Left':
      return ['TopLeft', 'BottomLeft'];
    case 'Right':
      return ['TopRight', 'BottomRight'];
    case 'TopEnd':
      return ['TopEnd'];
    case 'TopStart':
      return ['TopStart'];
    case 'BottomStart':
      return ['BottomStart'];
    case 'BottomEnd':
      return ['BottomEnd'];
    case 'End':
      return ['End'];
    case 'Start':
      return ['Start'];
    default:
      return [type];
  }
}
export function border(
  value: string,
  style: StyleObject,
  content: StyleObject,
): StyleObject {
  try {
    let [rest, direction] = parseAndConsumeDirection(value);
    const widthUtilityMatch = rest.match(/^(-?(\d)+)?$/);
    if (
      widthUtilityMatch &&
      ['All', 'Left', 'Right', 'Top', 'Bottom', 'End', 'Start'].includes(
        direction,
      )
    ) {
      let dir: 'All' | 'Left' | 'Right' | 'Top' | 'Bottom' | 'End' | 'Start';
      switch (direction) {
        case `All`:
          dir = `All`;
          break;
        case `Left`:
          dir = `Left`;
          break;
        case `Right`:
          dir = `Right`;
          break;
        case `Top`:
          dir = `Top`;
          break;
        case `Bottom`:
          dir = `Bottom`;
          break;
        case `End`:
          dir = `End`;
          break;
        case `Start`:
          dir = `Start`;
          break;
      }
      return borderWidth(rest, dir, style);
    }
    let str = rest.replace(/^-/, ``); // 样式
    if ([`dashed`, `solid`, `dotted`, `none`, `double`].includes(str)) {
      style.borderStyle = str;
    }
    let colorType:
      | 'border'
      | 'borderTop'
      | 'borderLeft'
      | 'borderRight'
      | 'borderBottom'
      | 'borderStart'
      | 'borderEnd';
    switch (direction) {
      case `Bottom`:
        colorType = `borderBottom`;
        break;
      case `Top`:
        colorType = `borderTop`;
        break;
      case `Left`:
        colorType = `borderLeft`;
        break;
      case `Right`:
        colorType = `borderRight`;
        break;
      case `End`:
        colorType = `borderEnd`;
        break;
      case `Start`:
        colorType = `borderStart`;
        break;
      default:
        colorType = `border`;
        break;
    }
    return color(colorType, rest, style, content);
  } catch (e) {}
  return style;
}
export function borderRadius(
  value: string,
  style: StyleObject,
  context: StyleObject,
): StyleObject {
  try {
    const sizeBase = 16;
    const config = {
      // 圆角值
      none: 0,
      sm: sizeBase * 0.125, // 2
      normal: sizeBase * 0.25, // 4
      md: sizeBase * 0.375, // 6
      lg: sizeBase * 0.5, // 8
      xl: sizeBase * 0.75, // 12
      '2xl': sizeBase * 1, // 16
      '3xl': sizeBase * 1.5, // 24
      '4xl': sizeBase * 2, // 24
      full: 9999, // 100%
    };
    let [rest, direction] = parseAndConsumeDirection(value);
    rest = rest.replace(/^-/, ``);
    if (rest === ``) {
      rest = `DEFAULT`;
    }
    const dir = directionArr(direction);
    dir.forEach((item) => {
      const key = `border${item === `All` ? `` : item}Radius`;
      const configValue = config[rest];
      let v = 0;
      if (Number.isFinite(configValue)) {
        v = configValue;
        return (style[`${key}`] = v);
      } else {
        // // 拓展数据 start
        const extend = context['extend'] || {};
        const extendConfig = (extend && extend['borderRadius']) || {};
        let extendC = extendConfig?.[rest]; // 是否为固定变量
        if (extendC) {
          v = parseFloat(extendC);
          if (Number.isFinite(v)) {
            return (style[`${key}`] = v);
          }
        }
        // 拓展数据 end
        // 原始数据 判断是否为数字
        const n = parseFloat(rest);
        if (Number.isFinite(n)) {
          return (style[`${key}`] = 2 * n);
        }
      }
    });
    return style;
  } catch (e) {}
  return style;
}
