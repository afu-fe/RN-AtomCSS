import React from 'react';
import '../index.css';
const Index = () => {
  const arr = {
    'text-shadow-radius-1': { textShadowRadius: 1 },
    'text-shadow-radius-xs': { textShadowRadius: 12 },
    'text-shadow-radius-sm': { textShadowRadius: 14 },
    'text-shadow-radius-base': { textShadowRadius: 16 },
    'text-shadow-radius-lg': { textShadowRadius: 18 },
    'text-shadow-radius-xl': { textShadowRadius: 20 },
    'text-shadow-radius-none': { textShadowRadius: 0 },
    'text-shadow-radius-tight': { textShadowRadius: 20 },
    'text-shadow-radius-snug': { textShadowRadius: 22 },
    'text-shadow-radius-normal': { textShadowRadius: 24 },
    'text-shadow-radius-relaxed': { textShadowRadius: 26 },
    'text-shadow-radius-loose': { textShadowRadius: 32 },
    'text-shadow-radius-[13px]': { textShadowRadius: 13 },
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
