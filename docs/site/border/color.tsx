import React from 'react';
import { colorbase } from '../../../src/config/index';
import { addOpacity } from '../../../src/utils/index';
import '../index.css';
const Index = () => {
  const colorArr = Object.keys(colorbase);
  const colorPro = {
    'border--color': 'borderColor: color',
    'border-t-color': 'borderTopColor: color',
    'border-l-color': 'borderLeftColor: color',
    'border-r-color': 'borderRightColor: color',
    'border-b-color': 'borderBottomColor: color',
    'border-s-color': 'borderStartColor: color',
    'border-e-color': 'borderEndColor: color',
  };
  const c = Object.keys(colorPro);
  return (
    <div className="table-box" style={{ width: '100%', position: 'relative' }}>
      <li>
        <span className="header">Stylename支持设置属性</span>
        <span className="header">Properties</span>
      </li>
      {c.map((ele, index) => (
        <li key={index}>
          <span className="name">{ele}</span>
          <span className="value">{colorPro[ele]}</span>
        </li>
      ))}
      {colorArr.map((ele, index) => (
        <>
          {index === 0 ? (
            <li>
              <span className="header">Stylename支持颜色值（可拓展）</span>
              <span className="header">Properties</span>
              <span className="header">示意</span>
            </li>
          ) : null}
          <li key={index}>
            <span className="name">border-{ele}</span>
            <span className="value">borderColor: {colorbase[ele]}</span>
            <span
              style={{
                border: `1px solid ${colorbase[ele]}`,
                width: '100px',
                height: '30px',
              }}
            ></span>
          </li>
          <li key={index}>
            <span className="name">border-{ele}-`Number`</span>
            <span className="value">
              borderColor: {addOpacity(colorbase[ele], 'Number')}
            </span>
            <span
              style={{
                border: `1px solid ${addOpacity(colorbase[ele], 100)}`,
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
