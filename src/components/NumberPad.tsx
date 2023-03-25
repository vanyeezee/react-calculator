import React from 'react';

interface NumberPadProps {
  handleNumberClick: (number: string) => void;
    handleDecimalClick: () => void;
    handleClearClick: () => void;
}

const NumberPad = ({ handleNumberClick, handleDecimalClick, handleClearClick }: NumberPadProps) => {
  const handleButtonClick = (value: string) => {
    if (value === '.') {
      handleDecimalClick();
    } else {
        handleNumberClick(value);
    }
  };

  return (
    <div className="number-pad">
      <div className="row">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
      </div>
      <div className="row">
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
      </div>
      <div className="row">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
      </div>
      <div className="row">
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button className="number-button" onClick={() => handleClearClick()}>C</button>
      </div>
    </div>
  );
};

export default NumberPad;
