import React from 'react';
import '../index.css';
const Index = () => {
  const Arr = [
    {
      key: '',
      ketitem: ['borderRadius'],
    },
    {
      key: 't',
      ketitem: ['borderTopLeftRadius', 'borderTopRightRadius'],
    },
    {
      key: 'b',
      ketitem: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    },
    {
      key: 'l',
      ketitem: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    },
    {
      key: 'r',
      ketitem: ['borderTopRightRadius', 'borderBottomRightRadius'],
    },
    {
      key: 'tl',
      ketitem: ['borderTopLeftRadius'],
    },
    {
      key: 'tr',
      ketitem: ['borderTopRightRadius'],
    },
    {
      key: 'br',
      ketitem: ['borderBottomRightRadius'],
    },
    {
      key: 'bl',
      ketitem: ['borderBottomLeftRadius'],
    },
    {
      key: 'be',
      ketitem: ['borderBottomEndRadius'],
    },
    {
      key: 'bs',
      ketitem: ['borderBottomStartRadius'],
    },
    {
      key: 'te',
      ketitem: ['borderTopEndRadius'],
    },
    {
      key: 'ts',
      ketitem: ['borderTopStartRadius'],
    },
  ];
  const opacityArr = [
    { key: 'none', value: 0 },
    { key: 'sm', value: 2 },
    { key: 'normal', value: 4 },
    { key: 'md', value: 6 },
    { key: 'lg', value: 8 },
    { key: 'xl', value: 12 },
    { key: '2xl', value: 16 },
    { key: '3xl', value: 24 },
    { key: '4xl', value: 32 },
    { key: 'full', value: 9999 },
    { key: 'Number', value: 'Number * 2' },
  ];
  return (
    <div className="table-box" style={{ width: '100%', position: 'relative' }}>
      <li>
        <span className="header">Stylename</span>
        <span className="header">Properties</span>
      </li>
      {Arr.map((ele, index) => (
        <div key={index}>
          {opacityArr.map((item, ind) => (
            <li key={ind + '_' + index}>
              <span className="name">
                {ele.key ? `rounded-${ele.key}` : 'rounded'}-{item.key}
              </span>
              {ele.ketitem.map((it) => (
                <span className="value" key={item.value}>
                  {it}: {item.value}
                </span>
              ))}
            </li>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Index;
