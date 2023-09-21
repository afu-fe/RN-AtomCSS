import { size } from '../config/index';

export function letterSpacing(
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  const configSize = size?.[value]; // 是否为固定变量

  if (Number.isFinite(configSize)) {
    style.letterSpacing = configSize;
  } else {
    const v = parseFloat(value);
    if (Number.isFinite(v)) {
      // 是否为数字
      style.letterSpacing = 2 * v;
    }
  }

  return style;
}
