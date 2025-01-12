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
      className={`w-full overflow-scroll whitespace-nowrap px-5 py-6 [&::-webkit-scrollbar]:hidden`}
    >
      {categoryTitleData.map((item, idx) => (
        <button
          onClick={() => handleClick(idx)}
          className={`${isActive === idx ? 'text-primary' : 'text-textMuted'} w-fit pr-5 text-lg font-normal`}
          key={item}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default CategoryTitle;
