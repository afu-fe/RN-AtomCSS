import React from 'react';
import '../index.css';
const Index = () => {
  const opArr = [
    {
      key: 'elevation-0',
      value: { elevation: 0 },
    },
    {
      key: 'elevation-5',
      value: { elevation: 5 },
    },
    {
      key: 'elevation-10',
      value: { elevation: 10 },
    },
    {
      key: 'elevation-15',
      value: { elevation: 15 },
    },
    {
      key: 'elevation-20',
      value: { elevation: 20 },
    },
    {
      key: 'elevation-25',
      value: { elevation: 25 },
    },
    {
      key: 'elevation-30',
      value: { elevation: 30 },
    },
    {
      key: 'elevation-35',
      value: { elevation: 35 },
    },
    {
      key: 'elevation-40',
      value: { elevation: 40 },
    },
    {
      key: 'elevation-45',
      value: { elevation: 45 },
    },
    {
      key: 'elevation-50',
      value: { elevation: 50 },
    },
    {
      key: 'elevation-55',
      value: { elevation: 55 },
    },
    {
      key: 'elevation-60',
      value: { elevation: 60 },
    },
    {
      key: 'elevation-65',
      value: { elevation: 65 },
    },
    {
      key: 'elevation-70',
      value: { elevation: 70 },
    },
    {
      key: 'elevation-75',
      value: { elevation: 75 },
    },
    {
      key: 'elevation-80',
      value: { elevation: 80 },
    },
    {
      key: 'elevation-85',
      value: { elevation: 85 },
    },
    {
      key: 'elevation-90',
      value: { elevation: 90 },
    },
    {
      key: 'elevation-95',
      value: { elevation: 95 },
    },
    {
      key: 'elevation-100',
      value: { elevation: 100 },
    },
    {
      key: 'elevation-`Number`',
      value: { elevation: 'Number' },
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
