import React from "react";
import {Button} from "./Button";
import "../styles.css"
import OperatorButton from "./OperatorButton";
import { AllClearButton, ClearButton } from "./ClearButton";

interface NumberPadProps {
  handleNumberClick: (number: string) => void;
  handleDecimalClick: () => void;
    onOperatorClick: (operator: string) => void;
  onEqualClick: () => void;
  onNumPadClick(numPadButton: string): void;
  handleAllClearClick: () => void;
  handleClearClick: () => void;
};

const NumberPad: React.FC<NumberPadProps> = ({
  onNumPadClick,
  onEqualClick,
  handleAllClearClick,
  handleClearClick
}) => {

  return (
    <div className="number-pad">
      <div>
      <Button label="7" onClick={() => onNumPadClick("7")} />
      <Button label="8" onClick={() => onNumPadClick("8")} />
      <Button label="9" onClick={() => onNumPadClick("9")} />
        <Button label="(" onClick={() => onNumPadClick("(")} />
        <AllClearButton onClick={handleAllClearClick} />

    </div>
      <div>
      <Button label="4" onClick={() => onNumPadClick("4")} />
      <Button label="5" onClick={() => onNumPadClick("5")} />
        <Button label="6" onClick={() => onNumPadClick("6")} />
        <Button label="0" onClick={() => onNumPadClick("0")} />
        <ClearButton onClick={handleClearClick} />

    </div>
    <div>
      <Button label="1" onClick={() => onNumPadClick("1")} />
      <Button label="2" onClick={() => onNumPadClick("2")} />
      <Button label="3" onClick={() => onNumPadClick("3")} />
        <Button label=")" onClick={() => onNumPadClick(")")} />
        <OperatorButton operator="." onOperatorClick={() => onNumPadClick(".")} />
    </div>
    <div>
    <OperatorButton operator="+" onOperatorClick={() => onNumPadClick("+")} />
    <OperatorButton operator="-" onOperatorClick={() => onNumPadClick("-")} />
    <OperatorButton operator="*" onOperatorClick={() => onNumPadClick("*")} />
    <OperatorButton operator="/" onOperatorClick={() => onNumPadClick("/")} />
      <OperatorButton operator="=" onOperatorClick={() => onEqualClick()} />
          </div>
  </div>
  );
};

export default NumberPad;
