import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    { key: 'basis-0', value: { flexBasis: 0 } },
    { key: 'basis-1', value: { flexBasis: 4 } },
    { key: 'basis-1/2', value: { flexBasis: '50%' } },
    { key: 'basis-1/3', value: { flexBasis: '33.33%' } },
    { key: 'basis-auto', value: { flexBasis: 'auto' } },
    { key: 'basis-full', value: { flexBasis: '100%' } },
    { key: 'basis-number', value: { flexBasis: 'number * 4' } },
    { key: 'flex-basis-0', value: { flexBasis: 0 } },
    { key: 'flex-basis-1', value: { flexBasis: 4 } },
    { key: 'flex-basis-1/2', value: { flexBasis: '50%' } },
    { key: 'flex-basis-1/3', value: { flexBasis: '33.33%' } },
    { key: 'flex-basis-auto', value: { flexBasis: 'auto' } },
    { key: 'flex-basis-full', value: { flexBasis: '100%' } },
    { key: 'flex-basis-number', value: { flexBasis: 'number * 4' } },
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
