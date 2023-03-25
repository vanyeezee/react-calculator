import React, { useState } from "react";
import NumberPad from "./components/NumberPad";
import ArithmeticOperations from "./components/ArithmeticOperations";
import Display from "./components/Display";

function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [storedValue, setStoredValue] = useState("");
  const [operator, setOperator] = useState("");

  const handleNumberClick = (number: string) => {
    if (displayValue === "0") {
      setDisplayValue(number);
    } else {
      setDisplayValue((prev) => prev + number);
    }
  };

  const handleDecimalClick = () => {
    if (!displayValue.includes(".")) {
      setDisplayValue((prev) => prev + ".");
    }
  };

  const handleOperatorClick = (operator: string) => {
    setStoredValue(displayValue);
    setOperator(operator);
    setDisplayValue("0");
  };

  const handleEqualClick = () => {
    const currentValue = parseFloat(displayValue);
    const storedValueParsed = parseFloat(storedValue);
    let result = 0;

    switch (operator) {
      case "+":
        result = storedValueParsed + currentValue;
        break;
      case "-":
        result = storedValueParsed - currentValue;
        break;
      case "*":
        result = storedValueParsed * currentValue;
        break;
      case "/":
        result = storedValueParsed / currentValue;
        break;
      default:
        break;
    }

    setDisplayValue(result.toString());
    setStoredValue("");
    setOperator("");
  };

  const handleClearClick = () => {
    setDisplayValue("0");
    setStoredValue("");
    setOperator("");
  };

  return (
    <div className="App">
      <Display value={displayValue} />
      <ArithmeticOperations
        onOperatorClick={handleOperatorClick}
        onEqualClick={handleEqualClick}
      />
      <NumberPad handleNumberClick={handleNumberClick}
        handleDecimalClick={handleDecimalClick}
        handleClearClick={handleClearClick} />
    </div>
  );
}

export default App;
