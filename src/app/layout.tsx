import type { Metadata } from 'next';
import './globals.css';
import TanStackProvider from './providers/TanStackProvider';
import Header from './_component/ui/Header';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

// 전체 페이지 레이아웃 or 로직
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-text">
        <TanStackProvider>
          <Header />
          <div className="mt-[65px]">{children}</div>
        </TanStackProvider>
      </body>
    </html>
  );
}
