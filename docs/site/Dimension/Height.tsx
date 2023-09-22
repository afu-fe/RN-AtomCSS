import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: 'h-full',
      value: { height: '100%' },
    },
    {
      key: 'h-1/2',
      value: { height: '50%' },
    },
    {
      key: 'h-1/3',
      value: { height: '33.3%' },
    },
    {
      key: 'h-1/4',
      value: { height: '25%' },
    },
    {
      key: 'h-`Number`',
      value: { height: `Number * 2` },
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
