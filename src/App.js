import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Keypad from './components/Keypad';
import { isArray } from 'util';
const App = () => {
  const [inputArr, setInputArr] = useState([]);
  const [currentInput, setCurrentInput] = useState('0');
  const isFloat = num => Number(num) === num && num % 1 !== 0;
  const decimal = numStr => {
    numStr = numStr.toString();
    const numIsFloat = isFloat(Number(numStr));
    const numStrArr = numStr.split('');
    if (!numIsFloat && numStrArr[numStrArr.length - 1] !== '.') {
      setCurrentInput(`${numStr}.`);
    }
  };
  const operatorArr = ['+', '/', '-', '*'];
  const calculate = () => {
    if (isValidNumber(currentInput)) {
      let calcArr = [...inputArr, currentInput];
      const calculated = eval(calcArr.join(''));
      setCurrentInput(calculated);
      setInputArr(['']);
    }
  };
  const clear = () => {
    setCurrentInput('0');
    setInputArr([]);
  };
  const isOperator = value => operatorArr.includes(value);
  const isValidNumber = value =>
    typeof Number(value) === 'number' && !isNaN(Number(value));
  const currentInputHandler = newInput => {
    if (isValidNumber(newInput)) {
      if (isOperator(currentInput)) {
        setInputArr([...inputArr, currentInput]);
        setCurrentInput(newInput);
      } else if (currentInput === '0') {
        setCurrentInput(`${newInput}`);
      } else {
        setCurrentInput(`${currentInput}${newInput}`);
      }
    } else if (isOperator(newInput)) {
      if (!isOperator(currentInput)) {
        setInputArr([...inputArr, currentInput]);
      }
      setCurrentInput(newInput);
    } else if (newInput === '.') {
      decimal(currentInput);
    } else if (newInput === '=') {
      calculate();
    }
  };

  return (
    <div className="App">
      <div>{inputArr.join(' ')}</div>
      <div id="display">{currentInput}</div>
      <Keypad clear={clear} currentInputHandler={currentInputHandler} />
    </div>
  );
};

export default App;
