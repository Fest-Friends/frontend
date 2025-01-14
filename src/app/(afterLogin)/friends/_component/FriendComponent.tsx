'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Friend } from '../../_types/friends';

export function FriendComponent({
  id,
  introduction,
  name,
  gender,
  mbti,
  friendType,
  volume,
}: Friend) {
  return (
    <Link href={`/friends/${id}`} className="flex w-full justify-between rounded-lg bg-areaBg p-4">
      <div>
        <div className="text-sm font-medium leading-[19.6px] text-textLess">{introduction}</div>
        <div className="flex items-center gap-3">
          <div className="text-xl font-semibold">{name}</div>
        </div>
        <div className="mt-[18px] flex gap-6 text-sm font-medium leading-[19.6px]">
          <div className="flex flex-col gap-1">
            <div className="text-textLess">성별</div>
            <div>{gender}</div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-textLess">MBTI</div>
            <div>{mbti}</div>
          </div>
        </div>
          <div className="mt-[14px] flex items-start gap-0.5">
            <Image
              src="/image/volume.png"
              width={28}
              height={28}
              className="object-contain align-middle"
              alt="프렌즈 볼륨"
            />
            <div className="text-[28px] font-medium leading-[24px] text-primary">{volume}</div>
          </div>
      </div>
      <Image
        src={`/image/friend_type_${friendType}.png`}
        alt="친구 타입"
        width={89}
        height={112}
        className="h-full"
      />
    </Link>
  );
}
