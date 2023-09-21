// 处理拓展数据
function JExtend(
  type:
    | 'width'
    | 'height'
    | 'minWidth'
    | 'minHeight'
    | 'maxWidth'
    | 'maxHeight',
  value: string,
  style: Record<string, any>,
  context: Record<string, any>,
): Record<string, any> {
  const extend = context['extend'] || {};
  const extendConfig = extend[type] || {};
  const extendC = extendConfig?.[value]; // 是否为固定变量
  if (extendC !== undefined) {
    if (extendC.includes('%')) {
      const arr = extendC.split('%');
      style[type] = arr[0] + '%';
    } else {
      const v = parseFloat(extendC);
      if (Number.isFinite(v)) {
        // 是否为数字
        style[type] = v;
      }
    }
  }
  return style;
}

const Config: Record<string, string> = {
  full: '100%',
  '1/2': '50%',
  '1/3': '33.33%',
  '1/4': '25%',
  auto: 'auto',
};

export function widthHeight(
  type: 'width' | 'height',
  value: string,
  style: Record<string, any>,
  context: Record<string, any>,
): Record<string, any> {
  const configValue = Config?.[value]; // 是否为固定变量
  if (configValue !== undefined) {
    style[type] = configValue;
  } else {
    const v = parseFloat(value);
    if (Number.isFinite(v)) {
      // 是否为数字
      style[type] = 2 * v;
    } else {
      JExtend(type, value, style, context);
    }
  }
  return style;
}

export function minMaxWidthHeight(
  type: 'minWidth' | 'minHeight' | 'maxWidth' | 'maxHeight',
  value: string,
  style: Record<string, any>,
  context: Record<string, any>,
): Record<string, any> {
  const configValue = Config?.[value]; // 是否为固定变量
  if (configValue !== undefined) {
    style[type] = configValue;
  } else {
    const v = parseFloat(value);
    if (Number.isFinite(v)) {
      // 是否为数字
      style[type] = 2 * v;
    } else {
      JExtend(type, value, style, context);
    }
  }
  return style;
}
