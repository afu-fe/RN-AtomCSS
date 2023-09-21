/*
 * @Author: cuiwujie
 * @Date: 2021-08-13
 * @LastEditors: cuiwujie
 * @LastEditTime: 2022-04-06 14:52:01
 * @Description: 基础变量设置 字体大小，行高，颜色
 */

import { fontFamilyUtil } from '../utils';
// 字体大小,行高
const size = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  none: 16,
  tight: 20,
  snug: 22,
  normal: 24,
  relaxed: 26,
  loose: 32,
};
// 字重大小
const fontWeight = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
  abold: 'bold',
};
// 字体
const fontfamily = {
  light: fontFamilyUtil['light'],
  regular: fontFamilyUtil['regular'],
  medium: fontFamilyUtil['medium'],
  din: fontFamilyUtil['din'],
  semibold: fontFamilyUtil['semibold'],
};
const colorbase = {
  black: 'rgb(0,0,0)', // #000000
  blue: 'rgb(32,108,254)', // #206CFE
  orange: 'rgb(255,102,0)', // #FF6600
  red: 'rgb(252,10,10)', // #FC0A0A
  green: 'rgb(28,205,153)', // #1CCD99
  purple: 'rgb(118,94,238)', // #765EEE
  yellow: 'rgb(255,204,37)', // #FFCC25
  cyan: 'rgb(37,201,255)', // #25C9FF
  masked: '#000000',
  'color-masked': '#000000',
  'color-title': '#111E36',
  'color-body': '#464E64',
  'color-desc': '#828CA0',
  'color-grey': '#BFC5D2',
  'color-border': '#E6E9F0',
  'color-underline': '#F0F3F8',
  'color-bg': '#F8F9FC',
  'color-white': '#FFFFFF',
  'color-light-orange': '#FEEDEB',
  'color-dark-orange': '#FF4434',
  'color-transparent': 'transparent',
  'color-line': '#F1F2F6',
};
const colorgradient = {
  'colorlingra-blue': ['#4C88FF', '#206CFE'],
  'colorlingra-orange': ['#FF8C3B', '#FF6600'],
  'colorlingra-red': ['#FF5B4C', '#FF4434'],
  'colorlingra-green': ['#24E1AA', '#1CCD99'],
  'colorlingra-purple': ['#8870FF', '#765EEE'],
  'colorlingra-yellow': ['#FFD240', '#FFCC25'],
  'colorlingra-cyan': ['#40D0FF', '#00C0FF'],
};
const flexConfig = {
  alignContentConfig: {
    center: 'center',
    start: 'flex-start',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
  },
  alignItemsConfig: {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    baseline: 'baseline',
    stretch: 'stretch',
  },
  alignSelfConfig: {
    auto: 'auto',
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    baseline: 'baseline',
    stretch: 'stretch',
  },
  justifyContentConfig: {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
  },
  justifyItemsConfig: {
    start: 'start',
    end: 'end',
    center: 'center',
    stretch: 'stretch',
  },
  justifySelfConfig: {
    start: 'start',
    end: 'end',
    center: 'center',
    stretch: 'stretch',
    auto: 'auto',
  },
  flexGrowShrinkConfig: {
    0: 0,
    1: 1,
    '': 1,
  },
  flexDirectionWrapConfig: {
    row: 'row',
    'row-reverse': 'row-reverse',
    col: 'column',
    'col-reverse': 'column-reverse',
    wrap: 'wrap',
    'wrap-reverse': 'wrap-reverse',
    nowrap: 'nowrap',
  },
  flexBoxConfig: {
    1: 1,
    none: 'none',
  },
  flexBasisConfig: {
    0: 0,
    1: 4,
    '1/2': '50%',
    '1/3': '33.33%',
    auto: 'auto',
    full: '100%',
  },
};
const direction = {
  inherit: 'inherit',
  ltr: 'ltr',
  rtl: 'rtl',
};
export {
  colorbase,
  colorgradient,
  direction,
  flexConfig,
  fontWeight,
  fontfamily,
  size,
};
