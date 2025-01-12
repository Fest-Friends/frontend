import React from 'react';
import { concertItemData } from '../_constants/concertItemData';
import CategoryItem from './CategoryItem';

const CategoryList = () => {
  return (
    <div className="w-full px-5">
      {concertItemData.map((item) => (
        <CategoryItem
          key={item.id}
          name={item.name}
          location={item.location}
          period={item.period}
          imageUrl={item.imageUrl}
          likes={item.likes}
          searchFriends={item.searchFriends}
        />
      ))}
    </div>
  );
};

export default CategoryList;
