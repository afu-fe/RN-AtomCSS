import { fontWeight, fontfamily, size } from '../config/index';

const textDecorationLineConfig: Record<string, string> = {
  'textdl-none': 'none',
  'textdl-unline': 'underline',
  'textdl-line': 'line-through',
  'textdl-unlineline': 'underline line-through',
};

const fontVariantConfig: Record<string, string> = {
  's-caps': 'small-caps',
  'o-nums': 'oldstyle-nums',
  'l-nums': 'lining-nums',
  't-nums': 'tabular-nums',
  'p-nums': 'proportional-nums',
};

export function font(
  type: 'text' | 'font',
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  const configSize = size?.[value]; // 是否为固定变量
  if (Number.isFinite(configSize) && type === 'text') {
    style[`fontSize`] = configSize;
  }
  const configWeight = fontWeight?.[value]; // 是否为固定变量
  if (configWeight !== undefined && type === 'font') {
    style[`fontWeight`] = `${configWeight}`;
  }
  const v = parseFloat(value);
  if (Number.isFinite(v) && type === 'text') {
    // 是否为数字
    style[`fontSize`] = 2 * v;
  }
  if ([`left`, `center`, `right`, `justify`].includes(value)) {
    // 字体偏移
    style['textAlign'] = value;
  }
  return style;
}

export function fontverticalAlign(
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  if (
    ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom'].includes(
      value,
    )
  ) {
    style.verticalAlign = value;
  }

  return style;
}

export function textAlignVertical(
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  if (['top', 'center', 'bottom', 'auto'].includes(value)) {
    style.textAlignVertical = value;
  }

  return style;
}

export function textDecorationLine(
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  const configSize = textDecorationLineConfig?.[value];

  if (configSize) {
    style.textDecorationLine = configSize;
  }

  return style;
}

export function fontVariant(
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  const configSize = fontVariantConfig?.[value];

  if (configSize) {
    style.fontVariant = configSize;
  }

  return style;
}

export function fontFamily(
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  if (['regular', 'light', 'medium', 'din', 'semibold'].includes(value)) {
    style.fontFamily = fontfamily[value];
  }

  return style;
}

export function fontStyle(
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  switch (value) {
    case 'italic':
      style.fontStyle = value;
      break;
    case 'not-italic':
      style.fontStyle = 'normal';
      break;
    case 'includeFontPadding':
    case 'remove-font-padding':
      style['includeFontPadding'] = false;
      break;
    case 'include-font-padding':
      style['includeFontPadding'] = true;
      break;
    case 'backface-visible':
    case 'backface-hidden':
      style.backfaceVisibility =
        value === 'backface-visible' ? 'visible' : 'hidden';
      break;
  }

  return style;
}

export function writingDirection(
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  if (['auto', 'ltr', 'rtl'].includes(value)) {
    style.writingDirection = value;
  }

  return style;
}

export function textTransform(
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  switch (value) {
    case 'uppercase':
    case 'lowercase':
    case 'capitalize':
      style.textTransform = value;
      break;
    case 'normal-case':
      style.textTransform = 'none';
      break;
  }

  return style;
}

export function lineHeight(
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  const configSize = size?.[value];

  if (Number.isFinite(configSize)) {
    style.lineHeight = configSize;
  } else {
    const v = parseFloat(value);
    if (Number.isFinite(v)) {
      style.lineHeight = 2 * v;
    }
  }

  return style;
}

export function textDecorationStyle(
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  style.textDecorationStyle = value;
  return style;
}
