import { parseNumericValue } from '../utils';

const zIndexConfig: Record<string, number | 'auto'> = {
  auto: 'auto',
  '0': 0,
};

const insetArr: Record<string, string> = {
  auto: 'auto',
  '1/2': '50%',
  '1/3': '33.3%',
  '2/3': '66.6%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '-1/2': '-50%',
  '-1/3': '-33.3%',
  '-2/3': '-66.6%',
  '-1/4': '-25%',
  '-2/4': '-50%',
  '-3/4': '-75%',
  full: '100%',
};

type Inset = 'bottom' | 'top' | 'left' | 'right' | 'inset' | 'start';

const layoutConfig: Record<string, string> = {
  flex: 'flex',
  none: 'none',
  hidden: 'hidden',
  visible: 'visible',
  scroll: 'scroll',
  static: 'static',
  fixed: 'fixed',
  absolute: 'absolute',
  relative: 'relative',
  sticky: 'sticky',
};

export function zIndex(
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  const configSize = zIndexConfig?.[value]; // 是否为固定变量

  if (configSize !== undefined) {
    style.zIndex = configSize;
  } else {
    const parsedArbitrary = parseNumericValue(value);
    if (parsedArbitrary !== null) {
      style.zIndex = parsedArbitrary;
    }
  }

  return style;
}

export function layout(
  type: 'display' | 'overflow' | 'position',
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  const configSize = layoutConfig?.[value]; // 是否为固定变量

  if (configSize !== undefined) {
    style[type] = configSize;
  }

  return style;
}

export function insetBox(
  type: Inset,
  value: string,
  style: Record<string, any>,
): Record<string, any> | null {
  const configSize = insetArr?.[value]; // 是否为固定变量

  if (configSize !== undefined) {
    style[type] = configSize;
  } else {
    const parsedArbitrary = parseNumericValue(value);
    if (Number.isFinite(parsedArbitrary)) {
      style[type] = 2 * parsedArbitrary;
    } else {
      return null;
    }
  }

  return style;
}
