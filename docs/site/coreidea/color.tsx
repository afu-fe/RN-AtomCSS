import React from 'react';
import { colorDefault, colorgradient } from '../../../src/config/index';
import { addOpacity } from '../../../src/utils/index';
import '../index.css';
const Index = () => {
  const colorArr = Object.keys(colorDefault);
  const colorgradientArr = Object.keys(colorgradient);
  return (
    <div className="table-box" style={{ width: '100%', position: 'relative' }}>
      <h2 className="color-title">主题色</h2>
      <div className="color-info">
        我们把主题色定义为主色、次主色、辅助色三个色值，可用于交互元素或重点突出的元素，如按钮、商机价格等。
        色板：通过主题色定义出 3
        个衍生色，这些经过设计的颜色可以灵活的搭配，用于插图、图标、形象、辅助图形或其他场景。
        渐变色：根据设计趋势，我们也定义了渐变色值，应对不同的使用场景。
      </div>
      <img
        src="https://z.autoimg.cn/sou/rn-atomcss/主题色@2x.png"
        alt=""
        style={{ width: '100%', height: 'auto' }}
      />
      <h2 className="color-title">中性色</h2>
      <div className="color-info">
        中性色板共 9
        个颜色（包含黑、白两色）我们在中性色中加入了蓝色倾向，使在视觉上能显得更干净并符合产品调性。根据使用场景，中性色被定义为
        3 类：文字色、背景色、边框及叠加色。
        中性色的定义需要考虑文字及背景搭配的视觉效果，结合 WCAG2.0（Web
        内容无障碍指南），我们使常用文字与白色的对比度满足大于 3 。
      </div>
      <img
        src="https://z.autoimg.cn/sou/rn-atomcss/中性色@2x.png"
        alt=""
        style={{ width: '100%', height: 'auto' }}
      />

      <h2 className="color-title">功能色</h2>
      <div className="color-info">
        我们定义了 2
        种功能色,分别表示成功、错误警示,在遵循色彩通用含义选取色相的基础上,从视觉一致性的角度选取了与品牌色更具一致关系的色调。同时定义出4个衍生色，用于其他特殊场景。
      </div>
      <img
        src="https://z.autoimg.cn/sou/rn-atomcss/功能色@2x.png"
        alt=""
        style={{ width: '100%', height: 'auto' }}
      />

      <h2 className="color-title">拓展色</h2>
      <div className="color-info">
        在一些特殊业务场景，可使用专有的颜色进行拓展。
      </div>
      <img
        src="https://z.autoimg.cn/sou/rn-atomcss/拓展色@2x.png"
        alt=""
        style={{ width: '100%', height: 'auto' }}
      />
      <h2 className="color-title">色彩详情</h2>
      <li>
        <span className="header">Stylename</span>
        <span className="header">Properties</span>
      </li>
      <li>
        <span className="name">普通颜色属性</span>
        <span className="value">普通颜色属性值</span>
      </li>
      {colorArr.map((item) => (
        <>
          <li>
            <span className="name">{item}</span>
            <span className="value">{colorDefault[item]}</span>
            <span
              style={{
                backgroundImage: `linear-gradient(to right,${colorDefault[item]}, ${colorDefault[item]})`,
                width: '100px',
                height: '30px',
              }}
            ></span>
          </li>
        </>
      ))}
      <li>
        <span className="name">hsla[hh/ss/ll/aa]</span>
        <span className="value">hsla(hh,ss%,ll%.aa)</span>
        <span
          style={{
            background: addOpacity('#fff', 1),
            width: '100px',
            height: '30px',
          }}
        >
          V2.1
        </span>
      </li>
      <li>
        <span className="name">bg/text-[#RRGGBB]</span>
        <span className="value">(#RRGGBB)</span>
        <span
          style={{
            background: addOpacity('#fff', 1),
            width: '100px',
            height: '30px',
          }}
        >
          V2.1.6
        </span>
      </li>
      {colorArr.map((item, index) => (
        <li key={index}>
          <span className="name">{item}-`Number`</span>
          <span className="value">
            borderColor: {addOpacity(colorDefault[item], 'Number')}
          </span>
          <span
            style={{
              background: addOpacity(colorDefault[item], 100),
              width: '100px',
              height: '30px',
            }}
          ></span>
        </li>
      ))}
      <li>
        <span className="value">渐变属性值 只支持获取变量使用</span>
      </li>
      {colorgradientArr.map((item) => (
        <>
          <li>
            <span className="name">{item}</span>
            <span className="value">{JSON.stringify(colorgradient[item])}</span>
            <span
              style={{
                backgroundImage: `linear-gradient(to right,${colorgradient[item][0]}, ${colorgradient[item][1]})`,
                width: '100px',
                height: '30px',
              }}
            ></span>
          </li>
        </>
      ))}
    </div>
  );
};

export default Index;
