import { size } from '../config/index';

function offsetValue(value: string): number | null {
  if (value[0] === '[') {
    const parsed = parseFloat(value.slice(1, -1));
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

export function textShadowOffset(
  value: string,
  style: Record<string, any>,
): Record<string, any> | null {
  const configSize = size?.[value]; // 是否为固定变量
  if (Number.isFinite(configSize)) {
    style.textShadowOffset = {
      width: configSize,
      height: configSize,
    };
    return style;
  }

  if (value.includes('/')) {
    const [widthStr = '', heightStr = ''] = value.split('/', 2);
    const width = offsetValue(widthStr);
    const height = offsetValue(heightStr);

    if (width !== null && height !== null) {
      style.textShadowOffset = {
        width,
        height,
      };
      return style;
    }
  }

  const percentage = parseInt(value, 10);

  if (!Number.isNaN(percentage)) {
    style.textShadowOffset = {
      width: percentage,
      height: percentage,
    };
    return style;
  }

  const number = offsetValue(value);
  if (number !== null) {
    style.textShadowOffset = {
      width: number,
      height: number,
    };
    return style;
  }

  return null;
}

export function textShadowRadius(
  value: string,
  style: Record<string, any>,
): Record<string, any> | null {
  const configSize = size?.[value]; // 是否为固定变量
  if (Number.isFinite(configSize)) {
    style.textShadowRadius = configSize;
    return style;
  }

  const percentage = parseInt(value, 10);

  if (!Number.isNaN(percentage)) {
    style.textShadowRadius = percentage;
    return style;
  }

  const number = offsetValue(value);
  if (number !== null) {
    style.textShadowRadius = number;
    return style;
  }

  return null;
}
