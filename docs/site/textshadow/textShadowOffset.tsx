import React from 'react';
import '../index.css';
const Index = () => {
  const arr = {
    'test-shadow-offset-1': { textShadowOffset: { width: 1, height: 1 } },
    'test-shadow-offset-number': {
      textShadowOffset: { width: 'number', height: 'number' },
    },
    'test-shadow-offset-xs': { textShadowOffset: { width: 12, height: 12 } },
    'test-shadow-offset-sm': { textShadowOffset: { width: 14, height: 14 } },
    'test-shadow-offset-base': { textShadowOffset: { width: 16, height: 16 } },
    'test-shadow-offset-lg': { textShadowOffset: { width: 18, height: 18 } },
    'test-shadow-offset-xl': { textShadowOffset: { width: 20, height: 20 } },
    'test-shadow-offset-none': { textShadowOffset: { width: 16, height: 16 } },
    'test-shadow-offset-tight': { textShadowOffset: { width: 20, height: 20 } },
    'test-shadow-offset-snug': { textShadowOffset: { width: 22, height: 22 } },
    'test-shadow-offset-normal': {
      textShadowOffset: { width: 24, height: 24 },
    },
    'test-shadow-offset-relaxed': {
      textShadowOffset: { width: 26, height: 26 },
    },
    'test-shadow-offset-loose': { textShadowOffset: { width: 32, height: 32 } },
    'test-shadow-offset-[333]': {
      textShadowOffset: { width: 333, height: 333 },
    },
    'test-shadow-offset-[23]/[33]': {
      textShadowOffset: { width: 23, height: 33 },
    },
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
