'use client';
import Button from '@/app/_component/ui/Button';
import React, { useState } from 'react';

const SearchFriendsToggle = () => {
  const [friendsOn, setFriendsOn] = useState(false);

  const toggleHandler = () => {
    setFriendsOn(!friendsOn);
  };
  return (
    <div className="relative h-2 w-full rounded-[50px] bg-areaBg">
      <Button
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          left: `${friendsOn ? 'calc(100% - 168px)' : '0'}`,
          transition: '0.7s',
        }}
        width="168px"
        text={friendsOn ? '친구 모집 하기' : '친구 그만 받기'}
        color={friendsOn}
        bgColor="bg"
        onClick={toggleHandler}
      />
    </div>
  );
};

export default SearchFriendsToggle;
