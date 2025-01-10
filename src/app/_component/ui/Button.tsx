'use client';
import { useEffect, useState } from 'react';

interface ButtonProps {
  text?: string;
}

export default function Button({
  text = 'button',
}: ButtonProps) {

  const [isClient, setIsclient] = useState(false);

  useEffect(() => {
    setIsclient(true);
  }, []);

  return (
    isClient && (
      <button className='flex items-center justify-center w-full py-3 rounded-xl bg-primary text-textDark text-sm font-semibold'>
        {text}
      </button>
    )
  );
}
