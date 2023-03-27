import React from "react";
import {AllClearButton, ClearButton} from "./ClearButton";

interface SpecialOperationsProps {
  handleAllClearClick: () => void;
  handleClearClick: () => void;
}

const SpecialOperations: React.FC<SpecialOperationsProps> = ({
  handleAllClearClick: handleAllClearClick,
  handleClearClick: handleClearClick
}) => {
  return (
    <div className="row">
      <AllClearButton onClick={handleAllClearClick} />
      <ClearButton onClick={handleClearClick} />
      <AllClearButton onClick={handleAllClearClick} />
      <ClearButton onClick={handleClearClick} />
    </div>
  );
};

export default SpecialOperations;
