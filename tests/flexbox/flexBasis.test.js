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
  'flex-basis-0': { flexBasis: 0 },
  'basis-0': { flexBasis: 0 },
  'flex-basis-1': { flexBasis: 4 },
  'basis-1': { flexBasis: 4 },
  'flex-basis-2': { flexBasis: 8 },
  'flex-basis-1/2': { flexBasis: '50%' },
  'flex-basis-1/3': { flexBasis: '33.33%' },
  'flex-basis-auto': { flexBasis: 'auto' },
  'flex-basis-full': { flexBasis: '100%' },
};
Object.keys(arr).forEach((k) => {
  test(`test ${JSON.stringify(arr[k])}`, () => {
    expect(ts(k)).toEqual(arr[k]);
  });
});
