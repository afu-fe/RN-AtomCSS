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

test('test flex-1', () => {
  const key = Object.keys(ts('flex-1'))[0];
  expect(key).toBe('flex');
  const display = ts('flex-1')[key];
  expect(display).toBe(1);
});

test('test flex-Number', () => {
  const Number = Math.floor(Math.random() * 100);
  const key = Object.keys(ts(`flex-${Number}`))[0];
  expect(key).toBe('flex');
  const display = ts(`flex-${Number}`)[key];
  expect(display).toBe(Number);
});
