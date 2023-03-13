import React, { useState } from 'react';

import { evaluate } from 'mathjs';
import { calculatorButtons } from './constants/calculatorButtons';

const App = () => {
  const [result, setResult] = useState('');

  const clear = () => {
    setResult('');
  };

  const deleteScreen = () => {
    if (result) {
      setResult(result.slice(0, -1));
    }
  };

  const calculate = () => {
    try {
      setResult(evaluate(result));
    } catch (error) {
      setResult(result);
    }
  };

  const handleClick = ({ target }) => {
    const { name } = target;
    switch (name) {
      case 'AC':
        clear();
        break;
      case 'DEL':
        deleteScreen();
        break;
      case '=':
        calculate();
        break;
      default:
        setResult(result.concat(name));
        break;
    }
  };

  return (
    <main>
      <section className='calculator'>
        <form className='calculator__form'>
          <input
            className='calculator__screen'
            type='text'
            value={result}
            disabled
          />
        </form>

        <div className='calculator__body'>
          {calculatorButtons.map((button, i) => {
            const { name, className, symbol } = button;

            return (
              <button
                key={i}
                onClick={handleClick}
                className={className}
                name={name}>
                {name || symbol}
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default App;
