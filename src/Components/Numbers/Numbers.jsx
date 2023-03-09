import React, { useState } from 'react';
import styles from './Numbers.module.css'

const Numbers = props => {


  const handleClickNumbers = (value) => {
    props.callback(value);
  };


  return (
    <>
      <div className={styles.numbers}>
        <button className={styles['numbers-item']} onClick={() => handleClickNumbers(1)}>1</button>
        <button className={styles['numbers-item']} onClick={() => handleClickNumbers(2)}>2</button>
        <button className={styles['numbers-item']} onClick={() => handleClickNumbers(3)} >3</button>
        <button className={styles['numbers-item']} onClick={() => handleClickNumbers(4)}>4</button>
        <button className={styles['numbers-item']} onClick={() => handleClickNumbers(5)}>5</button>
        <button className={styles['numbers-item']} onClick={() => handleClickNumbers(6)}>6</button>
        <button className={styles['numbers-item']} onClick={() => handleClickNumbers(7)}>7</button>
        <button className={styles['numbers-item']} onClick={() => handleClickNumbers(8)}>8</button>
        <button className={styles['numbers-item']} onClick={() => handleClickNumbers(9)}>9</button>
        <button className={styles['numbers-item']} onClick={() => handleClickNumbers(0)}>0</button>
        <button className={styles['numbers-item']} onClick={() => handleClickNumbers('.')}>.</button>
        <button className={styles['numbers-item']} onClick={props.onEqual}>=</button>
      </div>
    </>
  )
}

export default Numbers
