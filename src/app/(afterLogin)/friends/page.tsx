import Image from 'next/image';
import { FriendComponent } from './_component/FriendComponent';
export default function Page() {
  return (
    <div className="mt-10 w-full px-5">
      <div className="mb-6 text-[28px] leading-[39.2px]">
        나의 성격과 맞는
        <br />
        <span className="font-semibold text-primary">공연 프렌즈</span>를 찾아보세요!
      </div>
      <div className="flex w-full justify-end gap-3 py-6 leading-[22.4px] cursor-pointer text-textLess">
        <div>조건을 설정하고 싶어요</div>
        <Image
          src={'/image/arrow_down.png'}
          alt="조건 필터링"
          width={16}
          height={16}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-5">
        <FriendComponent />
        <FriendComponent />

        <FriendComponent />

        <FriendComponent />

        <FriendComponent />

      </div>
    </div>
  );
}
