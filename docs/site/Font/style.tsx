import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: 'italic',
      value: { fontStyle: 'italic' },
    },
    {
      key: 'not-italic',
      value: { fontStyle: 'normal' },
    },
    {
      key: 'include-font-padding',
      value: { includeFontPadding: 'true' },
    },
    {
      key: 'remove-font-padding',
      value: { includeFontPadding: 'false' },
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
