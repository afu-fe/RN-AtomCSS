const fontFamilyUtil: Record<string, string> = {
  light: 'PingFangSC-Light',
  regular: 'PingFangSC-Regular',
  medium: 'PingFangSC-Medium',
  din: 'DINAlternate-Bold',
  semibold: 'PingFangSC-Semibold',
};

function parseNumericValue(value: string | number | undefined): number | null {
  const number = parseFloat(value as string);
  if (Number.isNaN(number)) {
    return null;
  }
  const match = (value as string).match(/(([a-z]{2,}|%))$/);
  if (!match) {
    return number;
  }
  return null; // You may want to return a default value here or handle this case differently.
}

const DIR_MAP: Record<string, string> = {
  t: 'Top',
  tr: 'TopRight',
  tl: 'TopLeft',
  b: 'Bottom',
  br: 'BottomRight',
  bl: 'BottomLeft',
  l: 'Left',
  r: 'Right',
  x: 'Horizontal',
  y: 'Vertical',
  te: 'TopEnd',
  ts: 'TopStart',
  be: 'BottomEnd',
  bs: 'BottomStart',
  e: 'End',
  s: 'Start',
};

export function getDirection(string: string | null | undefined): string {
  return DIR_MAP[string ?? ''] || 'All';
}

export function parseAndConsumeDirection(
  utilityFragment: string,
): [string, string] {
  let direction = 'All';
  const consumed = utilityFragment.replace(
    /^-(t|b|r|l|tr|tl|br|bl|te|ts|be|bs|e|s)(-|$)/,
    (_, dir) => {
      direction = getDirection(dir);
      return '';
    },
  );
  return [consumed, direction];
}

export function consumePeeked(
  ele: string | null | undefined,
  str: string,
): boolean {
  return ele && ele.indexOf(str) === 0;
}

export function hexToRgba(h: string): string {
  const MATCH_SHORT_HEX = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const MATCH_FULL_HEX = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  let hex = h.replace(MATCH_SHORT_HEX, (_, r, g, b) => r + r + g + g + b + b);
  const result = MATCH_FULL_HEX.exec(hex);
  if (!result) {
    return 'rgba(0, 0, 0, 1)';
  }
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  return `rgba(${r}, ${g}, ${b}, 1)`;
}

export function addOpacity(color: string, opacity: number): string {
  let c = color;
  if (color.startsWith('#')) {
    c = hexToRgba(color);
  } else if (color.startsWith('rgb(')) {
    c = color.replace(/^rgb\(/, 'rgba(').replace(/\)$/, ',1)');
  } else if (color === 'transparent') {
    return c;
  }
  return c.replace(/, ?\d*\.?(\d+)\)$/, `,${opacity})`);
}

type Direction =
  | 'All'
  | 'Horizontal'
  | 'Vertical'
  | 'Left'
  | 'Right'
  | 'Top'
  | 'TopLeft'
  | 'TopRight'
  | 'Bottom'
  | 'BottomLeft'
  | 'BottomRight';

export { Direction, fontFamilyUtil, parseNumericValue };
