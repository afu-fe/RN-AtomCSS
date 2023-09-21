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
const marginArr = {
  'mx-xs': { marginHorizontal: 12 },
  '-mx-xs': { marginHorizontal: -12 },
  'mx-sm': { marginHorizontal: 14 },
  '-mx-sm': { marginHorizontal: -14 },
  'mx-base': { marginHorizontal: 16 },
  '-mx-base': { marginHorizontal: -16 },
  'mx-lg': { marginHorizontal: 18 },
  '-mx-lg': { marginHorizontal: -18 },
  'mx-xl': { marginHorizontal: 20 },
  '-mx-xl': { marginHorizontal: -20 },
  'ms-xs': { marginStart: 12 },
  'my-xs': { marginVertical: 12 },
  '-my-xs': { marginVertical: -12 },
  'my-sm': { marginVertical: 14 },
  '-my-sm': { marginVertical: -14 },
  'my-base': { marginVertical: 16 },
  '-my-base': { marginVertical: -16 },
  'my-lg': { marginVertical: 18 },
  '-my-lg': { marginVertical: -18 },
  'my-xl': { marginVertical: 20 },
  '-my-xl': { marginVertical: -20 },
  'mt-xs': { marginTop: 12 },
  'mt-sm': { marginTop: 14 },
  'mt-base': { marginTop: 16 },
  'mt-lg': { marginTop: 18 },
  'mt-xl': { marginTop: 20 },
  '-mt-xs': { marginTop: -12 },
  '-mt-sm': { marginTop: -14 },
  '-mt-base': { marginTop: -16 },
  '-mt-lg': { marginTop: -18 },
  '-mt-xl': { marginTop: -20 },
  'mb-xs': { marginBottom: 12 },
  'mb-sm': { marginBottom: 14 },
  'mb-base': { marginBottom: 16 },
  'mb-lg': { marginBottom: 18 },
  'mb-xl': { marginBottom: 20 },
  '-mb-xs': { marginBottom: -12 },
  '-mb-sm': { marginBottom: -14 },
  '-mb-base': { marginBottom: -16 },
  '-mb-lg': { marginBottom: -18 },
  '-mb-xl': { marginBottom: -20 },
  'mr-xs': { marginRight: 12 },
  'mr-sm': { marginRight: 14 },
  'mr-base': { marginRight: 16 },
  'mr-lg': { marginRight: 18 },
  'mr-xl': { marginRight: 20 },
  '-mr-xs': { marginRight: -12 },
  '-mr-sm': { marginRight: -14 },
  '-mr-base': { marginRight: -16 },
  '-mr-lg': { marginRight: -18 },
  '-mr-xl': { marginRight: -20 },
  'ml-xs': { marginLeft: 12 },
  'ml-sm': { marginLeft: 14 },
  'ml-base': { marginLeft: 16 },
  'ml-lg': { marginLeft: 18 },
  'ml-xl': { marginLeft: 20 },
  '-ml-xs': { marginLeft: -12 },
  '-ml-sm': { marginLeft: -14 },
  '-ml-base': { marginLeft: -16 },
  '-ml-lg': { marginLeft: -18 },
  '-ml-xl': { marginLeft: -20 },

  'ms-xs': { marginStart: 12 },
  'ms-sm': { marginStart: 14 },
  'ms-base': { marginStart: 16 },
  'ms-lg': { marginStart: 18 },
  'ms-xl': { marginStart: 20 },
  '-ms-xs': { marginStart: -12 },
  '-ms-sm': { marginStart: -14 },
  '-ms-base': { marginStart: -16 },
  '-ms-lg': { marginStart: -18 },
  '-ms-xl': { marginStart: -20 },

  'me-xs': { marginEnd: 12 },
  'me-sm': { marginEnd: 14 },
  'me-base': { marginEnd: 16 },
  'me-lg': { marginEnd: 18 },
  'me-xl': { marginEnd: 20 },
  '-me-xs': { marginEnd: -12 },
  '-me-sm': { marginEnd: -14 },
  '-me-base': { marginEnd: -16 },
  '-me-lg': { marginEnd: -18 },
  '-me-xl': { marginEnd: -20 },
};
Object.keys(marginArr).forEach((k) => {
  test(`test ${JSON.stringify(marginArr[k])}`, () => {
    expect(ts(k)).toEqual(marginArr[k]);
  });
});
test(`test mx-${Number}`, () => {
  const key = Object.keys(ts(`mx-${Number}`))[0];
  expect(key).toBe('marginHorizontal');
  const display = ts(`mx-${Number}`)[key];
  expect(display).toBe(Number * 2);
});
test(`test my-${Number}`, () => {
  const key = Object.keys(ts(`my-${Number}`))[0];
  expect(key).toBe('marginVertical');
  const display = ts(`my-${Number}`)[key];
  expect(display).toBe(Number * 2);
});
test(`test mt-${Number}`, () => {
  const key = Object.keys(ts(`mt-${Number}`))[0];
  expect(key).toBe('marginTop');
  const display = ts(`mt-${Number}`)[key];
  expect(display).toBe(Number * 2);
});
test(`test mb-${Number}`, () => {
  const key = Object.keys(ts(`mb-${Number}`))[0];
  expect(key).toBe('marginBottom');
  const display = ts(`mb-${Number}`)[key];
  expect(display).toBe(Number * 2);
});
test(`test mr-${Number}`, () => {
  const key = Object.keys(ts(`mr-${Number}`))[0];
  expect(key).toBe('marginRight');
  const display = ts(`mr-${Number}`)[key];
  expect(display).toBe(Number * 2);
});
test(`test ml-${Number}`, () => {
  const key = Object.keys(ts(`ml-${Number}`))[0];
  expect(key).toBe('marginLeft');
  const display = ts(`ml-${Number}`)[key];
  expect(display).toBe(Number * 2);
});
