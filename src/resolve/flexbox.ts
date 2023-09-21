import { flexConfig } from '../config/index';

const alignContentConfig = flexConfig.alignContentConfig;
const alignItemsConfig = flexConfig.alignItemsConfig;
const alignSelfConfig = flexConfig.alignSelfConfig;
const justifyContentConfig = flexConfig.justifyContentConfig;
const justifyItemsConfig = flexConfig.justifyItemsConfig;
const justifySelfConfig = flexConfig.justifySelfConfig;
const flexGrowShrinkConfig = flexConfig.flexGrowShrinkConfig;
const flexDirectionWrapConfig = flexConfig.flexDirectionWrapConfig;
const flexBoxConfig = flexConfig.flexBoxConfig;
const flexBasisConfig = flexConfig.flexBasisConfig;

export function alignContent(
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  const configSize = alignContentConfig?.[value]; // 是否为固定变量
  if (configSize !== undefined) {
    style[`alignContent`] = configSize;
  }
  return style;
}
export function alignItems(
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  const configSize = alignItemsConfig?.[value]; // 是否为固定变量
  if (configSize !== undefined) {
    style[`alignItems`] = configSize;
  }
  return style;
}
export function alignSelf(
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  const configSize = alignSelfConfig?.[value]; // 是否为固定变量
  if (configSize !== undefined) {
    style[`alignSelf`] = configSize;
  }
  return style;
}
export function justifyContent(
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  const configSize = justifyContentConfig?.[value]; // 是否为固定变量
  if (configSize !== undefined) {
    style[`justifyContent`] = configSize;
  }
  return style;
}
export function justifyItems(
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  const configSize = justifyItemsConfig?.[value]; // 是否为固定变量
  if (configSize !== undefined) {
    style[`justifyItems`] = configSize;
  }
  return style;
}
export function justifySelf(
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  const configSize = justifySelfConfig?.[value]; // 是否为固定变量
  if (configSize !== undefined) {
    style[`justifySelf`] = configSize;
  }
  return style;
}

export function flexGrowShrink(
  type: 'Grow' | 'Shrink',
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  const configSize = flexGrowShrinkConfig?.[value]; // 是否为固定变量
  if (configSize !== undefined) {
    style[`flex${type}`] = configSize;
  }
  return style;
}

export function flexDirectionWrap(
  type: 'Direction' | 'Wrap',
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  const configSize = flexDirectionWrapConfig?.[value]; // 是否为固定变量
  if (configSize !== undefined) {
    style[`flex${type}`] = configSize;
  }
  return style;
}
export function flexBox(
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  const configSize = flexBoxConfig?.[value]; // 是否为固定变量
  if (configSize !== undefined) {
    return (style[`flex`] = configSize);
  }
  let v = parseInt(value); // flex属性拓展
  if (Number.isFinite(v)) {
    style[`flex`] = v;
  }
  return style;
}

export function flexBasis(
  value: string,
  style: Record<string, any>,
): Record<string, any> {
  const configSize = flexBasisConfig?.[value]; // 是否为固定变量
  if (configSize !== undefined) {
    return (style[`flexBasis`] = configSize);
  }
  let v = parseInt(value); // flex属性拓展
  if (Number.isFinite(v)) {
    style[`flexBasis`] = 4 * v;
  }
  console.log('==', value, configSize, v);
  return style;
}
