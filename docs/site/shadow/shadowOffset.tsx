import React from 'react';
import '../index.css';
const Index = () => {
  const arr = {
    'shadow-offset-1': { shadowOffset: { width: 1, height: 1 } },
    'shadow-offset-number': {
      shadowOffset: { width: 'number', height: 'number' },
    },
    'shadow-offset-xs': { shadowOffset: { width: 12, height: 12 } },
    'shadow-offset-sm': { shadowOffset: { width: 14, height: 14 } },
    'shadow-offset-base': { shadowOffset: { width: 16, height: 16 } },
    'shadow-offset-lg': { shadowOffset: { width: 18, height: 18 } },
    'shadow-offset-xl': { shadowOffset: { width: 20, height: 20 } },
    'shadow-offset-none': { shadowOffset: { width: 16, height: 16 } },
    'shadow-offset-tight': { shadowOffset: { width: 20, height: 20 } },
    'shadow-offset-snug': { shadowOffset: { width: 22, height: 22 } },
    'shadow-offset-normal': { shadowOffset: { width: 24, height: 24 } },
    'shadow-offset-relaxed': { shadowOffset: { width: 26, height: 26 } },
    'shadow-offset-loose': { shadowOffset: { width: 32, height: 32 } },
    'shadow-offset-[333]': { shadowOffset: { width: 333, height: 333 } },
    'shadow-offset-[23]/[33]': { shadowOffset: { width: 23, height: 33 } },
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
