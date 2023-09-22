import React from 'react';
import { colorbase, colorgradient } from '../../../src/config/index';
import { addOpacity } from '../../../src/utils/index';
import '../index.css';
const Index = () => {
  const colorArr = Object.keys(colorbase);
  const colorgradientArr = Object.keys(colorgradient);
  return (
    <div className="table-box" style={{ width: '100%', position: 'relative' }}>
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
            <span className="value">{colorbase[item]}</span>
            <span
              style={{
                backgroundImage: `linear-gradient(to right,${colorbase[item]}, ${colorbase[item]})`,
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
            borderColor: {addOpacity(colorbase[item], 'Number')}
          </span>
          <span
            style={{
              background: addOpacity(colorbase[item], 100),
              width: '100px',
              height: '30px',
            }}
          ></span>
        </li>
      ))}
      <li>
        <span className="name">渐变属性-v2.1.2版本以后支持</span>
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
