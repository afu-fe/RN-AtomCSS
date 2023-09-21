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

// eslint-disable-next-line no-undef
const doubledNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((item) => {
  test(`test zIndex: ${item}`, () => {
    const key = Object.keys(ts(`z-${item}`))[0];
    expect(key).toBe('zIndex');
    const display = ts(`z-${item}`)[key];
    expect(display).toBe(item);
  });
  test(`test zIndex: -${item}`, () => {
    const key = Object.keys(ts(`-z-${item}`))[0];
    expect(key).toBe('zIndex');
    const display = ts(`-z-${item}`)[key];
    expect(display).toBe(-item);
  });
  return item;
});
