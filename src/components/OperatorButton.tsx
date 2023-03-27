import React from "react";
import "../styles.css"

interface OperatorButtonProps {
  operator: string;
  onOperatorClick: (operator: string) => void;
}

const OperatorButton: React.FC<OperatorButtonProps> = ({
  operator,
  onOperatorClick: onClick,
}) => {

  return (
    <button onClick={() => onClick(operator)} className="button">
      {operator}
    </button>
  );
};

export default OperatorButton;
