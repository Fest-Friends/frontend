'use client';
import { useEffect, useState } from 'react';

interface ButtonProps {
  text?: string;
  mt?: string;
}

export default function Button({
  text = 'button',
  mt,
}: ButtonProps) {

  const [isClient, setIsclient] = useState(false);

  useEffect(() => {
    setIsclient(true);
  }, []);

  return (
    isClient && (
      <button className="first-line:flex items-center justify-center w-full py-3 rounded-xl bg-primary text-textDark text-sm font-semibold" 
              style={{ marginTop: mt }}>
        {text}
      </button>
    )
  );
}
