import React, {useState} from 'react';
import styles from './App.module.css';

import Display from './UIElements/Display/Display';
import ButtonsBlock from './UIElements/Controls/ButtonsBlock/ButtonsBlock';

const App = () => {
  const [inputs, setInputs] = useState(['0']);

  const addInput = newInput => {
    
    setInputs(prevState =>{
      const lastEntry = prevState[prevState.length-1];
      // check if we can attach to last entry
        if ((/[\d\.]$/).test(lastEntry) && (/[\d\.]$/).test(newInput)){
          // if there is only a 0 and we add a digit remove 0
          if (lastEntry==='0' && (/^[0-9]$/).test(newInput)) {
            return [newInput];
          }
          //if there is already a . we can't add another one
          if ((/\./).test(lastEntry) && newInput === '.') {
            return prevState;
          }
          const newArr = [...prevState];
            newArr[newArr.length-1] = lastEntry + newInput;
            return newArr;
        }
      // check if we can attach another operator to an operator
      if ((/[+-/*]/).test(lastEntry) && (/^[+-/*]$/).test(newInput)){
        const newArr = [...prevState];
        newArr[newArr.length-1] = lastEntry + newInput;
        return newArr;
      }
      //if we cannot attach add new input as new entry
      return [...prevState, newInput]
    } );
  }

  const resetInput = () => {
    setInputs(["0"]);
  }

  const calculate = () => {
    let operator = "+";
    const result = inputs.reduce((accumulator, item)=>{
      if (!isNaN(parseFloat(item))) {
        switch (operator) {
          case "+":
            return accumulator + parseFloat(item);
            break;
          case "-":
            return accumulator - parseFloat(item);
            break;
          case "/":
            return accumulator / parseFloat(item);
            break;
          case "*":
            return accumulator * parseFloat(item);
            break;
          default:
            return accumulator + parseFloat(item);
        }
      } else {
        if (item.length>0 && item.charAt(item.length-1) === "-" ) {
          operator = item.charAt(item.length-2);
        } else {
          operator = item.charAt(item.length-1);
        }
        return accumulator;
      }
    },0);
    setInputs([result]);
  }
  
  return (
    <div className={styles.calc__container}>
      <Display>{inputs.join(' ')}</Display>
      <ButtonsBlock addInput={addInput} resetInput={resetInput} calculate={calculate}/>
    </div>
  )
}

export default App;
