// sum.test.js
import { expect, test } from 'vitest';
import { autoTailwind } from '../../src/index';

import { colorbase } from '../../src/config/index';
import { addOpacity } from '../utils';

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
const colorArr = Object.keys(colorbase);
Object.keys(colorArr).forEach((k) => {
  test(`test text-${colorArr[k]}`, () => {
    const key = ts(`text-${colorArr[k]}`);
    const v = colorbase[colorArr[k]];
    const color =
      v === 'transparent'
        ? { color: 'transparent' }
        : { color: addOpacity(v, 1) };
    expect(key).toEqual(color);
  });
});

test(`test text-blue-c1`, () => {
  const key = ts(`text-blue-c1-50`);
  const v = '#E9F0FE';
  const color = { color: addOpacity(v, 0.5) };
  expect(key).toEqual(color);
});
