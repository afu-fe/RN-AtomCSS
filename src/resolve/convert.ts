interface StyleObject {
  [key: string]: any;
}

interface RotateConfig {
  [key: string]: string;
}

const rotate: RotateConfig = {
  '0': '0deg',
  '90': '90deg',
  '90-reverse': '-90deg',
};

export function transform(value: string, style: StyleObject): StyleObject {
  const configSize = rotate?.[value]; // 是否为固定变量
  if (configSize !== undefined) {
    style.transform = [{ rotate: configSize }];
  }
  return style;
}
