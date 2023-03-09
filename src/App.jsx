import styles from './App.module.css'
import { useState, useEffect } from "react";
import Numbers from './Components/Numbers/Numbers';
import Operators from './Components/Operators/Operators';
import Clear from './Components/Clear/Clear';
import Display from './Components/Display/Display';

const App = () => {
  const [value, setValue] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');
  const [displayedResult, setDisplayedResult] = useState(false);


  function handleClick(newValue) {
    if (displayedResult) {
      setValue('');
      setOperator('');
      setResult('');
      setDisplayedResult(false);
    }
    setValue(prevValue => prevValue + newValue);
  }
  

  function handleOperatorClick(newOperator) {
    if (value) {
      if (operator) {
        handleEquals();
      }
      setOperator(newOperator);
      setResult(value);
      setValue('');
    }
  }
  
  function handleClear() {
    setValue('');
    setOperator('');
    setResult('');
  }

  function handleEquals() {
    if (operator && value) {
      const num1 = parseFloat(result);
      const num2 = parseFloat(value);
      let newResult;

      switch (operator) {
        case '+':
          newResult = num1 + num2;
          break;
        case '-':
          newResult = num1 - num2;
          break;
        case '*':
          newResult = num1 * num2;
          break;
        case '/':
          newResult = num1 / num2;
          break;
        default:
          newResult = '';
      }

      setValue(newResult);
      setOperator('');
      setResult('');
      setDisplayedResult(true);

    }
  }



  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <Display value={value} result={result} />
        <div className='buttons'>
          {/* <input type='text' value={value} disabled /> */}
          <Operators onClick={handleOperatorClick} />
          <Numbers callback={handleClick} onEqual={handleEquals} />
          <Clear onClick={handleClear} />

        </div>
      </div>
    </div>
  );
};

export default App

