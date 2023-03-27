import React from "react"
import {Button} from "./Button";

interface MemoryFunctionsProps {
    onMemoryAdd: () => void;
    onMemorySubtract: () => void;
    onMemoryClear: () => void;
    onMemoryRecall: () => void;
}

const MemoryFunctions: React.FC<MemoryFunctionsProps> = ({ onMemoryAdd, onMemorySubtract, onMemoryClear, onMemoryRecall }) => {
    return (
        <div className="row">
            <Button label="M+" onClick={() => onMemoryAdd()} />
            <Button label="M-" onClick={() => onMemorySubtract()} />
            <Button label="MR" onClick={() => onMemoryRecall()} />
            <Button label="MC" onClick={() => onMemoryClear()} />
        </div>
    );
}

export default MemoryFunctions;