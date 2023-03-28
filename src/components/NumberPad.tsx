import React from "react";
import {Button} from "./Button";
import "../styles.css"
import OperatorButton from "./OperatorButton";
import { AllClearButton, ClearButton } from "./ClearButton";

interface NumberPadProps {
  // Props passed down from parent component
  handleNumberClick: (number: string) => void; // function to handle number button click
  handleDecimalClick: () => void; // function to handle decimal button click
  onOperatorClick: (operator: string) => void; // function to handle operator button click
  onEqualClick: () => void; // function to handle equal button click
  onNumPadClick(numPadButton: string): void; // function to handle number pad button click
  handleAllClearClick: () => void; // function to handle all clear button click
  handleClearClick: () => void; // function to handle clear button click
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
