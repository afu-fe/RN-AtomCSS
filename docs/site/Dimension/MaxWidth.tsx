import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: 'max-w-full',
      value: { maxWidth: '100%' },
    },
    {
      key: 'max-w-1/2',
      value: { maxWidth: '50%' },
    },
    {
      key: 'max-w-1/3',
      value: { maxWidth: '33.3%' },
    },
    {
      key: 'max-w-1/4',
      value: { maxWidth: '25%' },
    },
    {
      key: 'max-w-`Number`',
      value: { maxWidth: `Number * 2` },
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
