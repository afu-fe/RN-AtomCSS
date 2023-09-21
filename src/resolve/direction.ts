import { direction } from '../config/index';

interface StyleObject {
  [key: string]: any;
}

export function directionBox(value: string, style: StyleObject): StyleObject {
  const configSize = direction?.[value]; // 是否为固定变量
  if (configSize !== undefined) {
    style.direction = configSize;
  }
  return style;
}
