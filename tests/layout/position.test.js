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

test('test position: static', () => {
  const key = Object.keys(ts('static'))[0];
  expect(key).toBe('position');
  const display = ts('static')[key];
  expect(display).toBe('static');
});

test('test position: absolute', () => {
  const key = Object.keys(ts('absolute'))[0];
  expect(key).toBe('position');
  const display = ts('absolute')[key];
  expect(display).toBe('absolute');
});

test('test position: relative', () => {
  const key = Object.keys(ts('relative'))[0];
  expect(key).toBe('position');
  const display = ts('relative')[key];
  expect(display).toBe('relative');
});
