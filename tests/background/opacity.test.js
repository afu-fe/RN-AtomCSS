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
  'bg-opacity-0': { opacity: 0 },
  'bg-opacity-5': { opacity: 0.05 },
  'bg-opacity-10': { opacity: 0.1 },
  'bg-opacity-15': { opacity: 0.15 },
  'bg-opacity-20': { opacity: 0.2 },
  'bg-opacity-25': { opacity: 0.25 },
  'bg-opacity-30': { opacity: 0.3 },
  'bg-opacity-35': { opacity: 0.35 },
  'bg-opacity-40': { opacity: 0.4 },
  'bg-opacity-45': { opacity: 0.45 },
  'bg-opacity-50': { opacity: 0.5 },
  'bg-opacity-55': { opacity: 0.55 },
  'bg-opacity-60': { opacity: 0.6 },
  'bg-opacity-65': { opacity: 0.65 },
  'bg-opacity-70': { opacity: 0.7 },
  'bg-opacity-75': { opacity: 0.75 },
  'bg-opacity-80': { opacity: 0.8 },
  'bg-opacity-85': { opacity: 0.85 },
  'bg-opacity-90': { opacity: 0.9 },
  'bg-opacity-100': { opacity: 1 },
};
Object.keys(arr).forEach((k) => {
  test(`test ${JSON.stringify(arr[k])}`, () => {
    const key = Object.keys(ts(k))[0];
    expect(key).toBe('opacity');
    const display = ts(k)[key];
    expect(display).toBe(arr[k][key]);
  });
});

const Number = Math.floor(Math.random() * 100);
test(`test bg-opacity-${Number}`, () => {
  const keys = `bg-opacity-${Number}`;
  const key = Object.keys(ts(keys))[0];
  expect(key).toBe('opacity');
  const display = ts(keys)[key];
  expect(display).toBe(Number / 100);
});
