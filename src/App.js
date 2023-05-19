import React, { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import Display from './Components/Display';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    const value = e.target.value;
    switch (value) {
      case '=': {
        try {
          setResult(eval(input).toString());
        } catch (error) {
          setResult('Error');
        }
        break;
      }
      case 'C': {
        setInput('');
        setResult('');
        break;
      }
      case '+/-': {
        setInput(input * -1);
        break;
      }
      default: {
        setInput(input + value);
        break;
      }
    }
  }

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      
      <div className="buttons">
        <Button id="function" value="C" onClick={handleClick} />
        <Button id="function" value="+/-" onClick={handleClick} />
        <Button id="function" value="%" onClick={handleClick} />
        <Button id="operator" value="/" onClick={handleClick} />

        <Button value="7" onClick={handleClick} />
        <Button value="8" onClick={handleClick} />
        <Button value="9" onClick={handleClick} />
        <Button id="operator" value="*" onClick={handleClick} />

        <Button value="4" onClick={handleClick} />
        <Button value="5" onClick={handleClick} />
        <Button value="6" onClick={handleClick} />
        <Button id="operator" value="-" onClick={handleClick} />

        <Button value="1" onClick={handleClick} />
        <Button value="2" onClick={handleClick} />
        <Button value="3" onClick={handleClick} />
        <Button id="operator" value="+" onClick={handleClick} />

        <Button value="0" onClick={handleClick} />
        <Button value="." onClick={handleClick} />
        <Button id="equal" value="=" onClick={handleClick} />
      </div>
    </div>
  );
}

export default App;