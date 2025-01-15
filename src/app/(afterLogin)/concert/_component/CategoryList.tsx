import React from 'react';
import { concertItemData } from '../_constants/concertItemData';
import CategoryItem from './CategoryItem';

const CategoryList = () => {
  return (
    <div className="w-full px-5 pb-5">
      {concertItemData.map((item, idx) => (
        <CategoryItem
          key={item.id}
          name={item.name}
          location={item.location}
          period={item.period}
          imageUrl={item.imageUrl}
          likes={item.likes}
          searchFriends={item.searchFriends}
          isLike={item.isLike}
          isFirst={idx === 0}
        />
      ))}
    </div>
  );
};

export default CategoryList;
