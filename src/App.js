import './App.css';
import { useState } from 'react';

function App() {
  const [matrix, setMatrix] = useState(Array(9).fill('zinc-300'));
  const [clicks, setClicks] = useState([]);
  const [allClick, setAllclick] = useState(false);

  const handleClick = (index) => {
    if (matrix[index] !== 'zinc-300') return;

    const newMatrix = [...matrix];
    newMatrix[index] = 'green';

    setMatrix(newMatrix);
    const clickOrder = [...clicks, index];

    setClicks(clickOrder);

    if (clickOrder.length === 9) {
      setAllclick(true);
      setTimeout(() => {
        clickOrder.forEach((idx, i) => {
          setTimeout(() => {
            newMatrix[idx] = 'orange';
            setMatrix([...newMatrix]);
            if(i == clickOrder.length -1){
            setAllclick(false);
            }
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
      <h1 className='text-center text-white text-5xl font-bold pb-5'>Assignment</h1>
      <div className='container grid grid-cols-3 gap-3 pt-5 w-80 place-content-center h-screen mx-auto'>
        {matrix.map((color, index) => (
          <div
          key={index}
          className={`rounded-sm w-24 h-24 p-0 m-0 ${color === 'zinc-300' ? 'bg-zinc-300' : color === 'green' ? 'bg-green' : 'bg-orange'}`}
          onClick={() => handleClick(index)}
          >
          </div>
        ))}
       <button
          onClick={handleRestart}
          className='text-white bg-blue-600 mt-4 w-80 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out'
          disabled ={allClick}
        >
          Restart
        </button>
      </div>
    </>
  );
}

export default App;
