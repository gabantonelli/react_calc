import React from 'react';
import styles from './ButtonsBlock.module.css';

import Button from './Button/Button';

const ButtonsBlock = (props) => {
  return (
    <div className={styles.calc__buttonsBlock}>
        <Button id="clear" double click={props.resetInput}>AC</Button>
        <Button id="divide" click={()=>props.addInput("/")}>/</Button>
        <Button id="multiply" click={()=>props.addInput("*")}>*</Button>
        <Button id="seven" click={()=>props.addInput("7")}>7</Button>
        <Button id="eight" click={()=>props.addInput("8")}>8</Button>
        <Button id="nine" click={()=>props.addInput("9")}>9</Button>
        <Button id="subtract" click={()=>props.addInput("-")}>-</Button>
        <Button id="four" click={()=>props.addInput("4")}>4</Button>
        <Button id="five" click={()=>props.addInput("5")}>5</Button>
        <Button id="six" click={()=>props.addInput("6")}>6</Button>
        <Button id="add" click={()=>props.addInput("+")}>+</Button>
        <Button id="one" click={()=>props.addInput("1")}>1</Button>
        <Button id="two" click={()=>props.addInput("2")}>2</Button>
        <Button id="three" click={()=>props.addInput("3")}>3</Button>
        <Button id="equals" doubleV click={props.calculate}>=</Button>
        <Button id="zero" double click={()=>props.addInput("0")}>0</Button>
        <Button id="decimal" click={()=>props.addInput(".")}>.</Button>
    </div>
  )
}

export default ButtonsBlock;