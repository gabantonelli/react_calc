import React from 'react';
import styles from './ButtonsBlock.module.css';

import Button from './Button/Button';

const ButtonsBlock = () => {
  return (
    <div className={styles.calc__buttonsBlock}>
        <Button double>AC</Button>
        <Button>/</Button>
        <Button>*</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>-</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>+</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>=</Button>
    </div>
  )
}

export default ButtonsBlock;