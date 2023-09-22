import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: 'max-h-full',
      value: { maxHeight: '100%' },
    },
    {
      key: 'max-h-1/2',
      value: { maxHeight: '50%' },
    },
    {
      key: 'max-h-1/3',
      value: { maxHeight: '33.3%' },
    },
    {
      key: 'max-h-1/4',
      value: { maxHeight: '25%' },
    },
    {
      key: 'max-h-`Number`',
      value: { maxHeight: `Number * 2` },
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
