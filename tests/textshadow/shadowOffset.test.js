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
  'text-shadow-offset-1': { textShadowOffset: { width: 1, height: 1 } },
  'text-shadow-offset-xs': { textShadowOffset: { width: 12, height: 12 } },
  'text-shadow-offset-[333]': { textShadowOffset: { width: 333, height: 333 } },
  'text-shadow-offset-[23]/[33]': {
    textShadowOffset: { width: 23, height: 33 },
  },
};
Object.keys(arr).forEach((k) => {
  test(`test ${JSON.stringify(arr[k])}`, () => {
    expect(ts(k)).toEqual(arr[k]);
  });
});
