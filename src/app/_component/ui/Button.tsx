interface ButtonProps {
  text?: string;
  mt?: string;
}

export default function Button({ text = 'button', mt }: ButtonProps) {
  return (
    <button
      className="w-full items-center justify-center rounded-xl bg-primary py-3 text-sm font-semibold text-textDark first-line:flex"
      style={{ marginTop: mt }}
    >
      {text}
    </button>
  );
}
