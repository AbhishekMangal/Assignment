import './App.css';
import { useState } from 'react';

function App() {
  const [matrix, setMatrix] = useState(Array(9).fill('zinc-300'));
  const [clicks, setClicks] = useState([]);

  const handleClick = (index) => {
    if (matrix[index] !== 'zinc-300') return;

    const newMatrix = [...matrix];
    newMatrix[index] = 'green';

    setMatrix(newMatrix);
    const clickOrder = [...clicks, index];

    setClicks(clickOrder);

    if (clickOrder.length === 9) {
      setTimeout(() => {
        clickOrder.forEach((idx, i) => {
          setTimeout(() => {
            newMatrix[idx] = 'orange';
            setMatrix([...newMatrix]);
          }, i * 500);
        });
      }, 1000);
    }
  };

  const handleRestart = () => {
    setMatrix(Array(9).fill('zinc-300'));
    setClicks([]);
  };

  return (
    <>
      <h1 className='text-center text-white text-5xl pb-5'>Assignment</h1>
      <div className='container grid grid-cols-3 gap-3 pt-5 w-80 place-content-center h-screen ms-auto me-auto'>
        {matrix.map((color, index) => (
          <div
            key={index}
            className={`rounded-sm w-24 h-24 p-0 m-0 ${color === 'zinc-300' ? 'bg-zinc-300' : color === 'green' ? 'bg-green' : 'bg-orange'}`}
            onClick={() => handleClick(index)}
          >
          </div>
        ))}
      </div>
      <button onClick={handleRestart} className='text-black bg-zinc-200 mt-4'>Restart</button>
    </>
  );
}

export default App;
