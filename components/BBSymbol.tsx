
import React from 'react';

interface BBSymbolProps {
  letter: string;
  number: number;
}

export const BBSymbol: React.FC<BBSymbolProps> = ({ letter, number }) => {
  return (
    <div className="relative w-14 h-14 md:w-20 md:h-20 flex justify-center items-center bg-gradient-to-br from-[#3c7f3c] to-[#1d411d] border-2 border-white rounded-lg shadow-lg">
      <span className="absolute top-1 right-2 text-[10px] md:text-sm font-bold text-white leading-none">
        {number}
      </span>
      <span className="text-2xl md:text-4xl font-bold text-white font-fell uppercase">
        {letter}
      </span>
    </div>
  );
};
