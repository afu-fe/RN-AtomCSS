import React from 'react';
import '../index.css';
const Index = () => {
  const arr = {
    'shadow-opacity-1': { shadowOpacity: 0.01 },
    'shadow-opacity-50': { shadowOpacity: 0.5 },
    'shadow-opacity-Number': { shadowOpacity: 'Number/100' },
  };
  return (
    <div className="table-box" style={{ width: '100%', position: 'relative' }}>
      {Object.keys(arr).map((ele, index) => (
        <>
          {index === 0 ? (
            <li>
              <span className="header">Stylename</span>
              <span className="header">Properties</span>
            </li>
          ) : null}
          <li key={index}>
            <span className="name">{ele}</span>
            <span className="value">{JSON.stringify(arr[ele])}</span>
          </li>
        </>
      ))}
    </div>
  );
};

export default Index;
