import blackfilter from './blackfilter';
import { colorgradient } from './config/index';
import { aspectRatio } from './resolve/aspectRatio';
import { bgOpacity } from './resolve/bg-opacity';
import { border, borderRadius } from './resolve/borders';
import { color } from './resolve/color';
import { transform } from './resolve/convert';
import { directionBox } from './resolve/direction';
import { elevation } from './resolve/elevation';
import {
  alignContent,
  alignItems,
  alignSelf,
  flexBasis,
  flexBox,
  flexDirectionWrap,
  flexGrowShrink,
  justifyContent,
  justifyItems,
  justifySelf,
} from './resolve/flexbox';
import {
  font,
  fontFamily,
  fontStyle,
  fontVariant,
  fontverticalAlign,
  lineHeight,
  textAlignVertical,
  textDecorationLine,
  textDecorationStyle,
  textTransform,
  writingDirection,
} from './resolve/font';
import { imgStyle } from './resolve/image';
import { insetBox, layout, zIndex } from './resolve/layout';
import { letterSpacing } from './resolve/letterSpacing';
import { opacity } from './resolve/opacity';
import { shadowOffset, shadowOpacity, shadowRadius } from './resolve/shadow';
import { spacing } from './resolve/spacing';
import { textShadowOffset, textShadowRadius } from './resolve/textShadow';
import { minMaxWidthHeight, widthHeight } from './resolve/width-height';
import { getDirection } from './utils';
export default class ClassParser {
  constructor(ClassNames, extend, cache, Platform) {
    this.ClassNames = ClassNames; // 值
    this.extend = extend || {}; // 拓展资源
    this.platform = Platform?.OS;
    this.cache = cache;
  }
  parse = (type) => {
    let style = {};
    this.ClassNames.forEach((item) => {
      // 框架支持端的设置处理V2.1
      const parts = item.trim().split(`:`);
      let prefixes = null;
      if (parts.length === 1) {
        this.string = item;
      } else {
        this.string = parts.pop() ?? ``;
        prefixes = parts[0]; // 端
      }
      this.string = blackfilter(this.string); // 黑白名单过滤
      if (prefixes && prefixes === this.platform) {
        // 端对端处理
        style = this.parseUtilityItem(this.string, style, type);
      }
      if (prefixes === null) {
        style = this.parseUtilityItem(this.string, style, type);
      }
    });
    return style;
  };
  parseUtilityItem = (it, styles, type) => {
    // 处理单一属性
    let item = it.trim();
    this.char = item[0];
    let style = {};
    //  ----------------------------- v2.1.4 start -----------------------------
    const cachestyle = this.cache.getStyle(item); // 获取缓存
    if (cachestyle) {
      style = cachestyle;
      return Object.assign(styles, style);
    }
    //  ----------------------------- v2.1.4 end -----------------------------
    switch (this.char) {
      case `-`:
        {
          const match = item.slice(2, 4).match(/^(t|b|r|l|x|y|s|e)?-/);
          if (match) {
            if (
              this.consumePeeked(item, '-m') ||
              this.consumePeeked(item, '-p')
            ) {
              const prop = this.consumePeeked(item, '-m')
                ? `margin`
                : `padding`;
              const value = item.slice(3, item.length);
              const spacingDirection = getDirection(match[1]);
              spacing(prop, spacingDirection, value, style, this);
            }
          }
        }
        break;
      case `m`:
      case `p`:
        {
          const match = item.slice(1, 3).match(/^(t|b|r|l|x|y|''|s|e)?-/);
          if (match) {
            const prop = this.char === `m` ? `margin` : `padding`;
            const spacingDirection = getDirection(match[1]); // All
            const value = item.slice(
              spacingDirection === 'All' ? 2 : 3,
              item.length,
            );
            spacing(prop, spacingDirection, value, style, this);
          }
        }
        break;
    }
    if (this.consumePeeked(item, 'w-')) {
      const value = item.split('-')[1];
      widthHeight('width', value, style, this);
    }
    if (this.consumePeeked(item, 'h-')) {
      const value = item.split('-')[1];
      widthHeight('height', value, style, this);
    }
    if (this.consumePeeked(item, 'min-w-')) {
      const value = item.split('-')[2];
      minMaxWidthHeight('minWidth', value, style, this);
    }
    if (this.consumePeeked(item, 'min-h-')) {
      const value = item.split('-')[2];
      minMaxWidthHeight('minHeight', value, style, this);
    }
    if (this.consumePeeked(item, 'max-w-')) {
      const value = item.split('-')[2];
      minMaxWidthHeight('maxWidth', value, style, this);
    }
    if (this.consumePeeked(item, 'max-h-')) {
      const value = item.split('-')[2];
      minMaxWidthHeight('maxHeight', value, style, this);
    }
    if (this.consumePeeked(item, 'border')) {
      const value = item.slice(6, item.length);
      border(value, style, this);
    }
    if (this.consumePeeked(item, `rounded`)) {
      const value = item.slice(7, item.length);
      borderRadius(value, style, this);
    }
    if (this.consumePeeked(item, `opacity`)) {
      const value = item.slice(7, item.length);
      opacity(value, style, this);
    }
    if (this.consumePeeked(item, `elevation`)) {
      const value = item.slice(9, item.length);
      elevation(value, style, this);
    }
    if (this.consumePeeked(item, `bg-`)) {
      // 颜色, 透明度 bg-black-100
      const value = item.slice(3, item.length);
      if (this.consumePeeked(value, `opacity-`)) {
        bgOpacity(value.slice(8, item.length), style, this);
      } else {
        color('bg', value, style, this);
      }
    }
    if (this.consumePeeked(item, `text-`)) {
      const value = item.slice(5, item.length);
      if (this.consumePeeked(value, 'shadow-')) {
        const shadowv = value.slice(7, value.length);
        if (this.consumePeeked(shadowv, 'offset-')) {
          const v = shadowv.slice(7, shadowv.length);
          textShadowOffset(v, style, this);
        } else if (this.consumePeeked(shadowv, 'radius-')) {
          const v = shadowv.slice(7, shadowv.length);
          textShadowRadius(v, style, this);
        } else {
          color('text-shadow', shadowv, style, this); // 图片颜色
        }
      } else if (this.consumePeeked(value, 'decorate-')) {
        const v = value.slice(9, value.length);
        if (['solid', 'double', 'dotted', 'dashed'].includes(v)) {
          textDecorationStyle(v, style, this);
        } else {
          color('text-decorate', v, style, this); // 图片颜色
        }
      } else {
        font('text', value, style, this); // 字体大小
        color('text', value, style, this); // 字体颜色
      }
    }
    if (this.consumePeeked(item, `alignVertical-`)) {
      const value = item.slice(14, item.length);
      textAlignVertical(value, style, this); // 字体颜色
    }
    if (this.consumePeeked(item, `font-`)) {
      const value = item.slice(5, item.length);
      font('font', value, style, this); // 字重大小
    }
    if (this.consumePeeked(item, `align-`)) {
      const value = item.slice(6, item.length);
      fontverticalAlign(value, style);
    }
    if ([`regular`, `light`, `medium`, `din`, `semibold`].includes(item)) {
      fontFamily(item, style);
    }
    if (
      [
        `italic`,
        `not-italic`,
        'include-font-padding',
        'remove-font-padding',
        'backface-visible',
        'backface-hidden',
        'includeFontPadding',
      ].includes(item)
    ) {
      fontStyle(item, style);
    }
    if (this.consumePeeked(item, `leading-`)) {
      const value = item.slice(8, item.length);
      lineHeight(value, style, this); // 行高大小
    }
    if (this.consumePeeked(item, `content-`)) {
      const value = item.slice(8, item.length);
      alignContent(value, style);
    }
    if (this.consumePeeked(item, `item-`)) {
      const value = item.slice(5, item.length);
      alignItems(value, style);
    }
    if (this.consumePeeked(item, `self-`)) {
      const value = item.slice(5, item.length);
      alignSelf(value, style);
    }
    if (this.consumePeeked(item, `justify-`)) {
      const value = item.slice(8, item.length);
      if (this.consumePeeked(value, `items-`)) {
        const v = value.slice(6, value.length);
        justifyItems(v, style);
      }
      if (this.consumePeeked(value, `self-`)) {
        const v = value.slice(5, value.length);
        justifySelf(v, style);
      }
      justifyContent(value, style);
    }
    if (this.consumePeeked(item, `flex-`)) {
      const value = item.slice(5, item.length);
      if (this.consumePeeked(value, `grow`)) {
        const v = value.slice(5, item.length);
        flexGrowShrink('Grow', v, style);
      } else if (this.consumePeeked(value, `shrink`)) {
        const v = value.slice(7, item.length);
        flexGrowShrink('Shrink', v, style);
      } else if (
        this.consumePeeked(value, `row`) ||
        this.consumePeeked(value, `col`)
      ) {
        flexDirectionWrap('Direction', value, style);
      } else if (
        this.consumePeeked(value, `wrap`) ||
        this.consumePeeked(value, `nowrap`)
      ) {
        flexDirectionWrap('Wrap', value, style);
      } else if (this.consumePeeked(value, `basis`)) {
        const v = value.slice(6, item.length);
        flexBasis(v, style);
      } else {
        flexBox(value, style);
      }
    }
    if (this.consumePeeked(item, `basis-`)) {
      const v = item.slice(6, item.length);
      flexBasis(v, style);
    }
    if (this.consumePeeked(item, `z-`) || this.consumePeeked(item, `-z-`)) {
      const value = item.slice(2, item.length);
      zIndex(value, style, this);
    }

    if ([`flex`, `none`].includes(item)) {
      layout('display', item, style);
    }
    if ([`hidden`, `visible`, `scroll`].includes(item)) {
      layout('overflow', item, style);
    }
    if ([`static`, `fixed`, `absolute`, `relative`, `sticky`].includes(item)) {
      layout('position', item, style);
    }
    if (this.consumePeeked(item, `top-`) || this.consumePeeked(item, `-top-`)) {
      const value = item.slice(4, item.length);
      insetBox('top', value, style);
    }
    if (
      this.consumePeeked(item, `bottom-`) ||
      this.consumePeeked(item, `-bottom-`)
    ) {
      const value = item.slice(7, item.length);
      insetBox('bottom', value, style);
    }
    if (
      this.consumePeeked(item, `left-`) ||
      this.consumePeeked(item, `-left-`)
    ) {
      const value = item.slice(5, item.length);
      insetBox('left', value, style);
    }
    if (
      this.consumePeeked(item, `right-`) ||
      this.consumePeeked(item, `-right-`)
    ) {
      const value = item.slice(6, item.length);
      insetBox('right', value, style);
    }
    if (
      this.consumePeeked(item, `start-`) ||
      this.consumePeeked(item, `-start-`)
    ) {
      const value = item.slice(6, item.length);
      insetBox('start', value, style);
    }
    if (this.consumePeeked(item, `rotate-`)) {
      const value = item.slice(7, item.length);
      transform(value, style);
    }
    //  ----------------------------- v2.1.3 start -----------------------------
    if (this.consumePeeked(item, `colorlingra-`) && type === 'getValue') {
      if (this.ClassNames.length === 1) {
        // 仅支持获取原址返回
        // const this.extend =
        const colorlingra = this.extend['colorlingra'] || {};
        const colorlinobj = {
          ...colorgradient,
          ...colorlingra,
        };
        const colorconfig = colorlinobj?.[item] || [];
        style[item] = colorconfig;
      }
    }
    //  ----------------------------- v2.1.3 end -----------------------------

    // -----------------------------  v2.1.6 start -----------------------------
    if (this.consumePeeked(item, `img-`)) {
      const value = item.slice(4, item.length);
      imgStyle(value, style);
    }
    if (['s-caps', 'o-nums', 'l-nums', 't-nums', 'p-nums'].includes(item)) {
      // 字体偏移
      fontVariant(item, style);
    }
    if (
      [
        'textdl-none',
        'textdl-unline',
        'textdl-line',
        'textdl-unlineline',
      ].includes(item)
    ) {
      // 字体偏移
      textDecorationLine(item, style);
    }
    if (
      ['normal-case', 'uppercase', 'lowercase', 'capitalize'].includes(item)
    ) {
      textTransform(item, style);
    }
    if (this.consumePeeked(item, `writing-`)) {
      const value = item.slice(8, item.length);
      writingDirection(value, style);
    }
    if (this.consumePeeked(item, `tracking-`)) {
      const value = item.slice(9, item.length);
      letterSpacing(value, style);
    }

    if (this.consumePeeked(item, `aspect-`)) {
      const value = item.slice(7, item.length);
      aspectRatio(value, style);
    }
    if (this.consumePeeked(item, `direction-`)) {
      const value = item.slice(10, item.length);
      if ([`inherit`, `ltr`, `rtl`].includes(value)) {
        directionBox(value, style, this);
      }
    }
    if (this.consumePeeked(item, 'overlay-')) {
      const value = item.slice(8, item.length);
      color('overlay', value, style, this); // 图片颜色
    }
    if (this.consumePeeked(item, 'shadow-')) {
      const value = item.slice(7, item.length);
      if (this.consumePeeked(value, 'offset-')) {
        const v = value.slice(7, value.length);
        shadowOffset(v, style, this);
      } else if (this.consumePeeked(value, 'opacity-')) {
        const v = value.slice(8, value.length);
        shadowOpacity(v, style, this);
      } else if (this.consumePeeked(value, 'radius-')) {
        const v = value.slice(7, value.length);
        shadowRadius(v, style, this);
      } else {
        color('shadow', value, style, this); // 图片颜色
      }
    }
    // -----------------------------  v2.1.6 end -----------------------------

    //  ----------------------------- v2.1.4 start -----------------------------
    this.cache.setStyle(item, style); // 存入缓存
    //  ----------------------------- v2.1.4 end -----------------------------
    return Object.assign(styles, style);
  };
  consumePeeked = (ele, str) => {
    // 截断字符串
    return ele && ele.indexOf(str) === 0;
  };
}
