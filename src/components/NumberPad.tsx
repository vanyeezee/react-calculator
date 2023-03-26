import React from "react";
import Button from "./Button";
import ClearButton from "./ClearButton";
import "../styles.css"
import OperatorButton from "./OperatorButton";

interface NumberPadProps {
  handleNumberClick: (number: string) => void;
  handleDecimalClick: () => void;
    onOperatorClick: (operator: string) => void;
    onEqualClick: () => void;
};

const NumberPad: React.FC<NumberPadProps> = ({
  handleNumberClick,
  handleDecimalClick,
    onOperatorClick,
    onEqualClick
}) => {

  return (
    <div className="number-pad">
      <div>
      <Button label="7" onClick={() => handleNumberClick("7")} />
      <Button label="8" onClick={() => handleNumberClick("8")} />
      <Button label="9" onClick={() => handleNumberClick("9")} />
      <OperatorButton operator="+" onClick={onOperatorClick} />
    </div>
    <div>
      <Button label="4" onClick={() => handleNumberClick("4")} />
      <Button label="5" onClick={() => handleNumberClick("5")} />
      <Button label="6" onClick={() => handleNumberClick("6")} />
      <OperatorButton operator="-" onClick={onOperatorClick} />
    </div>
    <div>
      <Button label="1" onClick={() => handleNumberClick("1")} />
      <Button label="2" onClick={() => handleNumberClick("2")} />
      <Button label="3" onClick={() => handleNumberClick("3")} />
      <OperatorButton operator="*" onClick={onOperatorClick} />
    </div>
    <div>
      <Button label="0" onClick={() => handleNumberClick("0")} />
      <Button label="." onClick={handleDecimalClick} />
      <OperatorButton operator="/" onClick={onOperatorClick} />
      <OperatorButton operator="=" onClick={onEqualClick} />
          </div>
  </div>
  );
};

export default NumberPad;
