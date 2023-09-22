import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: 'text-decorate-solid',
      value: { textDecorationStyle: 'solid' },
      du: 'android',
    },

    {
      key: 'text-decorate-double',
      value: { textDecorationStyle: 'double' },
      du: 'android',
    },
    {
      key: 'text-decorate-dotted',
      value: { textDecorationStyle: 'dotted' },
      du: 'android',
    },
    {
      key: 'text-decorate-dashed',
      value: { textDecorationStyle: 'dashed' },
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
