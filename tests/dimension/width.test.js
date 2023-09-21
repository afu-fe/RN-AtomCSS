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
  'w-full': { width: '100%' },
  'w-1/2': { width: '50%' },
  'w-1/3': { width: '33.33%' },
  'w-1/4': { width: '25%' },
};
Object.keys(arr).forEach((k) => {
  test(`test ${JSON.stringify(arr[k])}`, () => {
    expect(ts(k)).toEqual(arr[k]);
  });
});
const Number = Math.floor(Math.random() * 100);
test(`test w-${Number}`, () => {
  const keys = `w-${Number}`;
  const key = Object.keys(ts(keys))[0];
  expect(key).toBe('width');
  const display = ts(keys)[key];
  expect(display).toBe(Number * 2);
});
