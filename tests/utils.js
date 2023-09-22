const fontFamilyUtil = {
  light: 'PingFangSC-Light',
  regular: 'PingFangSC-Regular',
  medium: 'PingFangSC-Medium',
  din: 'DINAlternate-Bold',
  semibold: 'PingFangSC-Semibold',
};
const parseNumericValue = function (value) {
  const number = parseFloat(value);
  if (Number.isNaN(number)) {
    return null;
  }
  const match = value.match(/(([a-z]{2,}|%))$/);
  if (!match) {
    return number;
  }
};

const DIR_MAP = {
  t: `Top`,
  tr: `TopRight`,
  tl: `TopLeft`,
  b: `Bottom`,
  br: `BottomRight`,
  bl: `BottomLeft`,
  l: `Left`,
  r: `Right`,
  x: `Horizontal`,
  y: `Vertical`,
  te: 'TopEnd',
  ts: 'TopStart',
  be: 'BottomEnd',
  bs: 'BottomStart',
  e: 'End',
  s: 'Start',
};

export function getDirection(string) {
  return DIR_MAP[string ?? ``] || `All`;
}

export function parseAndConsumeDirection(utilityFragment) {
  let direction = 'All';
  const consumed = utilityFragment.replace(
    /^-(t|b|r|l|tr|tl|br|bl|te|ts|be|bs|e|s)(-|$)/,
    (_, dir) => {
      direction = getDirection(dir);
      return ``;
    },
  );
  return [consumed, direction];
}

export function consumePeeked(ele, str) {
  // 截断字符串
  return ele && ele.indexOf(str) === 0;
}
export function hexToRgba(h) {
  const MATCH_SHORT_HEX = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const MATCH_FULL_HEX = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  let hex = h.replace(MATCH_SHORT_HEX, (_, r, g, b) => r + r + g + g + b + b);
  const result = MATCH_FULL_HEX.exec(hex);
  if (!result) {
    return `rgba(0, 0, 0, 1)`;
  }
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  return `rgba(${r}, ${g}, ${b}, 1)`;
}
export function addOpacity(color, opacity) {
  let c = color;
  if (color.startsWith(`#`)) {
    c = hexToRgba(color);
  } else if (color.startsWith(`rgb(`)) {
    c = color.replace(/^rgb\(/, `rgba(`).replace(/\)$/, `,1)`);
  } else if (color === 'transparent') {
    return c;
  }
  return c.replace(/, ?\d*\.?(\d+)\)$/, `,${opacity})`);
}
const Direction =
  'All' |
  'Horizontal' |
  'Vertical' |
  'Left' |
  'Right' |
  'Top' |
  'TopLeft' |
  'TopRight' |
  'Bottom' |
  'BottomLeft' |
  'BottomRight';
export { Direction, fontFamilyUtil, parseNumericValue };
