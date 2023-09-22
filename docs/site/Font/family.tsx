import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: 'regular',
      value: { fontFamily: 'PingFangSC-Regular' },
    },
    {
      key: 'light',
      value: { fontFamily: 'PingFangSC-light' },
    },
    {
      key: 'medium',
      value: { fontFamily: 'PingFangSC-Medium' },
    },
    {
      key: 'din',
      value: { fontFamily: 'DINAlternate-Bold' },
    },
    {
      key: 'semibold',
      value: { fontFamily: 'PingFangSC-Semibold' },
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
