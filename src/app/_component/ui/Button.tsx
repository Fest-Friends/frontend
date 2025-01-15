'use client';
import { useEffect, useState } from 'react';

interface ButtonProps {
  text?: string;
  mt?: string;
  width?: string;
  color?: boolean;
}

export default function Button({ text = 'button', mt, width = '100%', color = true }: ButtonProps) {
  const [isClient, setIsclient] = useState(false);

  useEffect(() => {
    setIsclient(true);
  }, []);

  return (
    isClient && (
      <button
        className={`items-center justify-center rounded-xl py-3 text-sm font-semibold first-line:flex ${
          color
            ? 'text-textDark bg-primary'
            : 'border-textPlaceholder border bg-areaBg text-textLess'
        }`}
        style={{ marginTop: mt, width: width }}
      >
        {text}
      </button>
    )
  );
}
