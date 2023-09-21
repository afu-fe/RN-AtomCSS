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
  'elevation-0': { elevation: 0 },
  'elevation-5': { elevation: 5 },
  'elevation-10': { elevation: 10 },
  'elevation-15': { elevation: 15 },
  'elevation-20': { elevation: 20 },
  'elevation-25': { elevation: 25 },
  'elevation-30': { elevation: 30 },
  'elevation-35': { elevation: 35 },
  'elevation-40': { elevation: 40 },
  'elevation-45': { elevation: 45 },
  'elevation-50': { elevation: 50 },
  'elevation-55': { elevation: 55 },
  'elevation-60': { elevation: 60 },
  'elevation-65': { elevation: 65 },
  'elevation-70': { elevation: 70 },
  'elevation-75': { elevation: 75 },
  'elevation-80': { elevation: 80 },
  'elevation-85': { elevation: 85 },
  'elevation-90': { elevation: 90 },
  'elevation-100': { elevation: 100 },
};
Object.keys(arr).forEach((k) => {
  test(`test ${JSON.stringify(arr[k])}`, () => {
    expect(ts(k)).toEqual(arr[k]);
  });
});

const Number = Math.floor(Math.random() * 100);
test(`test elevation-${Number}`, () => {
  const keys = `elevation-${Number}`;
  const key = Object.keys(ts(keys))[0];
  expect(key).toBe('elevation');
  const display = ts(keys)[key];
  expect(display).toBe(Number);
});
