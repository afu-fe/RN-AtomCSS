/*
 * @Author: cuiwujie
 * @Date: 2020-08-13
 * @LastEditors: cuiwujie
 * @LastEditTime: 2022-04-06 14:52:01
 * @Description: 属性编辑器
 */
import ClassParser from './ClassParser';
import Cache from './cache';
const autoTailwind = (utilities) => {
  const cache = new Cache();
  const extend = utilities?.extend || {}; // 拓展数据
  const Platform = utilities?.Platform || {}; // 拓展数据
  const tailwind = (classStyle, Type) => {
    let type = Type || 'getStyle'; // getValue 获取值， getStyle 获取css对象
    let style = {};
    // 将插入的样式合并到原有的样式表中
    if (!classStyle) {
      return style;
    }
    let separateClassNames = [];
    //如果为string类型  英文逗号分隔
    if (typeof classStyle === 'string') {
      separateClassNames = classStyle.replace(/\s+/g, ' ').split(',');
    } else if (Array.isArray(classStyle)) {
      separateClassNames = classStyle;
    }
    const parser = new ClassParser(separateClassNames, extend, cache, Platform);
    style = parser.parse(type);
    return style;
  };
  return tailwind;
};

export default autoTailwind;
