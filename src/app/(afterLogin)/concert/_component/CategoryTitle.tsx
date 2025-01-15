'use client';
import React, { useEffect, useState } from 'react';
import { categoryTitleData } from '../_constants/categoryTitleData';

const CategoryTitle = () => {
  const [isActive, setIsActive] = useState<number | null>(0);

  useEffect(() => {
    setIsActive(0);
  }, []);

  const handleClick = (idx: number) => {
    if (isActive !== idx) {
      setIsActive(idx);
    }
  };
  return (
    <div
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
      className={`w-full overflow-scroll whitespace-nowrap p-5 [&::-webkit-scrollbar]:hidden flex gap-5`}
    >
      {categoryTitleData.map((item, idx) => (
        <button
          onClick={() => handleClick(idx)}
          className={`${isActive === idx ? 'text-primary' : 'text-textMuted'} w-fit text-lg ${isActive === idx ? 'font-semibold' : 'font-medium'} `}
          key={item}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default CategoryTitle;
