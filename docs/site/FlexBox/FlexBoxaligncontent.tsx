import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: 'content-center',
      value: { alignContent: 'center' },
    },
    {
      key: 'content-start',
      value: { alignContent: 'flex-start' },
    },
    {
      key: 'content-end',
      value: { alignContent: 'flex-end' },
    },
    {
      key: 'content-between',
      value: { alignContent: 'space-between' },
    },
    {
      key: 'content-around',
      value: { alignContent: 'space-around' },
    },
    {
      key: 'content-evenly',
      value: { alignContent: 'space-evenly' },
      du: 'android',
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
            <span className="name">{ele.key}</span>
            <span className="value">
              {Object.keys(ele.value)[0]}:{' '}
              {ele.value[Object.keys(ele.value)[0]]}
            </span>
            <span className="novalue">{ele.du}</span>
          </li>
        </>
      ))}
    </div>
  );
};

export default Index;
