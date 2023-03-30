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
  const [renderHistoryModal, setRenderHistoryModal] = useState<boolean>(false); // boolean to control whether to display the history modal

  // Use CalculatorEngine component
  const {
    displayValue,
    setDisplayValue,
    memory,
    setMemory,
    history,
    handleNumPadClick,
    handleEqualClick,
  } = CalculatorEngine();

    // Function to handle the AC button click
    const handleAllClearClick = () => {
      setDisplayValue("0");
    };
  
    // Function to handle the C button click
    const handleClearClick = () => {
      if (displayValue === "0") {
        return;
      }
    
      if (displayValue.length === 1) {
        setDisplayValue("0");
      } else {
        setDisplayValue((prev) => prev.slice(0, -1));
      }
    };

   //function logs the current display value to the console.
   function handleDisplayInput(): void {
    console.log(displayValue); // Log the current display value
  }

  //function calculates the percentage of the current display value and updates the display value with the result.
  function evaluatePecentage(): void {
    setDisplayValue((prev) => Math.abs(parseFloat(prev) / 100).toString()); // Set the display value to the percentage of the current display value
  }

  //Function updates the history and toggles the display of the history modal when the history button is clicked.
  function handleHistoryButton(): void {
    if (renderHistoryModal) {
      updateHistory(); // Fetch and update the history if the modal is bein closed
    }
    setRenderHistoryModal(!renderHistoryModal); // Toggle the modal display
  }

    /** Function fetches the calculation history from a cloud API using GraphQL and updates
   * the history.current array by concatenating the cloud history with the local history array.
   * If there's an error, it logs the error to the console. */
    async function updateHistory() {
      try {
        // Check if the user is authenticated
        const user = await Auth.currentUserInfo();
        const userId = user.attributes.sub; // Get the user's unique ID
  
        // Query the backend to fetch the calculation history for the current user
        const cloudHistoryData: any =
          await API.graphql<ListCalculationHistoriesQuery>(
            graphqlOperation(listCalculationHistories, {
              filter: { userId: { eq: userId } },
            })
          );
        const cloudHistory =
          cloudHistoryData.data?.listCalculationHistories.items;
  
        // Add the fetched history to the current history array
        history.current = history.current.concat(
          cloudHistory.map((item: CalculationHistory) => item.expression)
        );
      } catch (e) {
        console.log("Error: ", e);
      }
    }


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
