import React from "react"
import Button from "./Button";
import OperatorButton from "./OperatorButton";

interface AdvancedFunctionsProps {
    calcPercentage(): void;
    onOperatorClick: (operator: string) => void;
}

const AdvancedFunctions: React.FC<AdvancedFunctionsProps> = ({ calcPercentage, onOperatorClick }) => {
    return (
        <div className="row">
            <Button label="%" onClick={() => calcPercentage()} />
            <OperatorButton operator="v" onClick={onOperatorClick} />
            <OperatorButton operator="^" onClick={onOperatorClick} />
        </div>
    );
}

export default AdvancedFunctions;