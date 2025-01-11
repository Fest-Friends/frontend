import Button from '@/app/_component/ui/Button';
import Image from 'next/image';
export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  // 서버 컴포넌트는 다름
  return (
    <div className="mt-[147px] flex w-full flex-col">
      <div className="relative flex w-full flex-col items-start bg-areaBg p-5">
        <Image
          src="/image/friend_detail_type.png"
          alt="상세정보 프렌즈 타입"
          width={168}
          height={213}
          className="absolute top-0 right-5 transform -translate-y-1/2"
        />
        <div className="text-sm font-medium leading-[19.6px] text-textLess">공연 한줄소개</div>
        <div className="text-[28px] font-semibold leading-[39.2px]">뭘 봐!</div>
        <div className="mt-5 flex items-start gap-4 text-sm leading-[19.6px]">
          <div className="flex flex-col gap-2 text-textLess">
            <div>성별</div>
            <div>음악 취향</div>
            <div>감상 타입</div>
            <div>MBTI</div>
          </div>
          <div className="flex flex-col gap-2">
            <div>남</div>
            <div>음악 취향</div>
            <div>감상 타입</div>
            <div>MBTI</div>
          </div>
        </div>
        <div className="mt-12 w-full flex justify-between">
          <div className="text-[16px] leading-[22.4px]">
            <span className="text-[40px] font-semibold leading-[56px] text-primary">72</span>
            <span className="text-[28px] font-semibold leading-[39.2px] text-primary"> </span>
            <span>Volume</span>
          </div>
          <div className='pt-2 pb-1 h-full flex-1 max-w-[300px]'><Button text='공연 친구 맺기' variant='secondary'/></div>
        </div>
      </div>
    </div>
  );
}
