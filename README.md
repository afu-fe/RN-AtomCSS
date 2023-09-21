# 什么是 rn-atomcss

rn-atomcss，是一款为组件开发场景下在RN端使用的css样式书写方式，一起为开发者提供方便快捷的开发体验

## 特性

rn-atomcss 主要具备以下特性：

- 🚀 **轻量级的应用**
- 🚥 **约定式样式增强**
- 💡 **自定义拓展**
- 💎 **为组件研发而生**

## 安装

学习如何在您的工程中安装 rn-Tailwind CSS

1.  下载rn-tailwind包
    ```js
    yarn add rn-atomcss
    ```
2.  在RN项目中导入
    ```js
    import { autoTailwind } from 'rn-atomcss';
    import { Platform } from 'react-native';
    global.tailwind = autoTailwind({
      defaultStyles: {},
      extend: {},
      Platform,
    });
    ```

## 使用

学习如何在您的工程中使用 rn-Tailwind CSS

```js
<View
  style={global.tailwind(
    'flex, flex-1,ml-6,bg-color-white,flex-col, justify-between',
  )}
>
  <Text
    style={global.tailwind(
      'text-6.5,text-color-body,regular,bg-color-white,mb-2,',
    )}
    numberOfLines={1}
  >
    时间：{special.publish_time}
  </Text>
</View>
```

生成的code

```js
 <View
    style={{
      display: 'flex',
      flexDirection: 'column'
      justifyContent: 'space-between',
      flex: 1,
      marginLeft: 6,
      backgroundColor: '#fff',
    }}
  >
    <Text
      style={{
        fontSize: 13,
        color: '#464E64',
        fontFamily: 'PingFangSC-Regular',
        backgroundColor: '#fff',
        marginBottom: 2,
      }}
      numberOfLines={1}
    >
      时间：{special.publish_time}
    </Text>
  </View>
```

## 拓展

使用您的自定义功能类来扩展 rn-atomcss

尽管 rn-atomcss 提供了相当全面的开箱即用的功能类集，您仍可能会遇到需要添加一些自己的功能类的情况。

确定扩展框架的最佳方法非常不易，因此这里有一些最佳实践，可以帮助您以最惯用的方式添加自己的功能类。

```js
import { autoTailwind } from 'rn-atomcss';
import { Platform } from 'react-native';
const ts = autoTailwind({
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
  Platform,
});

// 使用
ts('w-ipad'); // { width : '30%'}
ts('bg-violet'); // { backgroundColor: 'rgba(0,0,0,1)' }
ts('ml-ipad'); // { marginLeft: 32 }
```

## 属性支持

### Key

- ✅ = Implemented, exists in RN
- 😎 = Implemented, but is RN ONLY
- 🚨 = not implemented

### RN Styles

- ✅ alignContent
- ✅ alignItems
- ✅ alignSelf
- ✅ aspectRatio
- ✅ backfaceVisibility
- ✅ backgroundColor
- ✅ borderBottomColor
- ✅ borderBottomEndRadius
- ✅ borderBottomLeftRadius
- ✅ borderBottomRightRadius
- ✅ borderBottomStartRadius
- ✅ borderBottomWidth
- ✅ borderColor
- ✅ borderEndColor
- ✅ borderEndWidth
- ✅ borderLeftColor
- ✅ borderLeftWidth
- ✅ borderRadius
- ✅ borderRightColor
- ✅ borderRightWidth
- ✅ borderStartColor
- ✅ borderStartWidth
- ✅ borderStyle
- ✅ borderTopColor
- ✅ borderTopEndRadius
- ✅ borderTopLeftRadius
- ✅ borderTopRightRadius
- ✅ borderTopStartRadius
- ✅ borderTopWidth
- ✅ borderWidth
- ✅ bottom
- ✅ color
- ✅ direction
- ✅ display
- ✅ elevation (android-only)
- ✅ end
- ✅ flex
- ✅ flexBasis
- ✅ flexDirection
- ✅ flexGrow
- ✅ flexShrink
- ✅ flexWrap
- ✅ fontFamily
- ✅ fontSize
- ✅ fontStyle
- ✅ fontVariant
- ✅ fontWeight (😎 added: `font-100/200...900`)
- ✅ height
- 😎 includeFontPadding (android, added: `include-font-padding`, `remove-font-padding`)
- ✅ justifyContent
- ✅ left
- ✅ letterSpacing
- ✅ lineHeight
- ✅ margin
- ✅ marginBottom
- ✅ marginEnd
- ✅ marginHorizontal
- ✅ marginLeft
- ✅ marginRight
- ✅ marginStart
- ✅ marginTop
- ✅ marginVertical
- ✅ maxHeight
- ✅ maxWidth
- ✅ minHeight
- ✅ minWidth
- ✅ opacity
- ✅ overflow
- ✅ overlayColor (android only)
- ✅ padding
- ✅ paddingBottom
- ✅ paddingEnd
- ✅ paddingHorizontal
- ✅ paddingLeft
- ✅ paddingRight
- ✅ paddingStart
- ✅ paddingTop
- ✅ paddingVertical
- ✅ position
- ✅ resizeMode
- ✅ right
- ✅ shadowColor `shadow-red-200`
- ✅ shadowOffset (ios only) `shadow-offset-width|height-1|[3px]`
- ✅ shadowOpacity (ios only) `shadow-opacity-70`
- ✅ shadowRadius `shadow-radius-[3px]`
- ✅ start
- ✅ textAlign
- ✅ textAlignVertical (android only)
- ✅ textDecorationColor (ios only)
- ✅ textDecorationLine
- ✅ textDecorationStyle (ios only)
- ✅ textShadowColor
- ✅ textShadowOffset
- ✅ textShadowRadius
- ✅ textTransform
- 🚨 tintColor
- ✅ top
- ✅ width
- ✅ writingDirection
- ✅ zIndex
