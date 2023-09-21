// sum.test.js
import { expect, test } from 'vitest';
import { autoTailwind } from '../../src/index';

const ts = autoTailwind({
  // http://auto-rn-tail.terra.corpautohome.com/
  defaultStyles: {},
  extend: {
    minWidth: {
      auto: 'auto',
    },
    color: {
      // 颜色拓展 // text bg  border 通用
      'blue-c1': '#E9F0FE',
    },
  },
});

const arr = {
  'min-w-full': { minWidth: '100%' },
  'min-w-1/2': { minWidth: '50%' },
  'min-w-1/3': { minWidth: '33.33%' },
  'min-w-1/4': { minWidth: '25%' },
};
Object.keys(arr).forEach((k) => {
  test(`test ${JSON.stringify(arr[k])}`, () => {
    expect(ts(k)).toEqual(arr[k]);
  });
});
const Number = Math.floor(Math.random() * 100);
test(`test min-w-${Number}`, () => {
  const keys = `min-w-${Number}`;
  const key = Object.keys(ts(keys))[0];
  expect(key).toBe('minWidth');
  const display = ts(keys)[key];
  expect(display).toBe(Number * 2);
});
