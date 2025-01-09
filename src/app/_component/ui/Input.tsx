'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface InputProps {
  type?: string;
  placeholder: string;
  value?: string;
  role?: string;
  isImg?: boolean; // Input에 이미지 추가 여부 ex)password, search
}

export default function Input({
  type = 'text',
  placeholder,
  value,
  role,
  isImg = false,
}: InputProps) {
  const [isClient, setIsclient] = useState(false);

  // Input Focus Border Control
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  // Show Password Control
  const [inputType, setInputType] = useState(type);
  const togglePWVisibility = () => {
    setInputType((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  useEffect(() => {
    setIsclient(true);
  }, []);

  return (
    isClient && (
      <div
        className={`flex w-full items-center gap-3 rounded-xl border bg-areaBg px-4 py-3 ${isFocused ? 'border-primary' : 'border-transparent'}`}
      >
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="placeholder:placeholder w-full bg-transparent text-sm text-white focus:outline-none"
        />

        {role === 'password' && isImg && (
          <Image
            width={20}
            height={20}
            src={inputType === 'password' ? '/image/visibility_off.png' : '/image/visibility.png'}
            alt="toggle visibility"
            onClick={togglePWVisibility}
            className="cursor-pointer"
          />
        )}
      </div>
    )
  );
}
