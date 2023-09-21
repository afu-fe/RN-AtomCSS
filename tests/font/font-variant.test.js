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
  's-caps': { fontVariant: 'small-caps' },
  'o-nums': { fontVariant: 'oldstyle-nums' },
  'l-nums': { fontVariant: 'lining-nums' },
  't-nums': { fontVariant: 'tabular-nums' },
  'p-nums': { fontVariant: 'proportional-nums' },
};
Object.keys(arr).forEach((k) => {
  test(`test ${JSON.stringify(arr[k])}`, () => {
    expect(ts(k)).toEqual(arr[k]);
  });
});
