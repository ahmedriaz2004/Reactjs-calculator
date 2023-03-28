import React, { useState } from 'react';
 
function Calculator() {
  const [result, setResult] = useState('');
  const [operator, setOperator] = useState(null);
  const [operand, setOperand] = useState(null);

  const handleDigitClick = (digit) => {
    setResult(prevResult => prevResult === '0' ? digit : prevResult + digit);
  };

  const handleOperatorClick = (operator) => {
    setOperator(operator);
    setOperand(result);
    setResult('0');
  };

  const handleEqualClick = () => {
    const left = parseFloat(operand);
    const right = parseFloat(result);

    switch (operator) {
      case '+':
        setResult((left + right).toString());
        break;
      case '-':
        setResult((left - right).toString());
        break;
      case 'x':
        setResult((left * right).toString());
        break;
      case '/':
        setResult((left / right).toString());
        break;
      default:
        break;
    }

    setOperator(null);
    setOperand(null);
  };

  const handleClearClick = () => {
    setResult('0');
    setOperator(null);
    setOperand(null);
  };

  return (
    <div>
      <input className='input' type="text" value={result}  />
      <div className='btn-main'>
      <div>
        <button onClick={() => handleDigitClick('1')}>1</button>
        <button onClick={() => handleDigitClick('2')}>2</button>
        <button onClick={() => handleDigitClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('+')} style={{color:"black"}}>+</button>
      </div>
      <div>
        <button  onClick={() => handleDigitClick('4')}>4</button>
        <button  onClick={() => handleDigitClick('5')}>5</button>
        <button  onClick={() => handleDigitClick('6')}>6</button>
        <button  onClick={() => handleOperatorClick('-')} style={{color:"black"}}>-</button>
      </div>
      <div>
        <button onClick={() => handleDigitClick('7')}>7</button>
        <button  onClick={() => handleDigitClick('8')}>8</button>
        <button  onClick={() => handleDigitClick('9')}>9</button>
        <button  onClick={() => handleOperatorClick('x')} style={{color:"black"}}>x</button>
      </div>
      <div>
        <button  onClick={() => handleClearClick()} style={{color:"black"}}>Clear</button>
        <button  onClick={() => handleDigitClick('0')}>0</button>
        <button  onClick={() => handleOperatorClick('/')} style={{color:"black"}}>/</button>
        <button onClick={() => handleEqualClick()} style={{color:"black"}}>=</button>
      </div>
    </div>
    </div>
  );
}

export default Calculator;