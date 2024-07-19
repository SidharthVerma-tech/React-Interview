import React from 'react';
import './index.css';

const TicTacToe = ({ board, onClick }) => {
  return (
    <div className='board'>
      {board.map((value, idx) => {
        const style = value === 'X' ? 'box x' : value === 'O' ? 'box o' : 'box';
        return (
          <button 
            key={idx} 
            className={style} 
            onClick={() => onClick(idx)}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
};

export default TicTacToe;
