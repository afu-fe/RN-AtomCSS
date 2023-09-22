import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: 'android:z-0',
      duan: 'android',
      keyitem: 'zIndex',
      value: 0,
    },
    {
      key: 'ios:z-0',
      duan: 'ios',
      keyitem: 'zIndex',
      value: 0,
    },
    {
      key: '端:k-v',
      duan: '端',
      keyitem: 'key',
      value: 'value',
    },
  ];
  return (
    <div className="table-box" style={{ width: '100%', position: 'relative' }}>
      {opArr.map((ele, index) => (
        <>
          {index === 0 ? (
            <li>
              <span className="header">Stylename</span>
              <span className="header">生效端</span>
              <span className="header">Properties</span>
            </li>
          ) : null}
          <li key={index}>
            <span className="name">{ele.key}</span>
            <span className="name">{ele.duan}</span>
            <span className="value">
              {ele.keyitem}: {ele.value}
            </span>
          </li>
        </>
      ))}
    </div>
  );
};

export default Index;
