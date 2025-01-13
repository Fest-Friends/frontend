import React from 'react';
import Image from 'next/image';

interface CategoryItemProps {
  name: string;
  location: string;
  period: string;
  imageUrl: string;
  likes: number;
  searchFriends: number;
  isLike: boolean;
}

const CategoryItem = ({
  name,
  location,
  period,
  imageUrl,
  likes,
  searchFriends,
  isLike,
}: CategoryItemProps) => {
  return (
    <div className="border-textMuted flex w-full border-b py-4">
      <Image
        width={107}
        height={142}
        src={imageUrl}
        alt="포스터"
        className="mr-4 flex-shrink-0 rounded-lg object-cover"
      />
      <div className="backgr flex h-[142px] flex-col justify-between">
        <div>
          <p className="text-textPlaceholder mb-1 text-sm font-medium">{location}</p>
          <p className="h-12 overflow-scroll text-base font-semibold text-text">{name}</p>
        </div>

        <div>
          <p className="mb-1 text-sm font-medium text-text">{period}</p>
          <div className="flex">
            <div className="mr-4 flex items-center">
              <Image
                className="mr-1 flex-shrink-0"
                width={16}
                height={16}
                src={`/image/favorite_${isLike ? 'active' : 'deActive'}.png`}
                alt="좋아요"
              />
              <p className="text-textPlaceholder text-sm font-medium"> {likes}</p>
            </div>

            <div className="flex items-center">
              <Image
                className="mr-1 flex-shrink-0"
                width={16}
                height={16}
                src="/image/person.png"
                alt="찾는친구인원수"
              />
              <p className="text-textPlaceholder text-sm font-medium">{searchFriends}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
