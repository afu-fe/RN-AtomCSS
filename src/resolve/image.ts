const imageConfig: Record<string, string> = {
  cover: 'cover',
  contain: 'contain',
  stretch: 'stretch',
  repeat: 'repeat',
  center: 'center',
};

export function imgStyle(
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  try {
    const v = value.replace(/^-/, '');
    const configValue = imageConfig?.[v];
    if (configValue) {
      style.resizeMode = configValue;
    }
  } catch (e) {
    // 处理可能的异常情况，可以根据实际需求进行调整
  }

  return style;
}
