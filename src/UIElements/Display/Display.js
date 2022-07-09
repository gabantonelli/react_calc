import React from 'react';
import styles from './Display.module.css';

const Display = (props) => {
  return (
    <div id="display" className={styles.calc__display}>{props.children}</div>
  )
}

export default Display;