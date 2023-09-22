import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: 'aspect-0.5',
      value: { aspectRatio: 0.5 },
    },
    {
      key: 'aspect-square',
      value: { aspectRatio: 1 },
    },
    {
      key: 'aspect-video',
      value: { aspectRatio: '16 / 9' },
    },
    {
      key: 'aspect-number',
      value: { aspectRatio: 'number' },
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
