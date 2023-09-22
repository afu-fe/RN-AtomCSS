import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: 'min-h-full',
      value: { minHeight: '100%' },
    },
    {
      key: 'min-h-1/2',
      value: { minHeight: '50%' },
    },
    {
      key: 'min-h-1/3',
      value: { minHeight: '33.3%' },
    },
    {
      key: 'min-h-1/4',
      value: { minHeight: '25%' },
    },
    {
      key: 'min-h-`Number`',
      value: { minHeight: `Number * 2` },
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
