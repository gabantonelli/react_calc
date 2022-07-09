import React, {useState} from 'react';
import styles from './App.module.css';

import Display from './UIElements/Display/Display';
import ButtonsBlock from './UIElements/Controls/ButtonsBlock/ButtonsBlock';

const App = () => {
  const [inputs, setInputs] = useState(['0']);



  return (
    <div className={styles.calc__container}>
      <Display>{inputs.join(' ')}</Display>
      <ButtonsBlock />
    </div>
  )
}

export default App;
