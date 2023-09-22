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
            <span className="name">bg-{ele}</span>
            <span className="value">backgroundColor: {colorbase[ele]}</span>
            <span
              style={{
                background: colorbase[ele],
                width: '100px',
                height: '30px',
              }}
            ></span>
          </li>
          <li key={index}>
            <span className="name">bg-{ele}-`Number`</span>
            <span className="value">
              backgroundColor: {addOpacity(colorbase[ele], 'Number')}
            </span>
            <span
              style={{
                background: addOpacity(colorbase[ele], 100),
                width: '100px',
                height: '30px',
              }}
            ></span>
          </li>
        </>
      ))}
    </div>
  );
};

export default Index;
