import React from "react";

type ClearButtonProps = {
  onClick: () => void;
};

const ClearButton: React.FC<ClearButtonProps> = ({ onClick }) => {
  return (
    <button className="clear-button" onClick={onClick}>
      AC
    </button>
  );
};

export default ClearButton;
