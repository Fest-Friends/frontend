import React from 'react';
import Image from 'next/image';
import Button from '@/app/_component/ui/Button';

const ConcertDetailInfo = () => {
  return (
    <div className="relative h-fit w-full bg-areaBg pb-5">
      <Image
        width={168}
        height={222}
        src="/image/example.png"
        alt="포스터"
        className="absolute left-5 top-[-111px] rounded-lg object-cover"
      />
      <div className="flex justify-end p-5">
        <Image
          className="mr-4 flex-shrink-0"
          width={24}
          height={24}
          src="/image/share.png"
          alt="공유"
        />
        <Image
          className="flex-shrink-0"
          width={24}
          height={24}
          src="/image/share.png"
          alt="좋아요"
        />
      </div>
      <div className="mx-5">
        {' '}
        <p className="mb-1 mt-16 text-base font-medium text-textLess">블루스퀘어 마스터카드홀</p>
        <p className="text-xl font-semibold text-text">소란 winter concert ‘BE MY LIGHT’</p>
        <div className="mt-5 grid gap-2">
          <div className="flex">
            <p className="mr-5 w-12 text-sm font-medium text-textLess">장소</p>
            <p className="text-sm font-medium text-text">블루스퀘어 마스터카드홀</p>
          </div>
          <div className="flex">
            <p className="mr-5 w-12 text-sm font-medium text-textLess">공연기간</p>
            <p className="text-sm font-medium text-text">2024.12.27 ~ 2024.12.31</p>
          </div>
          <div className="flex">
            <p className="mr-5 w-12 text-sm font-medium text-textLess">공연시간</p>
            <p className="text-sm font-medium text-text">120분</p>
          </div>
        </div>
        <div className="mt-12 flex justify-between">
          <Button text="공연 친구 찾기" width="230px" />
          <Button text="알림 등록" width="107px" color={false} />
        </div>
      </div>
    </div>
  );
};

export default ConcertDetailInfo;
