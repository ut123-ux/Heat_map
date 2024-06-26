import React, { useState } from 'react';
import HeatMap from './HeatMap';
import './App.css';

const App = () => {
  const initialMatrix = Array(3).fill().map(() => Array(3).fill(0));
  const [matrix, setMatrix] = useState(initialMatrix);

  const handleInputChange = (i, j, value) => {
    const newMatrix = matrix.map((row, rowIndex) =>
      rowIndex === i ? row.map((cell, cellIndex) => (cellIndex === j ? parseInt(value, 10) : cell)) : row
    );
    setMatrix(newMatrix);
  };

  const data = {
    max: 30,
    data: matrix.flatMap((row, i) =>
      row.map((value, j) => ({
        x: j * 100 + 50,
        y: i * 100 + 50,
        value: value > 0 ? value : 0  // Ensure value is non-negative
      }))
    )
  };

  return (
    <div className="app">
      <h1 className="title"><u>Interactive 3x3 Matrix HEAT MAP</u></h1>
      <div className='box' >
        <div className='matrix1'>
      <div className="matrix">
        {matrix.map((row, i) =>
          row.map((cell, j) => (
            <input
              key={`${i}-${j}`}
              className="matrix-input"
              type="number"
              value={cell}
              onChange={(e) => handleInputChange(i, j, e.target.value)}
              style={{
                backgroundColor:
                  cell > 0 ? 'red' :
                  cell < 0 ? 'yellow' :
                  'blue',
                color: 'black'
              }}
            />
            
          ))
        )}
      
      </div>
      </div>
      <div className="heatmap-wrapper">
        <HeatMap data={data} />
      </div>
      </div>
    </div>
  );
};

export default App;
