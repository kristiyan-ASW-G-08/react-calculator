import React, { useState } from 'react';
import Key from './Key';
const Keypad = ({ currentInputHandler, clear }) => {
  const numbers = [
    { name: 'zero', value: 0 },
    { name: 'one', value: 1 },
    { name: 'two', value: 2 },
    { name: 'three', value: 3 },
    { name: 'four', value: 4 },
    { name: 'five', value: 5 },
    { name: 'six', value: 6 },
    { name: 'seven', value: 7 },
    { name: 'eight', value: 8 },
    { name: 'nine', value: 9 }
  ];
  const operators = [
    { name: 'add', value: '+' },
    { name: 'subtract', value: '-' },
    { name: 'multiply', value: '*' },
    { name: 'divide', value: '/' },
    { name: 'equals', value: '=' }
  ];
  return (
    <div className="keypad">
      <div className="keypad-buttons">
        {operators.map(operatorKey => (
          <Key
            id={operatorKey.name}
            key={operatorKey.name}
            keyItem={operatorKey}
            currentInputHandler={currentInputHandler}
          />
        ))}
      </div>
      <div className="keypad-buttons">
        {numbers.map(numKey => (
          <Key
            id={numKey.name}
            key={numKey.name}
            keyItem={numKey}
            currentInputHandler={currentInputHandler}
          />
        ))}
        <Key
          id="decimal"
          key={'decimal'}
          keyItem={{ name: 'decimal', value: '.' }}
          currentInputHandler={currentInputHandler}
        />
        <Key
          id="clear"
          key={'clear'}
          keyItem={{ name: 'AC', value: 'AC' }}
          currentInputHandler={clear}
        />
      </div>
    </div>
  );
};

export default Keypad;
