let Config: Record<string, number> = {
  square: 1,
  video: 16 / 9,
};

export function aspectRatio(
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  const configValue = Config?.[value]; // 是否为固定变量
  if (configValue !== undefined) {
    style[`aspectRatio`] = configValue;
  } else {
    const v = parseFloat(value);
    if (Number.isFinite(v)) {
      // 是否为数字
      style[`aspectRatio`] = v;
    }
  }
  return style;
}
