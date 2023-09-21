// sum.test.js
import { expect, test } from 'vitest';
import { autoTailwind } from '../../src/index';

const ts = autoTailwind({
  // http://auto-rn-tail.terra.corpautohome.com/
  defaultStyles: {},
  extend: {
    maxHeight: {
      auto: 'auto',
    },
    color: {
      // 颜色拓展 // text bg  border 通用
      'blue-c1': '#E9F0FE',
    },
  },
});

const arr = {
  'max-h-full': { maxHeight: '100%' },
  'max-h-1/2': { maxHeight: '50%' },
  'max-h-1/3': { maxHeight: '33.33%' },
  'max-h-1/4': { maxHeight: '25%' },
};
Object.keys(arr).forEach((k) => {
  test(`test ${JSON.stringify(arr[k])}`, () => {
    expect(ts(k)).toEqual(arr[k]);
  });
});
const Number = Math.floor(Math.random() * 100);
test(`test max-h-${Number}`, () => {
  const keys = `max-h-${Number}`;
  const key = Object.keys(ts(keys))[0];
  expect(key).toBe('maxHeight');
  const display = ts(keys)[key];
  expect(display).toBe(Number * 2);
});
