import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: 'static',
      value: { position: 'static' },
    },
    {
      key: 'fixed',
      value: { position: 'fixed' },
      du: 'android',
    },
    {
      key: 'absolute',
      value: { position: 'absolute' },
    },
    {
      key: 'relative',
      value: { position: 'relative' },
    },
    {
      key: 'sticky',
      value: { position: 'sticky' },
      du: 'android',
    },
  ];
  return (
    <div className="table-box" style={{ width: '100%', position: 'relative' }}>
      <li>
        <span className="header">Stylename</span>
        <span className="header">Properties</span>
        <span className="header">不支持</span>
      </li>
      {opArr.map((ele, index) => (
        <li key={index}>
          <span className="name">{ele.key}</span>
          <span className="value">
            {Object.keys(ele.value)[0]}: {ele.value[Object.keys(ele.value)[0]]}
          </span>
          <span className="novalue">{ele.du}</span>
        </li>
      ))}
    </div>
  );
};

export default Index;
