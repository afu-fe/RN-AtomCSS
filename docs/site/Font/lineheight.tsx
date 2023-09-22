import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: 'leading-none',
      value: { lineHeight: 16 },
    },
    {
      key: 'leading-tight',
      value: { lineHeight: 20 },
    },
    {
      key: 'leading-snug',
      value: { lineHeight: 22 },
    },
    {
      key: 'leading-normal',
      value: { lineHeight: 24 },
    },
    {
      key: 'leading-relaxed',
      value: { lineHeight: 26 },
    },
    {
      key: 'leading-loose',
      value: { lineHeight: 32 },
    },
    {
      key: 'leading-Number',
      value: { lineHeight: 'Number * 2' },
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
