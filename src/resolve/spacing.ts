const config: Record<string, number> = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  none: 16,
  tight: 20,
  snug: 20,
  normal: 24,
  relaxed: 26,
  loose: 32,
  '-xs': -12,
  '-sm': -14,
  '-base': -16,
  '-lg': -18,
  '-xl': -20,
  '-none': -16,
  '-tight': -20,
  '-snug': -20,
  '-normal': -24,
  '-relaxed': -26,
  '-loose': -32,
};

export function spacing(
  type: 'margin' | 'padding',
  direction:
    | 'Horizontal'
    | 'Vertical'
    | 'All'
    | 'Left'
    | 'Right'
    | 'Top'
    | 'Bottom'
    | 'End'
    | 'Start',
  value: string,
  style: Record<string, any>,
  context: Record<string, any>,
): Record<string, any> {
  const dir = direction === 'All' ? '' : direction;
  const configSize = config?.[value]; // 是否为固定变量

  if (Number.isFinite(configSize)) {
    style[`${type}${dir}`] = configSize;
  } else {
    const v = parseFloat(value);
    if (Number.isFinite(v)) {
      // 是否为数字
      style[`${type}${dir}`] = 2 * v;
    } else {
      // 拓展数据
      const extend = context['extend'] || {};
      const extendConfig = extend.spacing || {};
      const extendC = extendConfig?.[value]; // 是否为固定变量
      const va = parseFloat(extendC);
      if (Number.isFinite(va)) {
        // 是否为数字
        style[`${type}${dir}`] = va;
      }
    }
  }

  return style;
}
