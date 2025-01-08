import Input from '../../_component/ui/Input';

export default function Login() {
  return (
    <div className="px-5 pt-20">
      <div className='flex flex-col gap-4'>
        <Input placeholder="아이디를 입력하세요." />
        <Input placeholder="비밀번호를 입력하세요." isImg />
      </div>
    </div>
  );
}
