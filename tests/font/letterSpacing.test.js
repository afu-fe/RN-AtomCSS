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

const arr = {
  'tracking-xs': { letterSpacing: 12 },
  'tracking-sm': { letterSpacing: 14 },
  'tracking-base': { letterSpacing: 16 },
  'tracking-lg': { letterSpacing: 18 },
  'tracking-xl': { letterSpacing: 20 },
};
Object.keys(arr).forEach((k) => {
  test(`test ${JSON.stringify(arr[k])}`, () => {
    expect(ts(k)).toEqual(arr[k]);
  });
});

const Number = Math.floor(Math.random() * 100);
test(`test tracking-${Number}`, () => {
  const keys = `tracking-${Number}`;
  const key = Object.keys(ts(keys))[0];
  expect(key).toBe('letterSpacing');
  const display = ts(keys)[key];
  expect(display).toBe(Number * 2);
});
