import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: 'justify-start',
      value: { justifyContent: 'flex-start' },
    },
    {
      key: 'justify-end',
      value: { justifyContent: 'flex-end' },
    },
    {
      key: 'justify-center',
      value: { justifyContent: 'center' },
    },
    {
      key: 'justify-between',
      value: { justifyContent: 'space-between' },
    },
    {
      key: 'justify-around',
      value: { justifyContent: 'space-around' },
    },
    {
      key: 'justify-evenly',
      value: { justifyContent: 'space-evenly' },
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
