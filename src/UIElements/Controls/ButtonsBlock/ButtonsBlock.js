import React from 'react';
import styles from './ButtonsBlock.module.css';

import Button from './Button/Button';

const ButtonsBlock = (props) => {
  return (
    <div className={styles.calc__buttonsBlock}>
        <Button double click={props.resetInput}>AC</Button>
        <Button click={()=>props.addInput("/")}>/</Button>
        <Button click={()=>props.addInput("*")}>*</Button>
        <Button click={()=>props.addInput("7")}>7</Button>
        <Button click={()=>props.addInput("8")}>8</Button>
        <Button click={()=>props.addInput("9")}>9</Button>
        <Button click={()=>props.addInput("-")}>-</Button>
        <Button click={()=>props.addInput("4")}>4</Button>
        <Button click={()=>props.addInput("5")}>5</Button>
        <Button click={()=>props.addInput("6")}>6</Button>
        <Button click={()=>props.addInput("+")}>+</Button>
        <Button click={()=>props.addInput("1")}>1</Button>
        <Button click={()=>props.addInput("2")}>2</Button>
        <Button click={()=>props.addInput("3")}>3</Button>
        <Button doubleV click={props.calculate}>=</Button>
        <Button double click={()=>props.addInput("0")}>0</Button>
        <Button click={()=>props.addInput(".")}>.</Button>
    </div>
  )
}

export default ButtonsBlock;