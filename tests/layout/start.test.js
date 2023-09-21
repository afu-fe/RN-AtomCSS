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

test('test start-1/2', () => {
  const key = Object.keys(ts('start-1/2'))[0];
  expect(key).toBe('start');
  const display = ts('start-1/2')[key];
  expect(display).toBe('50%');
});

test('test start-1/3', () => {
  const key = Object.keys(ts('start-1/3'))[0];
  expect(key).toBe('start');
  const display = ts('start-1/3')[key];
  expect(display).toBe('33.3%');
});

test('test start-2/3', () => {
  const key = Object.keys(ts('start-2/3'))[0];
  expect(key).toBe('start');
  const display = ts('start-2/3')[key];
  expect(display).toBe('66.6%');
});

test('test start-1/4', () => {
  const key = Object.keys(ts('start-1/4'))[0];
  expect(key).toBe('start');
  const display = ts('start-1/4')[key];
  expect(display).toBe('25%');
});

test('test start-2/4', () => {
  const key = Object.keys(ts('start-2/4'))[0];
  expect(key).toBe('start');
  const display = ts('start-2/4')[key];
  expect(display).toBe('50%');
});

test('test start-3/4', () => {
  const key = Object.keys(ts('start-3/4'))[0];
  expect(key).toBe('start');
  const display = ts('start-3/4')[key];
  expect(display).toBe('75%');
});

test('test start-full', () => {
  const key = Object.keys(ts('start-full'))[0];
  expect(key).toBe('start');
  const display = ts('start-full')[key];
  expect(display).toBe('100%');
});

test('test start-Number', () => {
  const Number = Math.random() * 100;
  const keys = `start-${Number}`;
  const key = Object.keys(ts(keys))[0];
  expect(key).toBe('start');
  const display = ts(keys)[key];
  expect(display).toBe(Number * 2);
});

test('test -start-1/3', () => {
  const key = Object.keys(ts('-start-1/3'))[0];
  expect(key).toBe('start');
  const display = ts('-start-1/3')[key];
  expect(display).toBe('-33.3%');
});

test('test -start-2/3', () => {
  const key = Object.keys(ts('-start-2/3'))[0];
  expect(key).toBe('start');
  const display = ts('-start-2/3')[key];
  expect(display).toBe('-66.6%');
});

test('test -start-1/4', () => {
  const key = Object.keys(ts('-start-1/4'))[0];
  expect(key).toBe('start');
  const display = ts('-start-1/4')[key];
  expect(display).toBe('-25%');
});

test('test -start-2/4', () => {
  const key = Object.keys(ts('-start-2/4'))[0];
  expect(key).toBe('start');
  const display = ts('-start-2/4')[key];
  expect(display).toBe('-50%');
});

test('test -start-3/4', () => {
  const key = Object.keys(ts('-start-3/4'))[0];
  expect(key).toBe('start');
  const display = ts('-start-3/4')[key];
  expect(display).toBe('-75%');
});
