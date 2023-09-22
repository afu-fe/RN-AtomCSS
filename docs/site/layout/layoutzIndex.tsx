import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: 'z-0',
      value: { zIndex: 0 },
    },
    {
      key: 'z-10',
      value: { zIndex: 10 },
    },
    {
      key: 'z-20',
      value: { zIndex: 20 },
    },
    {
      key: 'z-30',
      value: { zIndex: 30 },
    },
    {
      key: 'z-40',
      value: { zIndex: 40 },
    },
    {
      key: 'z-50',
      value: { zIndex: 50 },
    },
    {
      key: 'z-60',
      value: { zIndex: 60 },
    },
    {
      key: 'z-70',
      value: { zIndex: 70 },
    },
    {
      key: 'z-80',
      value: { zIndex: 80 },
    },
    {
      key: 'z-90',
      value: { zIndex: 90 },
    },
    {
      key: 'z-100',
      value: { zIndex: 100 },
    },
    {
      key: 'z-auto',
      value: { zIndex: 'auto' },
      du: 'android',
    },
    {
      key: '-z-10',
      value: { zIndex: -10 },
    },
    {
      key: '-z-20',
      value: { zIndex: -20 },
    },
    {
      key: '-z-30',
      value: { zIndex: -30 },
    },
    {
      key: 'z-`Number`',
      value: { zIndex: `Number` },
    },
    {
      key: '-z-`Number`',
      value: { zIndex: `-Number` },
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
