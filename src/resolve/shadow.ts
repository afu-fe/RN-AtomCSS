import { size } from '../config/index';

function offsetValue(value: string): number | null {
  if (value[0] === '[') {
    const parsed = parseFloat(value.slice(1, -1));
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

export function shadowOffset(
  value: string,
  style: Record<string, any>,
): Record<string, any> | null {
  const configSize = size?.[value]; // 是否为固定变量

  if (Number.isFinite(configSize)) {
    style.shadowOffset = {
      width: configSize,
      height: configSize,
    };
  } else if (value.includes('/')) {
    const [widthStr = '', heightStr = ''] = value.split('/', 2);
    const width = offsetValue(widthStr);
    const height = offsetValue(heightStr);

    if (width !== null && height !== null) {
      style.shadowOffset = {
        width,
        height,
      };
    } else {
      return null;
    }
  } else {
    const percentage = parseInt(value, 10);

    if (!Number.isNaN(percentage)) {
      style.shadowOffset = {
        width: percentage,
        height: percentage,
      };
    } else {
      const number = offsetValue(value);
      if (number === null) {
        return null;
      }
      style.shadowOffset = {
        width: number,
        height: number,
      };
    }
  }

  return style;
}

export function shadowOpacity(
  value: string,
  style: Record<string, any>,
): Record<string, any> | null {
  const configSize = size?.[value]; // 是否为固定变量

  if (Number.isFinite(configSize)) {
    style.shadowOpacity = configSize / 100;
  } else {
    const percentage = parseInt(value, 10);

    if (!Number.isNaN(percentage)) {
      style.shadowOpacity = percentage / 100;
    } else {
      return null;
    }
  }

  return style;
}

export function shadowRadius(
  value: string,
  style: Record<string, any>,
): Record<string, any> | null {
  const configSize = size?.[value]; // 是否为固定变量

  if (Number.isFinite(configSize)) {
    style.shadowRadius = configSize;
  } else {
    const percentage = parseInt(value, 10);

    if (!Number.isNaN(percentage)) {
      style.shadowRadius = percentage;
    } else {
      const number = offsetValue(value);
      if (number === null) {
        return null;
      }
      style.shadowRadius = number;
    }
  }

  return style;
}
