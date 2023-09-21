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

test('test overflow: hidden', () => {
  const key = Object.keys(ts('hidden'))[0];
  expect(key).toBe('overflow');
  const display = ts('hidden')[key];
  expect(display).toBe('hidden');
});
test('test overflow: visible', () => {
  const key = Object.keys(ts('visible'))[0];
  expect(key).toBe('overflow');
  const display = ts('visible')[key];
  expect(display).toBe('visible');
});
test('test overflow: scroll', () => {
  const key = Object.keys(ts('scroll'))[0];
  expect(key).toBe('overflow');
  const display = ts('scroll')[key];
  expect(display).toBe('scroll');
});
