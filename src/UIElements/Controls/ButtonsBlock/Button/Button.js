import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
 const classes = [styles.calc__button];
 if (props.double) {
  classes.push(styles.span2);
 }
 if (props.doubleV) {
  classes.push(styles.spanv2);
 }
  return (
    <button className={classes.join(' ')} onClick={props.click}>{ props.children }</button>
  )
}

export default Button