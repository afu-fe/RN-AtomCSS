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

const Number = Math.floor(Math.random() * 100);
test(`test border-${Number}`, () => {
  const keys = `border-${Number}`;
  const key = Object.keys(ts(keys))[0];
  expect(key).toBe('borderWidth');
  const display = ts(keys)[key];
  expect(display).toBe(Number);
});

test(`test border-t-${Number}`, () => {
  const keys = `border-t-${Number}`;
  const key = Object.keys(ts(keys))[0];
  expect(key).toBe('borderTopWidth');
  const display = ts(keys)[key];
  expect(display).toBe(Number);
});

test(`test border-b-${Number}`, () => {
  const keys = `border-b-${Number}`;
  const key = Object.keys(ts(keys))[0];
  expect(key).toBe('borderBottomWidth');
  const display = ts(keys)[key];
  expect(display).toBe(Number);
});
test(`test border-l-${Number}`, () => {
  const keys = `border-l-${Number}`;
  const key = Object.keys(ts(keys))[0];
  expect(key).toBe('borderLeftWidth');
  const display = ts(keys)[key];
  expect(display).toBe(Number);
});
test(`test border-r-${Number}`, () => {
  const keys = `border-r-${Number}`;
  const key = Object.keys(ts(keys))[0];
  expect(key).toBe('borderRightWidth');
  const display = ts(keys)[key];
  expect(display).toBe(Number);
});
