'use client';
import Image from 'next/image';

export function FriendComponent() {
  return (
    <div className="flex w-full justify-between bg-areaBg p-4 rounded-lg">
      <div>
        <div className="text-sm font-medium leading-[19.6px] text-textLess">공연 한줄소개</div>
        <div className="flex items-center gap-3">
          <div className="text-xl font-semibold">프렌즈 이름</div>
          <div className="flex items-center gap-1">
            <Image
              src="/image/volume_1.png"
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
              alt="프렌즈 볼륨"
            />
            <div className="text-[28px] font-medium leading-[24px] text-primary">72</div>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-1 text-sm font-medium leading-[19.6px]">
          <div className="flex gap-8">
            <div className="text-textLess">성별</div>
            <div>남</div>
          </div>
          <div className="flex gap-8">
            <div className="text-textLess">MBTI</div>
            <div>ISTJ</div>
          </div>
        </div>
      </div>
      <Image
        src="/image/friend_type.png"
        alt="친구 타입"
        width={89}
        height={112}
        className="h-full"
      />
    </div>
  );
}
