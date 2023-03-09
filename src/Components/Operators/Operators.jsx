import React from 'react';
import styles from './Operators.module.css'

const Operators = props => {
  const handleClickOperator = operator => {
    props.onClick(operator);
  };

  return (
    <>
      <div className={styles.operators}>
        <button className={styles['operators-item']} onClick={() => handleClickOperator('+')}>+</button>
        <button className={styles['operators-item']} onClick={() => handleClickOperator('-')}>-</button>
        <button className={styles['operators-item']} onClick={() => handleClickOperator('*')}>*</button>
        <button className={styles['operators-item']} onClick={() => handleClickOperator('/')}>/</button>
      </div>
    </>
  );
};

export default Operators;
