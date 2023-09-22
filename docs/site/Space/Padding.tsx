import React from 'react';
import '../index.css';
const Index = () => {
  const Arr = [
    { key: 'px', value: 'paddingHorizontal', type: '' },
    { key: 'py', value: 'paddingVertical', type: '' },
    { key: 'pl', value: 'paddingLeft', type: '' },
    { key: 'pt', value: 'paddingTop', type: '' },
    { key: 'pb', value: 'paddingBottom', type: '' },
    { key: 'pr', value: 'paddingRight', type: '' },
    { key: 'ps', value: 'paddingStart', type: '' },
    { key: 'pe', value: 'paddingEnd', type: '' },
    { key: '-px', value: 'paddingHorizontal', type: '-' },
    { key: '-py', value: 'paddingVertical', type: '-' },
    { key: '-pl', value: 'paddingLeft', type: '-' },
    { key: '-pt', value: 'paddingTop', type: '-' },
    { key: '-pb', value: 'paddingBottom', type: '-' },
    { key: '-pr', value: 'paddingRight', type: '-' },
    { key: '-ps', value: 'paddingStart', type: '-' },
    { key: '-pe', value: 'paddingEnd', type: '-' },
  ];
  const opacityArr = [
    { key: 'xs', value: 12 },
    { key: 'sm', value: 14 },
    { key: 'base', value: 16 },
    { key: 'lg', value: 18 },
    { key: 'xl', value: 20 },
    { key: '`Number`', value: 'Number * 2' },
  ];
  return (
    <div className="table-box" style={{ width: '100%', position: 'relative' }}>
      <li>
        <span className="header">Stylename</span>
        <span className="header">Properties</span>
      </li>
      {Arr.map((item, index) => (
        <div key={index}>
          {opacityArr.map((ele, ind) => (
            <li key={ind + '_' + index}>
              <span className="name">
                {item.key}-{ele.key}
              </span>
              <span className="value">
                {item.value}: {item.type}
                {ele.value}
              </span>
            </li>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Index;
