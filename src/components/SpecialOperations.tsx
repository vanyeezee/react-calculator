import React from "react";
import ClearButton from "./ClearButton";

interface SpecialOperationsProps {
  handleClearClick: () => void;

}

const SpecialOperations: React.FC<SpecialOperationsProps> = ({
  handleClearClick
}) => {
  return (
    <div className="row">
      <ClearButton onClick={handleClearClick} />
      <ClearButton onClick={handleClearClick} />
      <ClearButton onClick={handleClearClick} />
      <ClearButton onClick={handleClearClick} />
    </div>
  );
};

export default SpecialOperations;
