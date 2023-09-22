import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: 'w-full',
      value: { width: '100%' },
    },
    {
      key: 'w-1/2',
      value: { width: '50%' },
    },
    {
      key: 'w-1/3',
      value: { width: '33.33%' },
    },
    {
      key: 'w-1/4',
      value: { width: '25%' },
    },
    {
      key: 'w-`Number`',
      value: { width: `Number * 2` },
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
