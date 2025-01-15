import ConcertDetailInfo from '../_component/ConcertDetailInfo';

export default async function Page({ params }: { params: { id: string } }) {
  // const { id } = await params;

  // 서버 컴포넌트는 다름
  return (
    <div className="mt-[147px]">
      <ConcertDetailInfo />
      {/* 
      
    <div></div>콘서트 상세정보 : {id} */}
    </div>
  );
}
