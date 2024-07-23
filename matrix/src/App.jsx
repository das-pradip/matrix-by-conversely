import { useState } from 'react';
import './App.css'

function App() {
  const initialMatrix = Array(3).fill().map(() => Array(3).fill('white'));
  const [matrix, setMatrix] = useState(initialMatrix);
  const [clickSequence, setClickSequence] = useState([]);

  const handleBoxClick = (rowIndex, colIndex) => {
    if (rowIndex === 2 && colIndex === 2) {
      let newMatrix = initialMatrix.map(row => row.slice());
      clickSequence.forEach(([r, c], index) => {
        setTimeout(() => {
          newMatrix[r][c] = 'orange';
          setMatrix([...newMatrix]);
        }, index * 500);
      });
    } else {
      let newMatrix = [...matrix];
      newMatrix[rowIndex][colIndex] = 'green';
      setMatrix(newMatrix);
      setClickSequence([...clickSequence, [rowIndex, colIndex]]);
    }
  };

  return (
    <>
     <div className="matrix">
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((color, colIndex) => (
            <div
              key={colIndex}
              className="box"
              style={{ backgroundColor: color }}
              onClick={() => handleBoxClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
    </>
  )
}

export default App
