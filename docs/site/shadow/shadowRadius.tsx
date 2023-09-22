import React from 'react';
import '../index.css';
const Index = () => {
  const arr = {
    'shadow-radius-1': { shadowRadius: 1 },
    'shadow-radius-xs': { shadowRadius: 12 },
    'shadow-radius-sm': { shadowRadius: 14 },
    'shadow-radius-base': { shadowRadius: 16 },
    'shadow-radius-lg': { shadowRadius: 18 },
    'shadow-radius-xl': { shadowRadius: 20 },
    'shadow-radius-none': { shadowRadius: 0 },
    'shadow-radius-tight': { shadowRadius: 20 },
    'shadow-radius-snug': { shadowRadius: 22 },
    'shadow-radius-normal': { shadowRadius: 24 },
    'shadow-radius-relaxed': { shadowRadius: 26 },
    'shadow-radius-loose': { shadowRadius: 32 },
    'shadow-radius-[13px]': { shadowRadius: 13 },
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
