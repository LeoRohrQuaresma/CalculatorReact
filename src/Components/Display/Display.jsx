import React from 'react'
import styles from './Display.module.css'

const Display = (props) => {
  return (
     <div className={styles.display}>
    <div className={styles['display-text']}>{props.result}</div>
    <div className={styles['display-text']}>{props.value || '0'}</div>
  </div>
  )
}

export default Display
