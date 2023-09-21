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
  'content-start': { alignContent: 'flex-start' },
  'content-end': { alignContent: 'flex-end' },
  'content-center': { alignContent: 'center' },
  'content-between': { alignContent: 'space-between' },
  'content-around': { alignContent: 'space-around' },
  // "content-evenly":{alignContent: 'space-evenly'}
};
Object.keys(arr).forEach((k) => {
  test(`test ${JSON.stringify(arr[k])}`, () => {
    expect(ts(k)).toEqual(arr[k]);
  });
});
