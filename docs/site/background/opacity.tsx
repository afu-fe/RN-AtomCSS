import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: 'bg-opacity-0',
      value: { opacity: 0 },
    },
    {
      key: 'bg-opacity-5',
      value: { opacity: 0.05 },
    },
    {
      key: 'bg-opacity-10',
      value: { opacity: 0.1 },
    },
    {
      key: 'bg-opacity-15',
      value: { opacity: 0.15 },
    },
    {
      key: 'bg-opacity-20',
      value: { opacity: 0.2 },
    },
    {
      key: 'bg-opacity-25',
      value: { opacity: 0.25 },
    },
    {
      key: 'bg-opacity-30',
      value: { opacity: 0.3 },
    },
    {
      key: 'bg-opacity-35',
      value: { opacity: 0.35 },
    },
    {
      key: 'bg-opacity-40',
      value: { opacity: 0.4 },
    },
    {
      key: 'bg-opacity-45',
      value: { opacity: 0.45 },
    },
    {
      key: 'bg-opacity-50',
      value: { opacity: 0.5 },
    },
    {
      key: 'bg-opacity-55',
      value: { opacity: 0.55 },
    },
    {
      key: 'bg-opacity-60',
      value: { opacity: 0.6 },
    },
    {
      key: 'bg-opacity-65',
      value: { opacity: 0.65 },
    },
    {
      key: 'bg-opacity-70',
      value: { opacity: 0.7 },
    },
    {
      key: 'bg-opacity-75',
      value: { opacity: 0.75 },
    },
    {
      key: 'bg-opacity-80',
      value: { opacity: 0.8 },
    },
    {
      key: 'bg-opacity-85',
      value: { opacity: 0.85 },
    },
    {
      key: 'bg-opacity-90',
      value: { opacity: 0.9 },
    },
    {
      key: 'bg-opacity-95',
      value: { opacity: 0.95 },
    },
    {
      key: 'bg-opacity-100',
      value: { opacity: 1 },
    },
    {
      key: 'bg-opacity-`Number`',
      value: { opacity: 'Number / 100' },
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
