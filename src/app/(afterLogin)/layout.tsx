export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 로그인 후 페이지 공통 레이아웃 or 로직 구현
  return (
    <>
    {children}
    </>
  );
}
