import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: 'align-baseline',
      value: { verticalAlign: 'baseline' },
    },
    {
      key: 'align-top',
      value: { verticalAlign: 'top' },
    },
    {
      key: 'align-middle',
      value: { verticalAlign: 'middle' },
    },
    {
      key: 'align-bottom',
      value: { verticalAlign: 'bottom' },
    },
    {
      key: 'align-text-top',
      value: { verticalAlign: 'text-top' },
    },
    {
      key: 'align-text-bottom',
      value: { verticalAlign: 'text-bottom' },
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
