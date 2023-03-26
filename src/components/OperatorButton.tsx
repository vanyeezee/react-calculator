import React from "react";
import "../styles.css"

interface OperatorButtonProps {
  operator: string;
  onClick: (operator: string) => void;
}

const OperatorButton: React.FC<OperatorButtonProps> = ({
  operator,
  onClick,
}) => {
  const handleClick = () => {
    onClick(operator);
  };

  return (
    <button onClick={handleClick} className="button">
      {operator}
    </button>
  );
};

export default OperatorButton;
