import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: 'item-center',
      value: { alignItems: 'center' },
    },
    {
      key: 'item-start',
      value: { alignItems: 'flex-start' },
    },
    {
      key: 'item-end',
      value: { alignItems: 'flex-end' },
    },
    {
      key: 'item-baseline',
      value: { alignItems: 'baseline' },
    },
    {
      key: 'item-stretch',
      value: { alignItems: 'stretch' },
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
