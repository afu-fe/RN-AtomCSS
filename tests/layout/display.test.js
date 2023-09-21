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

test('test display: flex', () => {
  const key = Object.keys(ts('flex'))[0];
  expect(key).toBe('display');
  const display = ts('flex')[key];
  expect(display).toBe('flex');
});
test('test display: none', () => {
  const key = Object.keys(ts('none'))[0];
  expect(key).toBe('display');
  const display = ts('none')[key];
  expect(display).toBe('none');
});
