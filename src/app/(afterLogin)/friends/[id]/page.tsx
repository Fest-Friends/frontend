export default function Page({params}:{params:{id:string}}) {
  const {id} = params;
  // 서버 컴포넌트는 다름
  return (<div>친구 상세정보 : {id}</div>);
}
