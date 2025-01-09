import Link from 'next/link';

import Input from '../../_component/ui/Input';
import Button from '@/app/_component/ui/Button';

export default function Login() {
  return (
    <div className="px-5 pt-20 flex flex-col gap-4">
      <div className='flex flex-col gap-4'>
        <Input placeholder="아이디를 입력하세요." />
        <Input placeholder="비밀번호를 입력하세요." isImg />
      </div>
      <Button text="로그인" />
      <div className='flex items-center text-sm gap-2 font-medium ml-1'>
        <span className='text-textLess font-medium'>아직 회원이 아니신가요?</span>
        <Link href="/signUp" className="text-primary font-semibold">회원가입</Link>
      </div>
    </div>
  );
}
