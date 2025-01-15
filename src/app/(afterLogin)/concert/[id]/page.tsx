import ConcertDetailInfo from '../_component/ConcertDetailInfo';
import Image from 'next/image';
import SearchFriendsToggle from '../_component/SearchFriendsToggle';

export default async function Page({ params }: { params: { id: string } }) {
  // const { id } = await params;
  // 서버 컴포넌트는 다름

  return (
    <div className="mb-40 mt-[147px]">
      <ConcertDetailInfo />
      <div className="flex w-full flex-col px-5 py-20">
        <div className='flex flex-col gap-1'>
          <p className="text-textMuted text-sm">프렌즈들한테 난 이렇게 보여요!</p>
          <p className="text-white text-2xl">
            프렌즈들이 날 찾을 수 있게
            <br />
            등록해볼까요?
          </p>
        </div>

        <div className="mt-6 mb-2 flex w-full justify-end items-center gap-1">
          <Image
            className="flex-shrink-0"
            width={20}
            height={20}
            src="/image/help.png"
            alt="help"
          />
          <p className="text-textLess text-sm">
            볼륨은 나의 신뢰지수를 의미해요!
          </p>
        </div>
        <SearchFriendsToggle />
      </div>

      {/* <div></div>콘서트 상세정보 : {id} */}
    </div>
  );
}
