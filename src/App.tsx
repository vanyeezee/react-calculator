import React, { useRef, useState } from "react";
import NumberPad from "./components/NumberPad";
import Display from "./components/Display";
import "./styles.css";
import MemoryFunctions from "./components/MemoryFunctions";
import AdvancedFunctions from "./components/AdvancedFunctions";
import { Button } from "./components/Button";
import History from "./components/History";
import { Amplify, API, graphqlOperation, Auth } from "aws-amplify";
import { createCalculationHistory } from "./graphql/mutations";
import { listCalculationHistories } from "./graphql/queries";
import awsmobile from "./aws-exports";
import NavMenu from "./components/NavMenu";
import { CalculationHistory, ListCalculationHistoriesQuery } from "./API";
import { CalculatorEngine } from "./components/CalculatorEngine";

function App() {
  const history = useRef<string[]>([]); // an array of strings to store calculation history
  const [renderHistoryModal, setRenderHistoryModal] = useState<boolean>(false); // boolean to control whether to display the history modal

  // Use CalculatorEngine component
  const {
    displayValue,
    setDisplayValue,
    memory,
    setMemory,
    handleNumPadClick,
    handleEqualClick,
    handleAllClearClick,
    handleClearClick,
    handleHistoryButton,
    handleDisplayInput,
    evaluatePecentage,
  } = CalculatorEngine();



  // Function to handle number pad button clicks
 

  return (
    <div style={{ backgroundColor: "orange" }}>
      <NavMenu />
      <Button label="History" onClick={handleHistoryButton} />
      {renderHistoryModal && (
        <div className="modal">
          <History expression={history.current} />
          <button onClick={handleHistoryButton}>Close</button>
        </div>
      )}

      <div className="calculator">
        <div className="display-container">
          <Display value={displayValue} onChange={handleDisplayInput} />
        </div>
        <div className="number-pad-container">
          <MemoryFunctions
            onMemoryAdd={function (): void {
              setMemory((prev) => prev + parseFloat(displayValue));
            }}
            onMemorySubtract={function (): void {
              setMemory((prev) => prev - parseFloat(displayValue));
            }}
            onMemoryClear={function (): void {
              setMemory(0);
            }}
            onMemoryRecall={function (): void {
              setDisplayValue(memory.toString());
            }}
          />
          <AdvancedFunctions
            calcPercentage={evaluatePecentage}
            onOperatorClick={handleNumPadClick}
          />
          <NumberPad
            onEqualClick={handleEqualClick}
            onNumPadClick={handleNumPadClick}
            handleAllClearClick={handleAllClearClick}
            handleClearClick={handleClearClick}
            handleNumberClick={function (number: string): void {
              throw new Error("Function not implemented.");
            }}
            handleDecimalClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            onOperatorClick={function (operator: string): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
