'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface InputProps {
  type?: string;
  placeholder: string;
  value?: string;
  isImg?: boolean; // Input에 이미지 추가 여부 ex)password, search
}

export default function Input({
  type = 'text',
  placeholder,
  value,
  isImg = false,
}: InputProps) {

  const [isClient, setIsclient] = useState(false);

  useEffect(() => {
    setIsclient(true);
  }, []);

  return (
    isClient && (
      <div className='flex items-center gap-4 w-full py-3 px-4 rounded-xl bg-areaBg'>
        <input type={type} placeholder={placeholder} value={value} className='w-full bg-transparent text-sm focus:outline-none placeholder:text-textPlaceholder'/>
        {isImg && (
          <Image
            width={16}
            height={16}
            src="/image/arrow_back.png"
            alt="icon"
          />
        )}
      </div>
      
    )
  );
}
