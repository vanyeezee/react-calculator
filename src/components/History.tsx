import React from 'react';

interface HistoryProps {
    history: string[]|null;
}
  
function idGenerator(index: number): number {
      
    return index ** 2;
  }
  
  const History: React.FC<HistoryProps> = ({ history }) => {
    return (
      <div>
        <h2>History</h2>
        <ul>
          {history && history.map((item, index) => (
            <li key={idGenerator(index)}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  
export default History;