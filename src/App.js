import './App.css';
// import Accordian2 from './components/Accordian2';
//import Accordian2 from './components/Accordian2';
// import ImageSlider from './components/ImageSlider/ImageSlider';
import './App.css';
import TicTacToe from './components/Tic-Tac-Toe/TicTacToe';
import { useState } from 'react';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);

  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O"; 
      } else {
        return value;
      }
    });
    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  };

  return (
    <div className="App">
      <TicTacToe board={board} onClick={handleBoxClick} />
    </div>
  );
}

export default App;
