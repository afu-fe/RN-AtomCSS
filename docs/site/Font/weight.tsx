import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: 'font-thin',
      value: { fontWeight: '100' },
    },
    {
      key: 'font-extralight',
      value: { fontWeight: '200' },
    },
    {
      key: 'font-light',
      value: { fontWeight: '300' },
    },
    {
      key: 'font-normal',
      value: { fontWeight: '400' },
    },
    {
      key: 'font-medium',
      value: { fontWeight: '500' },
    },
    {
      key: 'font-semibold',
      value: { fontWeight: '600' },
    },
    {
      key: 'font-bold',
      value: { fontWeight: '700' },
    },
    {
      key: 'font-extrabold',
      value: { fontWeight: '800' },
    },
    {
      key: 'font-black',
      value: { fontWeight: '900' },
    },
    {
      key: 'font-abold',
      value: { fontWeight: 'bold' },
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
