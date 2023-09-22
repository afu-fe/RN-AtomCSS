import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: '',
      ketitem: 'Width',
    },
    {
      key: 't',
      ketitem: 'TopWidth',
    },
    {
      key: 'b',
      ketitem: 'BottomWidth',
    },
    {
      key: 'l',
      ketitem: 'LeftWidth',
    },
    {
      key: 'r',
      ketitem: 'RightWidth',
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
            <span className="name">
              {ele.key ? `border-${ele.key}` : 'border'}-`Number`
            </span>
            <span className="value">border{ele.ketitem}:`Number`</span>
            <span className="novalue">{ele.du}</span>
          </li>
        </>
      ))}
    </div>
  );
};

export default Index;
