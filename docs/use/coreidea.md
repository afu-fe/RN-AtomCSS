---
nav: 使用
group: 框架配置
toc: content
order: 0
---

# 核心概念

## 属端支持V2.1

控制只在某一端生效，目前仅限在RN中支持IOS/Android

<code src="../site/coreidea/duan.tsx"></code>

## 获取属性变量

提供的新的方法，可以供您获取框架中的属性值，方便将代码中的样式变量都集中管理

```js
import { autoTailwind, autoTailValue } from 'rn-atomcss';
const ts = autoTailwind({
  // 样式定义
  defaultStyles: {},
  extend: {
    // 拓展属性
    width: {
      // 支持属性 width | height 'minWidth' | 'minHeight' | 'maxWidth' | 'maxHeight', 宽高 拓展
      ipad: '30%',
    },
    color: {
      // 颜色拓展 // text bg  border 通用
      violet: 'rgba(0,0,0,1)',
    },
    spacing: {
      //支持属性 左右上下间距拓展 '【margin/padding】Horizontal' | '【margin/padding】Vertical' | '【margin/padding】All' | '【margin/padding】Left' | '【margin/padding】Right' | '【margin/padding】Top' | '【margin/padding】Bottom',
      ipad: 32,
    },
    borderRadius: {
      // borderRadius 拓展
      '4xl': 2,
    },
    colorlingra: {
      // 渐变颜色， RN中不支持CSS样式，仅支持属性获取
      'colorlingra-01': ['#4C88FF', '#206CFE'], // 命名规则仅支持colorlingra开头的
    },
  },
});

global.useTailValue = useTailValue(ts);

// 使用
global.useTailValue('text-xl'); // 获取文字大小 12
global.useTailValue('text-black-50'); // 获取背景颜色 rgba(0,0,0,.5);
global.useTailValue('font-semibold'); // 获取字重  600
global.useTailValue('leading-30'); // 获取行高 60
global.useTailValue('bg-black'); // 获取背景rgba(0,0,0,1);
global.useTailValue('bg-opacity-30'); // 获取透明度 0.3;
global.useTailValue('regular'); // 获取字体 PingFangSC-Regular
global.useTailValue('colorlingra-01'); // 获取颜色值渐变属性 ['#4C88FF', '#206CFE']
```

## 颜色属性

为您的项目定制默认调色盘。

<code src="../site/coreidea/color.tsx"></code>
