// sum.test.js
import { expect, test } from 'vitest';
import { autoTailwind } from '../../src/index';

const ts = autoTailwind({
  // http://auto-rn-tail.terra.corpautohome.com/
  defaultStyles: {},
  extend: {
    height: {
      auto: 'auto',
    },
    color: {
      // 颜色拓展 // text bg  border 通用
      'blue-c1': '#E9F0FE',
    },
  },
});

const arr = {
  'h-full': { height: '100%' },
  'h-1/2': { height: '50%' },
  'h-1/3': { height: '33.33%' },
  'h-1/4': { height: '25%' },
};
Object.keys(arr).forEach((k) => {
  test(`test ${JSON.stringify(arr[k])}`, () => {
    expect(ts(k)).toEqual(arr[k]);
  });
});

const Number = Math.floor(Math.random() * 100);
test(`test h-${Number}`, () => {
  const keys = `h-${Number}`;
  const key = Object.keys(ts(keys))[0];
  expect(key).toBe('height');
  const display = ts(keys)[key];
  expect(display).toBe(Number * 2);
});
