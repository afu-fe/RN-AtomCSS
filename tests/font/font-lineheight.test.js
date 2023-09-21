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
  'leading-none': { lineHeight: 16 },
  'leading-tight': { lineHeight: 20 },
  'leading-snug': { lineHeight: 22 },
  'leading-normal': { lineHeight: 24 },
  'leading-relaxed': { lineHeight: 26 },
  'leading-loose': { lineHeight: 32 },
};
Object.keys(arr).forEach((k) => {
  test(`test ${JSON.stringify(arr[k])}`, () => {
    expect(ts(k)).toEqual(arr[k]);
  });
});

const Number = Math.floor(Math.random() * 100);
test(`test leading-${Number}`, () => {
  const keys = `leading-${Number}`;
  const key = Object.keys(ts(keys))[0];
  expect(key).toBe('lineHeight');
  const display = ts(keys)[key];
  expect(display).toBe(Number * 2);
});
