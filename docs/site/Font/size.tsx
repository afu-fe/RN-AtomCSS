import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: 'text-xs',
      value: { fontSize: 12 },
    },
    {
      key: 'text-sm',
      value: { fontSize: 14 },
    },
    {
      key: 'text-base',
      value: { fontSize: 16 },
    },
    {
      key: 'text-lg',
      value: { fontSize: 18 },
    },
    {
      key: 'text-xl',
      value: { fontSize: 20 },
    },
    {
      key: 'text-`Number`',
      value: { fontSize: `Number * 2` },
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
