// sum.test.js
import { expect, test } from 'vitest';
import { autoTailwind } from '../../src/index';

const ts = autoTailwind({
  // http://auto-rn-tail.terra.corpautohome.com/
  defaultStyles: {},
  extend: {
    width: {
      auto: 'auto',
    },
    color: {
      // 颜色拓展 // text bg  border 通用
      'blue-c1': '#E9F0FE',
    },
  },
});
const Number = Math.floor(Math.random() * 100);
const paddingArr = {
  'px-xs': { paddingHorizontal: 12 },
  '-px-xs': { paddingHorizontal: -12 },
  'px-sm': { paddingHorizontal: 14 },
  '-px-sm': { paddingHorizontal: -14 },
  'px-base': { paddingHorizontal: 16 },
  '-px-base': { paddingHorizontal: -16 },
  'px-lg': { paddingHorizontal: 18 },
  '-px-lg': { paddingHorizontal: -18 },
  'px-xl': { paddingHorizontal: 20 },
  '-px-xl': { paddingHorizontal: -20 },
  'py-xs': { paddingVertical: 12 },
  '-py-xs': { paddingVertical: -12 },
  'py-sm': { paddingVertical: 14 },
  '-py-sm': { paddingVertical: -14 },
  'py-base': { paddingVertical: 16 },
  '-py-base': { paddingVertical: -16 },
  'py-lg': { paddingVertical: 18 },
  '-py-lg': { paddingVertical: -18 },
  'py-xl': { paddingVertical: 20 },
  '-py-xl': { paddingVertical: -20 },
  'pt-xs': { paddingTop: 12 },
  'pt-sm': { paddingTop: 14 },
  'pt-base': { paddingTop: 16 },
  'pt-lg': { paddingTop: 18 },
  'pt-xl': { paddingTop: 20 },
  '-pt-xs': { paddingTop: -12 },
  '-pt-sm': { paddingTop: -14 },
  '-pt-base': { paddingTop: -16 },
  '-pt-lg': { paddingTop: -18 },
  '-pt-xl': { paddingTop: -20 },
  'pb-xs': { paddingBottom: 12 },
  'pb-sm': { paddingBottom: 14 },
  'pb-base': { paddingBottom: 16 },
  'pb-lg': { paddingBottom: 18 },
  'pb-xl': { paddingBottom: 20 },
  '-pb-xs': { paddingBottom: -12 },
  '-pb-sm': { paddingBottom: -14 },
  '-pb-base': { paddingBottom: -16 },
  '-pb-lg': { paddingBottom: -18 },
  '-pb-xl': { paddingBottom: -20 },
  'pr-xs': { paddingRight: 12 },
  'pr-sm': { paddingRight: 14 },
  'pr-base': { paddingRight: 16 },
  'pr-lg': { paddingRight: 18 },
  'pr-xl': { paddingRight: 20 },
  '-pr-xs': { paddingRight: -12 },
  '-pr-sm': { paddingRight: -14 },
  '-pr-base': { paddingRight: -16 },
  '-pr-lg': { paddingRight: -18 },
  '-pr-xl': { paddingRight: -20 },
  'pl-xs': { paddingLeft: 12 },
  'pl-sm': { paddingLeft: 14 },
  'pl-base': { paddingLeft: 16 },
  'pl-lg': { paddingLeft: 18 },
  'pl-xl': { paddingLeft: 20 },
  '-pl-xs': { paddingLeft: -12 },
  '-pl-sm': { paddingLeft: -14 },
  '-pl-base': { paddingLeft: -16 },
  '-pl-lg': { paddingLeft: -18 },
  '-pl-xl': { paddingLeft: -20 },

  'ps-xs': { paddingStart: 12 },
  'ps-sm': { paddingStart: 14 },
  'ps-base': { paddingStart: 16 },
  'ps-lg': { paddingStart: 18 },
  'ps-xl': { paddingStart: 20 },
  '-ps-xs': { paddingStart: -12 },
  '-ps-sm': { paddingStart: -14 },
  '-ps-base': { paddingStart: -16 },
  '-ps-lg': { paddingStart: -18 },
  '-ps-xl': { paddingStart: -20 },

  'pe-xs': { paddingEnd: 12 },
  'pe-sm': { paddingEnd: 14 },
  'pe-base': { paddingEnd: 16 },
  'pe-lg': { paddingEnd: 18 },
  'pe-xl': { paddingEnd: 20 },
  '-pe-xs': { paddingEnd: -12 },
  '-pe-sm': { paddingEnd: -14 },
  '-pe-base': { paddingEnd: -16 },
  '-pe-lg': { paddingEnd: -18 },
  '-pe-xl': { paddingEnd: -20 },
};
Object.keys(paddingArr).forEach((k) => {
  test(`test ${JSON.stringify(paddingArr[k])}`, () => {
    expect(ts(k)).toEqual(paddingArr[k]);
  });
});
test(`test px-${Number}`, () => {
  const key = Object.keys(ts(`px-${Number}`))[0];
  expect(key).toBe('paddingHorizontal');
  const display = ts(`px-${Number}`)[key];
  expect(display).toBe(Number * 2);
});
test(`test py-${Number}`, () => {
  const key = Object.keys(ts(`py-${Number}`))[0];
  expect(key).toBe('paddingVertical');
  const display = ts(`py-${Number}`)[key];
  expect(display).toBe(Number * 2);
});
test(`test pt-${Number}`, () => {
  const key = Object.keys(ts(`pt-${Number}`))[0];
  expect(key).toBe('paddingTop');
  const display = ts(`pt-${Number}`)[key];
  expect(display).toBe(Number * 2);
});
test(`test pb-${Number}`, () => {
  const key = Object.keys(ts(`pb-${Number}`))[0];
  expect(key).toBe('paddingBottom');
  const display = ts(`pb-${Number}`)[key];
  expect(display).toBe(Number * 2);
});
test(`test pr-${Number}`, () => {
  const key = Object.keys(ts(`pr-${Number}`))[0];
  expect(key).toBe('paddingRight');
  const display = ts(`pr-${Number}`)[key];
  expect(display).toBe(Number * 2);
});
test(`test pl-${Number}`, () => {
  const key = Object.keys(ts(`pl-${Number}`))[0];
  expect(key).toBe('paddingLeft');
  const display = ts(`pl-${Number}`)[key];
  expect(display).toBe(Number * 2);
});
