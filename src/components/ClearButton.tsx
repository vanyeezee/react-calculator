import React from "react";

type ClearButtonProps = {
  onClick: () => void;
};

export const AllClearButton: React.FC<ClearButtonProps> = ({ onClick }) => {
  return (
    <button className="clear-button" onClick={onClick}>
      AC
    </button>
  );
};

export const ClearButton: React.FC<ClearButtonProps> = ({ onClick }) => {
  return (
    <button className="clear-button" onClick={onClick}>
      C
    </button>
  );
};