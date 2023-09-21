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
  'border-solid': { borderStyle: 'solid' },
  'border-dashed': { borderStyle: 'dashed' },
  'border-dotted': { borderStyle: 'dotted' },
};
Object.keys(arr).forEach((k) => {
  test(`test ${JSON.stringify(arr[k])}`, () => {
    const key = Object.keys(ts(k))[0];
    expect(key).toBe('borderStyle');
    const display = ts(k)[key];
    expect(display).toBe(arr[k][key]);
  });
});
