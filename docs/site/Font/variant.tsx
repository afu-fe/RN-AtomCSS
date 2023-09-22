import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: 's-caps',
      value: { fontVariant: 'small-caps' },
    },
    {
      key: 'o-nums',
      value: { fontVariant: 'oldstyle-nums' },
    },
    {
      key: 'l-nums',
      value: { fontVariant: 'lining-nums' },
    },
    {
      key: 't-nums',
      value: { fontVariant: 'tabular-nums' },
    },
    {
      key: 'p-nums',
      value: { fontVariant: 'proportional-nums' },
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
