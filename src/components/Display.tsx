import React from "react";

interface DisplayProps {
    value: string;
    onChange() : void;
}

const Display: React.FC<DisplayProps> = ({ value, onChange }) => {
    return <div className="display">{value}</div>;
    // <input className="display" type="text" value={value} onChange={onChange} />;
};

export default Display;
