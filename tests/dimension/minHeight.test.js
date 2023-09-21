// sum.test.js
import { expect, test } from 'vitest';
import { autoTailwind } from '../../src/index';

const ts = autoTailwind({
  // http://auto-rn-tail.terra.corpautohome.com/
  defaultStyles: {},
  extend: {
    minHeight: {
      auto: 'auto',
    },
    color: {
      // 颜色拓展 // text bg  border 通用
      'blue-c1': '#E9F0FE',
    },
  },
});
const arr = {
  'min-h-full': { minHeight: '100%' },
  'min-h-1/2': { minHeight: '50%' },
  'min-h-1/3': { minHeight: '33.33%' },
  'min-h-1/4': { minHeight: '25%' },
};
Object.keys(arr).forEach((k) => {
  test(`test ${JSON.stringify(arr[k])}`, () => {
    expect(ts(k)).toEqual(arr[k]);
  });
});
const Number = Math.floor(Math.random() * 100);
test(`test min-h-${Number}`, () => {
  const keys = `min-h-${Number}`;
  const key = Object.keys(ts(keys))[0];
  expect(key).toBe('minHeight');
  const display = ts(keys)[key];
  expect(display).toBe(Number * 2);
});
