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

// arr 去重
const arr = {
  'rounded-none': { borderRadius: 0 },
  'rounded-sm': { borderRadius: 2 },
  'rounded-normal': { borderRadius: 4 },
  'rounded-md': { borderRadius: 6 },
  'rounded-lg': { borderRadius: 8 },
  'rounded-xl': { borderRadius: 12 },
  'rounded-2xl': { borderRadius: 16 },
  'rounded-3xl': { borderRadius: 24 },
  'rounded-4xl': { borderRadius: 32 },
  'rounded-full': { borderRadius: 9999 },
  'rounded-t-none': { borderTopLeftRadius: 0, borderTopRightRadius: 0 },
  'rounded-r-none': { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
  'rounded-b-none': { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
  'rounded-l-none': { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
  'rounded-t-sm': { borderTopLeftRadius: 2, borderTopRightRadius: 2 },
  'rounded-r-sm': { borderTopRightRadius: 2, borderBottomRightRadius: 2 },
  'rounded-b-sm': { borderBottomRightRadius: 2, borderBottomLeftRadius: 2 },
  'rounded-l-sm': { borderTopLeftRadius: 2, borderBottomLeftRadius: 2 },
  'rounded-t-normal': { borderTopLeftRadius: 4, borderTopRightRadius: 4 },
  'rounded-r-normal': { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
  'rounded-b-normal': { borderBottomRightRadius: 4, borderBottomLeftRadius: 4 },
  'rounded-l-normal': { borderTopLeftRadius: 4, borderBottomLeftRadius: 4 },
  'rounded-t-md': { borderTopLeftRadius: 6, borderTopRightRadius: 6 },
  'rounded-r-md': { borderTopRightRadius: 6, borderBottomRightRadius: 6 },
  'rounded-b-md': { borderBottomRightRadius: 6, borderBottomLeftRadius: 6 },
  'rounded-l-md': { borderTopLeftRadius: 6, borderBottomLeftRadius: 6 },
  'rounded-t-lg': { borderTopLeftRadius: 8, borderTopRightRadius: 8 },
  'rounded-r-lg': { borderTopRightRadius: 8, borderBottomRightRadius: 8 },
  'rounded-b-lg': { borderBottomRightRadius: 8, borderBottomLeftRadius: 8 },
  'rounded-l-lg': { borderTopLeftRadius: 8, borderBottomLeftRadius: 8 },
  'rounded-t-xl': { borderTopLeftRadius: 12, borderTopRightRadius: 12 },
  'rounded-r-xl': { borderTopRightRadius: 12, borderBottomRightRadius: 12 },
  'rounded-b-xl': { borderBottomRightRadius: 12, borderBottomLeftRadius: 12 },
  'rounded-l-xl': { borderTopLeftRadius: 12, borderBottomLeftRadius: 12 },
  'rounded-t-2xl': { borderTopLeftRadius: 16, borderTopRightRadius: 16 },
  'rounded-r-2xl': { borderTopRightRadius: 16, borderBottomRightRadius: 16 },
  'rounded-b-2xl': { borderBottomRightRadius: 16, borderBottomLeftRadius: 16 },
  'rounded-l-2xl': { borderTopLeftRadius: 16, borderBottomLeftRadius: 16 },
  'rounded-t-3xl': { borderTopLeftRadius: 24, borderTopRightRadius: 24 },
  'rounded-r-3xl': { borderTopRightRadius: 24, borderBottomRightRadius: 24 },
  'rounded-b-3xl': { borderBottomRightRadius: 24, borderBottomLeftRadius: 24 },
  'rounded-l-3xl': { borderTopLeftRadius: 24, borderBottomLeftRadius: 24 },
  'rounded-t-4xl': { borderTopLeftRadius: 32, borderTopRightRadius: 32 },
  'rounded-r-4xl': { borderTopRightRadius: 32, borderBottomRightRadius: 32 },
  'rounded-b-4xl': { borderBottomRightRadius: 32, borderBottomLeftRadius: 32 },
  'rounded-l-4xl': { borderTopLeftRadius: 32, borderBottomLeftRadius: 32 },
  'rounded-t-full': { borderTopLeftRadius: 9999, borderTopRightRadius: 9999 },
  'rounded-r-full': {
    borderTopRightRadius: 9999,
    borderBottomRightRadius: 9999,
  },
  'rounded-b-full': {
    borderBottomRightRadius: 9999,
    borderBottomLeftRadius: 9999,
  },
  'rounded-l-full': { borderTopLeftRadius: 9999, borderBottomLeftRadius: 9999 },
  'rounded-tl-none': { borderTopLeftRadius: 0 },
  'rounded-tr-none': { borderTopRightRadius: 0 },
  'rounded-br-none': { borderBottomRightRadius: 0 },
  'rounded-bl-none': { borderBottomLeftRadius: 0 },
  'rounded-tl-sm': { borderTopLeftRadius: 2 },
  'rounded-tr-sm': { borderTopRightRadius: 2 },
  'rounded-br-sm': { borderBottomRightRadius: 2 },
  'rounded-bl-sm': { borderBottomLeftRadius: 2 },
  'rounded-tl-normal': { borderTopLeftRadius: 4 },
  'rounded-tr-normal': { borderTopRightRadius: 4 },
  'rounded-br-normal': { borderBottomRightRadius: 4 },
  'rounded-bl-normal': { borderBottomLeftRadius: 4 },
  'rounded-tl-md': { borderTopLeftRadius: 6 },
  'rounded-tr-md': { borderTopRightRadius: 6 },
  'rounded-br-md': { borderBottomRightRadius: 6 },
  'rounded-bl-md': { borderBottomLeftRadius: 6 },
  'rounded-tl-lg': { borderTopLeftRadius: 8 },
  'rounded-tr-lg': { borderTopRightRadius: 8 },
  'rounded-br-lg': { borderBottomRightRadius: 8 },
  'rounded-bl-lg': { borderBottomLeftRadius: 8 },
  'rounded-tl-xl': { borderTopLeftRadius: 12 },
  'rounded-tr-xl': { borderTopRightRadius: 12 },
  'rounded-br-xl': { borderBottomRightRadius: 12 },
  'rounded-bl-xl': { borderBottomLeftRadius: 12 },
  'rounded-tl-2xl': { borderTopLeftRadius: 16 },
  'rounded-tr-2xl': { borderTopRightRadius: 16 },
  'rounded-br-2xl': { borderBottomRightRadius: 16 },
  'rounded-bl-2xl': { borderBottomLeftRadius: 16 },
  'rounded-tl-3xl': { borderTopLeftRadius: 24 },
  'rounded-tr-3xl': { borderTopRightRadius: 24 },
  'rounded-br-3xl': { borderBottomRightRadius: 24 },
  'rounded-bl-3xl': { borderBottomLeftRadius: 24 },
  'rounded-tl-4xl': { borderTopLeftRadius: 32 },
  'rounded-tr-4xl': { borderTopRightRadius: 32 },
  'rounded-br-4xl': { borderBottomRightRadius: 32 },
  'rounded-bl-4xl': { borderBottomLeftRadius: 32 },
  'rounded-tl-full': { borderTopLeftRadius: 9999 },
  'rounded-tr-full': { borderTopRightRadius: 9999 },
  'rounded-br-full': { borderBottomRightRadius: 9999 },
  'rounded-bl-full': { borderBottomLeftRadius: 9999 },
};
Object.keys(arr).forEach((k) => {
  test(`test ${JSON.stringify(arr[k])}`, () => {
    expect(ts(k)).toEqual(arr[k]);
  });
});

const Number = Math.floor(Math.random() * 100);
test(`test rounded-${Number}`, () => {
  const key = ts(`rounded-${Number}`);
  expect(key).toEqual({ borderRadius: Number * 2 });
});

test(`test rounded-t-${Number}`, () => {
  const key = ts(`rounded-t-${Number}`);
  expect(key).toEqual({
    borderTopLeftRadius: Number * 2,
    borderTopRightRadius: Number * 2,
  });
});

test(`test rounded-b-${Number}`, () => {
  const key = ts(`rounded-b-${Number}`);
  expect(key).toEqual({
    borderBottomLeftRadius: Number * 2,
    borderBottomRightRadius: Number * 2,
  });
});

test(`test rounded-l-${Number}`, () => {
  const key = ts(`rounded-l-${Number}`);
  expect(key).toEqual({
    borderTopLeftRadius: Number * 2,
    borderBottomLeftRadius: Number * 2,
  });
});

test(`test rounded-r-${Number}`, () => {
  const key = ts(`rounded-r-${Number}`);
  expect(key).toEqual({
    borderTopRightRadius: Number * 2,
    borderBottomRightRadius: Number * 2,
  });
});

test(`test rounded-tl-${Number}`, () => {
  const key = ts(`rounded-tl-${Number}`);
  expect(key).toEqual({ borderTopLeftRadius: Number * 2 });
});

test(`test rounded-tr-${Number}`, () => {
  const key = ts(`rounded-tr-${Number}`);
  expect(key).toEqual({ borderTopRightRadius: Number * 2 });
});

test(`test rounded-br-${Number}`, () => {
  const key = ts(`rounded-br-${Number}`);
  expect(key).toEqual({ borderBottomRightRadius: Number * 2 });
});

test(`test rounded-bl-${Number}`, () => {
  const key = ts(`rounded-bl-${Number}`);
  expect(key).toEqual({ borderBottomLeftRadius: Number * 2 });
});

test(`test rounded-be-${Number}`, () => {
  const key = ts(`rounded-be-${Number}`);
  expect(key).toEqual({ borderBottomEndRadius: Number * 2 });
});

test(`test rounded-bs-${Number}`, () => {
  const key = ts(`rounded-bs-${Number}`);
  expect(key).toEqual({ borderBottomStartRadius: Number * 2 });
});

test(`test rounded-te-${Number}`, () => {
  const key = ts(`rounded-te-${Number}`);
  expect(key).toEqual({ borderTopEndRadius: Number * 2 });
});

test(`test rounded-ts-${Number}`, () => {
  const key = ts(`rounded-ts-${Number}`);
  expect(key).toEqual({ borderTopStartRadius: Number * 2 });
});
