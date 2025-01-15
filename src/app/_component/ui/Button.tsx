'use client';
import { useEffect, useState } from 'react';

interface ButtonProps {
  text?: string;
  mt?: string;
  width?: string;
  color?: boolean;
  bgColor?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function Button({
  text = 'button',
  mt,
  width = '100%',
  color = true,
  bgColor,
  style,
  onClick,
}: ButtonProps) {
  const [isClient, setIsclient] = useState(false);

  useEffect(() => {
    setIsclient(true);
  }, []);

  return (
    isClient && (
      <button
        onClick={onClick}
        className={`ease-in-outitems-center justify-center rounded-xl py-3 text-sm font-semibold transition-transform duration-500 first-line:flex ${
          color
            ? `text-textDark bg-primary`
            : `border-textPlaceholder border text-textLess bg-${bgColor}`
        }`}
        style={{ marginTop: mt, width: width, ...style }}
      >
        {text}
      </button>
    )
  );
}
