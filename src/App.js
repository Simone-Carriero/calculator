import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('')

  const handleClick = () => {

  }

  return (
    <div className="calculator">
      <form className='calculator__form'>
        <input className='calculator__screen' type="text" value={ result } />
      </form>

      <div className="calculator__body">
        <button onClick={handleClick} className="calculator__button span">AC</button>
        <button onClick={handleClick} className="calculator__button">DEL</button>
        <button onClick={handleClick} className="calculator__button">&divide;</button>
        <button onClick={handleClick} className="calculator__button">1</button>
        <button onClick={handleClick} className="calculator__button">2</button>
        <button onClick={handleClick} className="calculator__button">3</button>
        <button onClick={handleClick} className="calculator__button">&lowast;</button>
        <button onClick={handleClick} className="calculator__button">4</button>
        <button onClick={handleClick} className="calculator__button">5</button>
        <button onClick={handleClick} className="calculator__button">6</button>
        <button onClick={handleClick} className="calculator__button">+</button>
        <button onClick={handleClick} className="calculator__button">7</button>
        <button onClick={handleClick} className="calculator__button">8</button>
        <button onClick={handleClick} className="calculator__button">9</button>
        <button onClick={handleClick} className="calculator__button">&minus;</button>
        <button onClick={handleClick} className="calculator__button">.</button>
        <button onClick={handleClick} className="calculator__button">0</button>
        <button onClick={handleClick} className="calculator__button span"> = </button>
      </div>
    </div>
  );
}

export default App;
