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
  'shadow-offset-1': { shadowOffset: { width: 1, height: 1 } },
  'shadow-offset-xs': { shadowOffset: { width: 12, height: 12 } },
  'shadow-offset-[333]': { shadowOffset: { width: 333, height: 333 } },
  'shadow-offset-[23]/[33]': { shadowOffset: { width: 23, height: 33 } },
};
Object.keys(arr).forEach((k) => {
  test(`test ${JSON.stringify(arr[k])}`, () => {
    expect(ts(k)).toEqual(arr[k]);
  });
});
