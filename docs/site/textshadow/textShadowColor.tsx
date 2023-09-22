import React from 'react';
import { colorbase } from '../../../src/config/index';
import { addOpacity } from '../../../src/utils/index';
import '../index.css';
const Index = () => {
  const colorArr = Object.keys(colorbase);
  return (
    <div className="table-box" style={{ width: '100%', position: 'relative' }}>
      {colorArr.map((ele, index) => (
        <>
          {index === 0 ? (
            <li>
              <span className="header">Stylename</span>
              <span className="header">Properties</span>
            </li>
          ) : null}
          <li key={index}>
            <span className="name">test-shadow-{ele}</span>
            <span className="value">textShadowColor: {colorbase[ele]}</span>
          </li>
          <li key={index}>
            <span className="name">test-shadow-{ele}-`Number`</span>
            <span className="value">
              textShadowColor: {addOpacity(colorbase[ele], 'Number')}
            </span>
          </li>
        </>
      ))}
    </div>
  );
};

export default Index;
