import React from 'react';

interface ArithmeticOperationsProps {
    onOperatorClick: (operator : string) => void;
    onEqualClick: () => void;
}

const ArithmeticOperations = ({
    onOperatorClick,
    onEqualClick,
} : ArithmeticOperationsProps) => {
  return (
    <div className="arithmetic-operations">
      <button className="button" onClick={() => onOperatorClick('+')}>
        +
      </button>
      <button className="button" onClick={() => onOperatorClick('-')}>
        -
      </button>
      <button className="button" onClick={() => onOperatorClick('*')}>
        ×
      </button>
      <button className="button" onClick={() => onOperatorClick('/')}>
        ÷
          </button>
          <button className="button" onClick={onEqualClick}>
        =
          </button>
          
    </div>
  );
};

export default ArithmeticOperations;
