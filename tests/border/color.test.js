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
  test(`test border-${colorArr[k]}`, () => {
    const key = ts(`border-${colorArr[k]}`);
    const v = colorbase[colorArr[k]];
    const color =
      v === 'transparent'
        ? { borderColor: 'transparent' }
        : { borderColor: addOpacity(v, 1) };
    expect(key).toEqual(color);
  });
  test(`test border-t-${colorArr[k]}`, () => {
    const key = ts(`border-t-${colorArr[k]}`);
    const v = colorbase[colorArr[k]];
    expect(key).toEqual({
      borderTopColor: v === 'transparent' ? 'transparent' : addOpacity(v, 1),
    });
  });

  test(`test border-l-${colorArr[k]}`, () => {
    const key = ts(`border-l-${colorArr[k]}`);
    const v = colorbase[colorArr[k]];
    expect(key).toEqual({
      borderLeftColor: v === 'transparent' ? 'transparent' : addOpacity(v, 1),
    });
  });

  test(`test border-r-${colorArr[k]}`, () => {
    const key = ts(`border-r-${colorArr[k]}`);
    const v = colorbase[colorArr[k]];
    expect(key).toEqual({
      borderRightColor: v === 'transparent' ? 'transparent' : addOpacity(v, 1),
    });
  });
  test(`test border-b-${colorArr[k]}`, () => {
    const key = ts(`border-b-${colorArr[k]}`);
    const v = colorbase[colorArr[k]];
    expect(key).toEqual({
      borderBottomColor: v === 'transparent' ? 'transparent' : addOpacity(v, 1),
    });
  });
  test(`test border-s-${colorArr[k]}`, () => {
    const key = ts(`border-s-${colorArr[k]}`);
    const v = colorbase[colorArr[k]];
    expect(key).toEqual({
      borderStartColor: v === 'transparent' ? 'transparent' : addOpacity(v, 1),
    });
  });
  test(`test border-e-${colorArr[k]}`, () => {
    const key = ts(`border-e-${colorArr[k]}`);
    const v = colorbase[colorArr[k]];
    expect(key).toEqual({
      borderEndColor: v === 'transparent' ? 'transparent' : addOpacity(v, 1),
    });
  });
});

test(`test border-blue-c1`, () => {
  const key = ts(`border-blue-c1-50`);
  const v = '#E9F0FE';
  const color = { borderColor: addOpacity(v, 0.5) };
  expect(key).toEqual(color);
});
