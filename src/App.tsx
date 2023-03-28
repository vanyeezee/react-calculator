import React, { useRef, useState } from "react";
import NumberPad from "./components/NumberPad";
import Display from "./components/Display";
import "./styles.css"
import '@aws-amplify/ui-react/styles.css';
import MemoryFunctions from "./components/MemoryFunctions";
import AdvancedFunctions from "./components/AdvancedFunctions";
import {Button} from "./components/Button";
import History from "./components/History";
import { Amplify, API, graphqlOperation, Auth } from "aws-amplify";
import { createCalculationHistory } from "./graphql/mutations";
import { listCalculationHistories } from "./graphql/queries";
import awsmobile from "./aws-exports";
import NavMenu from "./components/NavMenu";
import { CalculationHistory, ListCalculationHistoriesQuery } from "./API";
Amplify.configure(awsmobile);


function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const history = useRef<string[]>([]);
  const [renderHistoryModal, setRenderHistoryModal] = useState<boolean>(false);
  const [memory, setMemory] = useState<number>(0);
  const [result, setResult] = useState<string>("")
  const [expression, setExpression] = useState<string>("");


  const addCalculationHistory = async () => {
    try {
      // Check if the user is authenticated
      const user = await Auth.currentUserInfo();
  
      const userId = user.attributes.sub;

      
      // Create a new CalculationHistory item
      const createdAt = new Date().toISOString();
      const newHistory = {
        userId,
        expression,
        result,
        createdAt,
      };
      console.log("INPUT OBJ: ", newHistory);
      

      // Save the new item to the database
      await API.graphql(graphqlOperation(createCalculationHistory, { input: newHistory }));

      console.log("Successfully added CalculationHistory item!");
    } catch (error) {
      console.error("Error adding CalculationHistory item:", error);
    }
  };
  
  const handleNumPadClick = (numPadButton: string) => {
    if (displayValue === "0") {
      console.log("first input")
      setDisplayValue(numPadButton);
    }
    else {
      setDisplayValue((prev) => {
        console.log("next input: ", displayValue)
        return prev + numPadButton
      });
    }
  };

  const handleEqualClick = () => {
    if (displayValue === "0") return;
    let result = evaluateExpression(displayValue);
    setResult(result.toString());
    setExpression(displayValue);
    addToHistory();
    setDisplayValue(result.toString());
    addCalculationHistory();
  };

  const handleAllClearClick = () => {
    setDisplayValue("0");
  };

  const handleClearClick = () => {
    setDisplayValue("AC");
  };
  
  function evaluateExpression(expression: string): number {
    // Parse and validate the expression
    const tokens = parseInput(expression);
  
    // Evaluate expressions inside parentheses first
    let stack: (number | string)[] = [];
    for (const element of tokens) {
      const token = element;
      if (token === "(") {
        stack.push(token);
      } else if (token === ")") {
        let innerStack: (number | string)[] = [];
        while (stack[stack.length - 1] !== "(") {
          innerStack.unshift(stack.pop()!);
        }
        stack.pop();
        stack.push(evaluateExpression(innerStack.join("")));
      } else {
        stack.push(token);
      }
    }
  
    // Evaluate exponents next
    stack = evaluateOperators(stack, ["^"]);
  
    // Evaluate roots next
    stack = evaluateOperators(stack, ["v"]);
  
    // Evaluate multiplication and division next
    stack = evaluateOperators(stack, ["*", "/"]);
  
    // Evaluate addition and subtraction next
    stack = evaluateOperators(stack, ["+", "-"]);
  
    // Evaluate percentages last
    stack = evaluateOperators(stack, ["%"]);
  
    // Return the final result
    return Number(stack[0]);
  }
  
  function evaluateOperators(stack: (number | string)[], operators: string[]): (number | string)[] {
    let result: (number | string)[] = [];
    let i = 0;
    while (i < stack.length) {
      const token = stack[i];
      if (operators.includes(token.toString())) {
        switch (token) {
          case "+":
          case "-":
          case "*":
          case "/":
          case "^":
            const operand1 = Number(result.pop());
            const operand2 = Number(stack[i + 1]);
            switch (token) {
              case "+":
                result.push(operand1 + operand2);
                break;
              case "-":
                result.push(operand1 - operand2);
                break;
              case "*":
                result.push(operand1 * operand2);
                break;
              case "/":
                result.push(operand1 / operand2);
                break;
              case "^":
                result.push(Math.pow(operand1, operand2));
                break;
              default:
                break;
            }
            i += 2;
            break;
          case "v":
            const operand = Number(result.pop());
            result.push(Math.sqrt(operand));
            i++;
            break;
          case "%":
            const percentageOperand = Number(result.pop());
            result.push(percentageOperand / 100);
            i++;
            break;
          default:
            break;
        }
      } else {
        result.push(token);
        i++;
      }
    }
    return result;
  }
  
  function addToHistory() {
    history.current.push(expression);
    console.log(history.current.toString());
  }

  async function updateHistory() {
    console.log("fetching history")
    try {
      // Check if the user is authenticated
      const user = await Auth.currentUserInfo();
  
      const userId = user.attributes.sub;
  
      const cloudHistoryData: any = await API.graphql<ListCalculationHistoriesQuery>(graphqlOperation(listCalculationHistories, { filter: { userId: { eq: userId } } }));
      const cloudHistory = cloudHistoryData.data?.listCalculationHistories.items;
      console.log("fetched: ", cloudHistory);
      history.current = history.current.concat(cloudHistory.map((item: CalculationHistory) => item.expression));
    } catch (e) {
      console.log("Error: ", e);
    }
  }
  

  function handleHistoryButton(): void {
    if (renderHistoryModal) {
      updateHistory();
    }
    setRenderHistoryModal(!renderHistoryModal);
  }

  function handleDisplayInput(): void {
    console.log(displayValue);
  }
  
  function evaluatePecentage(): void {
    console.log((parseFloat(displayValue) / 100).toString());
    setDisplayValue(prev => (Math.abs(parseFloat(prev) / 100)).toString());
  }

  function parseInput(input: string): Array<string> {
    const tokens: Array<string> = [];
    
    let currentToken = '';
    for (const element of input) {
      const char = element;
  
      // check for digit or decimal point
      if (/[\d.]/.test(char)) {
        currentToken += char;
      }
      // check for operator
      else if (/[+\-/*^v]/.test(char)) {
        // push current token to tokens array
        if (currentToken !== '') {
          tokens.push(currentToken);
          currentToken = '';
        }
        tokens.push(char);
      }
      // check for left bracket
      else if (char === '(') {
        if (currentToken !== '') {
          tokens.push(currentToken);
          currentToken = '';
        }
        tokens.push('(');
      }
      // check for right bracket
      else if (char === ')') {
        if (currentToken !== '') {
          tokens.push(currentToken);
          currentToken = '';
        }
        tokens.push(')');
      }
      // check for percentage
      else if (char === '%') {
        if (currentToken !== '') {
          tokens.push(currentToken);
          currentToken = '';
        }
        tokens.push('%');
      }
    }
  
    // push the final token if there is one
    if (currentToken !== '') {
      tokens.push(currentToken);
    }
  
    return tokens;
  }
  
  return (
    <div style={{backgroundColor:"orange"}}>
      <NavMenu />
      <Button label="History" onClick={handleHistoryButton} />
      {renderHistoryModal && (
        <div className="modal">
          <History expression={history.current} cloudCalculationHistory={null} />
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
              console.log(displayValue);
              setMemory(prev => prev + parseFloat(displayValue));
            }}
            onMemorySubtract={function (): void {
              setMemory(prev => prev - parseFloat(displayValue));
              console.log(memory);
            }}
            onMemoryClear={function (): void {
              setMemory(0);
            }}
            onMemoryRecall={function (): void {
              setDisplayValue(memory.toString());
            }}
          />
          <AdvancedFunctions calcPercentage={evaluatePecentage}
            onOperatorClick={handleNumPadClick} />
          <NumberPad
            onEqualClick={handleEqualClick}
            onNumPadClick={handleNumPadClick}
            handleAllClearClick={handleAllClearClick}
            handleClearClick={handleClearClick}
          
          handleNumberClick={function (number: string): void {
              throw new Error("Function not implemented.");
            } } handleDecimalClick={function (): void {
              throw new Error("Function not implemented.");
            } } onOperatorClick={function (operator: string): void {
              throw new Error("Function not implemented.");
            }}
            />

      </div>
      </div>
      </div>
  );
  
}

export default (App);


