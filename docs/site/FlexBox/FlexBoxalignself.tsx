import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: 'self-center',
      value: { alignSelf: 'center' },
    },
    {
      key: 'self-start',
      value: { alignSelf: 'flex-start' },
    },
    {
      key: 'self-end',
      value: { alignSelf: 'flex-end' },
    },
    {
      key: 'self-baseline',
      value: { alignSelf: 'baseline' },
    },
    {
      key: 'self-stretch',
      value: { alignSelf: 'stretch' },
    },
    {
      key: 'self-auto',
      value: { alignSelf: 'auto' },
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
