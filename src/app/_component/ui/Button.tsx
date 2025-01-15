'use client';

type variantType = 'default' | 'secondary';

interface ButtonProps {
  text?: string;
  mt?: string;
  variant?: variantType;
}

export default function Button({ text = 'button', mt, variant = 'default' }: ButtonProps) {
  // useEffect(() => {
  //   setIsclient(true);
  // }, []);
  const variantCss: Record<variantType, string> = {
    default: 'bg-primary text-textDark ',
    secondary: 'text-primary border border-primary',
  };
  return (
    <button
      className={`w-full items-center justify-center rounded-xl py-3 first-line:flex ${variantCss[variant]} text-sm font-semibold`}
      style={{ marginTop: mt }}
    >
      {text}
    </button>
  );
}
