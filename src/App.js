import React, { useState } from 'react';

import { evaluate } from 'mathjs';

function App() {
  const [result, setResult] = useState('');

  const handleClick = ({ target }) => {
    setResult(result.concat(target.name));
  };

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
          <button
            onClick={clear}
            className='calculator__button span ac'>
            AC
          </button>
          <button
            onClick={deleteScreen}
            className='calculator__button'>
            DEL
          </button>
          <button
            name='/'
            onClick={handleClick}
            className='calculator__button'>
            &divide;
          </button>

          <button
            name='1'
            onClick={handleClick}
            className='calculator__button'>
            1
          </button>
          <button
            name='2'
            onClick={handleClick}
            className='calculator__button'>
            2
          </button>
          <button
            name='3'
            onClick={handleClick}
            className='calculator__button'>
            3
          </button>
          <button
            name='*'
            onClick={handleClick}
            className='calculator__button'>
            &lowast;
          </button>

          <button
            name='4'
            onClick={handleClick}
            className='calculator__button'>
            4
          </button>
          <button
            name='5'
            onClick={handleClick}
            className='calculator__button'>
            5
          </button>
          <button
            name='6'
            onClick={handleClick}
            className='calculator__button'>
            6
          </button>
          <button
            name='+'
            onClick={handleClick}
            className='calculator__button'>
            +
          </button>

          <button
            name='7'
            onClick={handleClick}
            className='calculator__button'>
            7
          </button>
          <button
            name='8'
            onClick={handleClick}
            className='calculator__button'>
            8
          </button>
          <button
            name='9'
            onClick={handleClick}
            className='calculator__button'>
            9
          </button>
          <button
            name='-'
            onClick={handleClick}
            className='calculator__button'>
            &minus;
          </button>

          <button
            name='.'
            onClick={handleClick}
            className='calculator__button'>
            .
          </button>
          <button
            name='0'
            onClick={handleClick}
            className='calculator__button'>
            0
          </button>
          <button
            onClick={calculate}
            className='calculator__button span'>
            {' '}
            ={' '}
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
