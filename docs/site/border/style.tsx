import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: 'border-solid',
      value: { borderStyle: 'solid' },
    },
    {
      key: 'border-dashed',
      value: { borderStyle: 'dashed' },
    },
    {
      key: 'border-dotted',
      value: { borderStyle: 'dotted' },
    },
    {
      key: 'border-double',
      value: { borderStyle: 'double' },
      du: 'android',
    },
    {
      key: 'border-none',
      value: { borderStyle: 'none' },
      du: 'android',
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
              <span className="header">不支持</span>
            </li>
          ) : null}
          <li key={index}>
            <span className="name">{ele.key}</span>
            <span className="value">
              {Object.keys(ele.value)[0]}:{' '}
              {ele.value[Object.keys(ele.value)[0]]}
            </span>
            <span className="novalue">{ele.du}</span>
          </li>
        </>
      ))}
    </div>
  );
};

export default Index;
