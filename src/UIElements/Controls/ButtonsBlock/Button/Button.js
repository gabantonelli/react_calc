import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
 const classes = [styles.calc__button, (props.double ? styles.span2 :'')];
  return (
    <button className={classes.join(' ')}>{ props.children }</button>
  )
}

export default Button