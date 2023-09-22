---
nav: 使用
group: 框架配置
toc: content
order: 2
---

# 布局

## Display

控制元素显示类型的功能类.key.key

<code src="../site/layout/layoutDisplay.tsx"></code>

## Overflow

用于控制元素如何处理超出容器的内容的功能类。

<code src="../site/layout/layoutOverflow.tsx"></code>

## Position

用于控制元素在DOM中的位置的功能类。

<code src="../site/layout/layoutPosition.tsx"></code>

## Top / Right / Bottom / Left

```js
宽度Number值范围 (0-+∞)，显示值为2倍关系
```

用于控制定位元素的位置的功能类。

<code src="../site/layout/layoutTRBL.tsx"></code>

## Z-index

```js
宽度Number值范围 (0-+∞)，显示值为1倍关系
```

用于控制元素的堆栈顺序的功能类。

<code src="../site/layout/layoutzIndex.tsx"></code>

## direction

direction指定了用户界面的阅读顺序。ltr表示 left to right，即从左往右阅读。反之rtl为从右往左阅读。。默认值为inherit，但根节点的值会根据用户所在地的不同而不同[更多详情请点击](https://yogalayout.com/docs/layout-direction)
<code src="../site/layout/layoutDirection.tsx"></code>

## backfaceVisibility

<code src="../site/View/backfaceVisibility.tsx"></code>

## elevation

<code src="../site/View/elevation.tsx"></code>
