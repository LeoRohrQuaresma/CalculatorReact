import React from 'react';
import styles from './Clear.module.css'

const Clear = ({ onClick }) => {
  return (
    <button className={styles.clear} onClick={onClick}>
      Clear
    </button>
  );
};

export default Clear;