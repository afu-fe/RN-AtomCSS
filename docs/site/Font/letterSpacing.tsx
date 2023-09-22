import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: 'tracking-xs',
      value: { letterSpacing: 12 },
    },
    {
      key: 'tracking-sm',
      value: { letterSpacing: 14 },
    },
    {
      key: 'tracking-base',
      value: { letterSpacing: 16 },
    },
    {
      key: 'tracking-lg',
      value: { letterSpacing: 18 },
    },
    {
      key: 'tracking-xl',
      value: { letterSpacing: 20 },
    },
    {
      key: 'tracking-`Number`',
      value: { letterSpacing: `Number * 2` },
    },
  ];
  return (
    <div className="table-box" style={{ width: '100%', position: 'relative' }}>
      {opArr.map((ele, index) => (
        <>
          {index === 0 ? (
            <li>
              <span className="header">Stylename</span>
              <span className="header">Properties</span>
            </li>
          ) : null}
          <li key={index}>
            <span className="name">{ele.key}</span>
            <span className="value">
              {Object.keys(ele.value)[0]}:{' '}
              {ele.value[Object.keys(ele.value)[0]]}
            </span>
          </li>
        </>
      ))}
    </div>
  );
};

export default Index;
