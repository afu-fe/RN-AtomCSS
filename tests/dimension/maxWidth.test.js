// sum.test.js
import { expect, test } from 'vitest';
import { autoTailwind } from '../../src/index';

const ts = autoTailwind({
  // http://auto-rn-tail.terra.corpautohome.com/
  defaultStyles: {},
  extend: {
    maxWidth: {
      auto: 'auto',
    },
    color: {
      // 颜色拓展 // text bg  border 通用
      'blue-c1': '#E9F0FE',
    },
  },
});

const arr = {
  'max-w-full': { maxWidth: '100%' },
  'max-w-1/2': { maxWidth: '50%' },
  'max-w-1/3': { maxWidth: '33.33%' },
  'max-w-1/4': { maxWidth: '25%' },
};
Object.keys(arr).forEach((k) => {
  test(`test ${JSON.stringify(arr[k])}`, () => {
    expect(ts(k)).toEqual(arr[k]);
  });
});
const Number = Math.floor(Math.random() * 100);
test(`test max-w-${Number}`, () => {
  const keys = `max-w-${Number}`;
  const key = Object.keys(ts(keys))[0];
  expect(key).toBe('maxWidth');
  const display = ts(keys)[key];
  expect(display).toBe(Number * 2);
});
