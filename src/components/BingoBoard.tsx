import React from 'react';
import { BingoNumber } from '../data/bingoContent';

interface BingoBoardProps {
  markedNumbers: number[];
  showQuinaMessage: boolean;
}

export const BingoBoard: React.FC<BingoBoardProps> = ({ markedNumbers, showQuinaMessage }) => {
  return (
    <div className="bingo-board">
      {[...Array(69)].map((_, i) => {
        const number = i + 1;
        const isMarked = markedNumbers.includes(number);
        return (
          <div
            key={number}
            className={`bingo-number ${isMarked ? 'marked' : ''} ${
              !isMarked && showQuinaMessage ? 'faded' : ''
            }`}
          >
            {number.toString().padStart(2, '0')}
          </div>
        );
      })}
    </div>
  );
};