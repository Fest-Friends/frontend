'use client';

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

function headerType(pathname: string): string {
  const logoHeader = ['/', '/consert'];
  if (logoHeader.includes(pathname)) {
    return 'logo';
  }
  return 'title';
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="flex w-full items-center justify-between px-5 h-[65px] fixed top-0">
      {headerType(pathname) === 'logo' && (
        <>
        <Link href = '/'>
          <Image width={94.79} height={25} alt="홈페이지로 이동" src="/image/logo.png" className='cursor-pointer'/>
          </Link>
        </>
      )}
      {headerType(pathname) === 'title' && (
        <>
        <div onClick={() => {router.back()}}>
          <Image width={20} height={20} alt="뒤로가기" src="/image/arrow_back.png" className='cursor-pointer'/>
          </div>
          <div className='md:text-xl'>
          타이틀
        </div>
        </>
      )}
      {/* 추후 메뉴 디자인 만들어지면 메뉴 컴포넌트로 대체 */}
      <Image width={24} height={24} alt = '메뉴' src = '/image/menu.png' className = 'cursor-pointer'/>
    </div>
  );
}
