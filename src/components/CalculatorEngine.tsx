import { useRef, useState } from "react";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { createCalculationHistory } from "../graphql/mutations";

export const CalculatorEngine = () => {
  // Set up state variables
  const [displayValue, setDisplayValue] = useState("0"); // the value displayed in the calculator
  const history = useRef<string[]>([]); // an array of strings to store calculation history
  const [memory, setMemory] = useState<number>(0); // the memory value
  const [result, setResult] = useState<string>(""); // the result of the last calculation
  const [expression, setExpression] = useState<string>(""); // the expression to evaluate

  const handleNumPadClick = (numPadButton: string) => {
    if (displayValue === "0") {
      setDisplayValue(numPadButton);
    } else {
      setDisplayValue((prev) => {
        return prev + numPadButton;
      });
    }
  };

  // Function to handle the equal button click
  const handleEqualClick = () => {
    if (displayValue === "0") return;
    let result = evaluateExpression(displayValue);
    setResult(result.toString());
    setExpression(displayValue);
    addToHistory();
    setDisplayValue(result.toString());
    addCalculationHistory();
  };

  // Function to evaluate a mathematical expression
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
    stack = evaluateRoots(stack);

    // Evaluate multiplication and division next
    stack = evaluateOperators(stack, ["*", "/"]);

    // Evaluate addition and subtraction next
    stack = evaluateOperators(stack, ["+", "-"]);

    // Evaluate percentages last
    stack = evaluateOperators(stack, ["%"]);

    // Return the final result
    return Number(stack[0]);
  }

  // Function to evaluate operatos
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

  function evaluateRoots(stack: (number | string)[]): (number | string)[] {
    let result: (number | string)[] = [];
    let i = 0;
  
    while (i < stack.length) {
      const token = stack[i];
  
      if (token === "v") {
        const root = Number(result.pop());
        const radicand = Number(stack[i + 1]);
        result.push(Math.pow(radicand, 1 / root));
        i += 2;
      } else {
        result.push(token);
        i++;
      }
    }
  
    return result;
  }
  

  //function takes an input string and converts it into an array of tokens by checking for digits, operators, brackets, and percentages.
  //The resulting array is then returned.
  function parseInput(input: string): Array<string> {
    const tokens: Array<string> = [];

    let currentToken = "";
    for (const element of input) {
      const char = element;

      // check for digit or decimal point
      if (/[\d.]/.test(char)) {
        currentToken += char;
      }
      // check for operator
      else if (/[+\-/*^v]/.test(char)) {
        // push current token to tokens array
        if (currentToken !== "") {
          tokens.push(currentToken);
          currentToken = "";
        }
        tokens.push(char);
      }
      // check for left bracket
      else if (char === "(") {
        if (currentToken !== "") {
          tokens.push(currentToken);
          currentToken = "";
        }
        tokens.push("(");
      }
      // check for right bracket
      else if (char === ")") {
        if (currentToken !== "") {
          tokens.push(currentToken);
          currentToken = "";
        }
        tokens.push(")");
      }
      // check for percentage
      else if (char === "%") {
        if (currentToken !== "") {
          tokens.push(currentToken);
          currentToken = "";
        }
        tokens.push("%");
      }
    }

    // push the final token if there is one
    if (currentToken !== "") {
      tokens.push(currentToken);
    }

    return tokens;
  }

  // Function pushes the current expression to the history array
  function addToHistory() {
    history.current.push(expression); // Add the expression to the history's current array
  }

  // Function to add a calculation history item to the database
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
      // Save the new item to the database
      await API.graphql(
        graphqlOperation(createCalculationHistory, { input: newHistory })
      );

      console.log("Successfully added CalculationHistory item!");
    } catch (error) {
      console.error("Error adding CalculationHistory item:", error);
    }
  };

  return {
    displayValue,
    setDisplayValue,
    memory,
    setMemory,
    history,
    handleNumPadClick,
    handleEqualClick
  };

};

export default CalculatorEngine;
